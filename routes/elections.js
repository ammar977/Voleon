const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer')
const randomstring = require('randomstring')
const router = express.Router();
const {ensureAuthenticated} = require('../helpers/auth');

require('../models/ElectionSeat');
const Seat = mongoose.model('ElectionSeat');
require('../models/User');
const User = mongoose.model('User');
require('../models/TempVote')
const TempVote = mongoose.model('TempVote')

// Node Mailer config
smtpTransport = nodemailer.createTransport({
    service: "Outlook",
    auth: {
        user: "19100176@lums.edu.pk",
        pass: "0344Telenor"
    }
});

router.post('/new',ensureAuthenticated,(req,res) => {
    console.log('in new election');
    console.log(req.body);
    const newSeat = new Seat({
        electionId:req.body.electionId + '-' + '1',
        date: req.body.pollingDate,
        applicationEndDate: req.body.applicationDeadline,
        pollingStartTime:req.body.pollingStartTime,
        pollingEndTime:req.body.pollingEndTime
    });

    const newSeat2 = new Seat({
        electionId:req.body.electionId + '-' + '2',
        date: req.body.pollingDate,
        applicationEndDate: req.body.applicationDeadline,
        pollingStartTime:req.body.pollingStartTime,
        pollingEndTime:req.body.pollingEndTime
    });


    const newSeat3 = new Seat({
        electionId:req.body.electionId + '-' + '3',
        date: req.body.pollingDate,
        applicationEndDate: req.body.applicationDeadline,
        pollingStartTime:req.body.pollingStartTime,
        pollingEndTime:req.body.pollingEndTime
    });

    newSeat.save();
    newSeat2.save(); 
    newSeat3.save();

    res.json({pageType:'ElectionCreation'});
})

router.get('/',ensureAuthenticated,(req,res) => {

    if (req.user.securityLevel === 2) {
        // student council account 
        Seat.find()
        .then(seats_list => {
            seats_list.map(seat => {
                seat.voteCounts = undefined;
                seat.results = undefined;                
                return seat;
            }); 


            retVal = {electionSeats: seats_list, pageType: "ElectionsList"};
            res.json(retVal);
        })

    } else {
        let batch = req.user.lumsId.substr(0,2);
        let school = req.user.lumsId.substr(2,2);
        let seatNo = '';

        // SSE 
        if (school === '10') 
            seatNo = '1';
        else 
            seatNo = '2';

        Seat.find({$or: [
            {electionId : batch + '-' + seatNo},
            {electionId : batch + '-' + '3'}
        ]}).then(seats_list => {
            seats_list = seats_list.map(seat => {
                seat.voteCounts = undefined;
                seat.results = undefined
                return seat;
            });

            retVal = {electionSeats: seats_list, pageType: "ElectionsList"};
            res.json(retVal);
        })
    }
    
})

router.get('/result/:electionId', ensureAuthenticated, (req,res) => {
    Seat.findOne({_id:req.params.electionId})
    .then(seat => {
        console.log(seat);
        retVal = {results : seat.results};
        res.json(retVal);
    })
})


router.post('/vote',ensureAuthenticated,(req,res) => {

    // If tempvote of this user already exists then 
    TempVote.findOne({lumsId:req.user.lumsId,seatId:req.body.seatId})
    .then(vote => {

        if (vote){
            retVal = {pageType : "Feed", error_msg : "Vote already ast but not verified"};
            res.json(retVal);
        }
    
        str = randomstring.generate()
        const newVote = new TempVote({
            lumsId:req.user.lumsId,
            seatId:req.body.seatId,
            candidateId:req.body.candidateId,
            url:str
        })
        newVote.save()

        link="http://"+req.get('host')+ "/election/vote/verify/" + str 

        mailOptions={
            to : req.user.email,
            subject : "Please confirm your Vote",
            html : "Hello,<br> Please Click on the link to verify your vote.<br> <a href="+link+">Click here to verify</a>" 
        }

        smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
                console.log(error);
                res.end("error");
            }else{
                console.log("Message sent: " + response.message);
                res.end("sent");
            }
        });

        retVal = {pageType : "Feed"};
        res.json(retVal);

    })

    
    // Seat.findOne({_id:req.body.seatId})
    // .then(seat => {
    //     seat.results.forEach((element,index) => {
            
    //         if (element.candidateIdentifier === req.body.candidateId) {
    //             console.log('hello')
    //             element.count = element.count + 1;
    //         }
    //     });

    //     seat.save();
    //     retVal = {pageType : "Feed"};
    //     res.json(retVal);
    // })
})


router.get('/vote/verify/:str',ensureAuthenticated,(req,res) => {

    TempVote.findOne({url: req.params.str })
    .then(vote => {
        if (vote) {

            Seat.findOne({_id:vote.seatId})
            .then(seat => {

                t = Date.now();
                if (!(t > seat.pollingStartTime && t <= seat.pollingEndTime)) {
                    res.send('Polling Time has Passed. Your vote has not been cast.')
                    vote.remove()
                }

                seat.results.forEach((element,index) => {
                    
                    if (element.candidateIdentifier === vote.candidateId) {
                        console.log('hello')
                        element.count = element.count + 1;
                    }
                });

                seat.save();
                vote.remove()
                retVal = {pageType : "Feed"};
                res.json(retVal);
                res.send('Your Vote has been registered.')

            })

        } else {
            
            res.send('Verification Link expired or it does not exist')
        }
         
    })
})


module.exports = router;
