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

    temp = new Date(req.body.pollingDate)
    str = temp.toLocaleString()
    t = new Date(str);
    h = Number(req.body.pollingStartTime.substr(0,2))
    m = Number(req.body.pollingStartTime.substr(3,2))
    tempDate = new Date(t.getFullYear(),t.getMonth(),t.getDate(),h,m,0,0)
    h1 = Number(req.body.pollingEndTime.substr(0,2))
    m1 = Number(req.body.pollingEndTime.substr(3,2))
    tempDate1 = new Date(t.getFullYear(),t.getMonth(),t.getDate(),h1,m1,0,0)
    
    const newSeat = new Seat({
        electionId:req.body.electionId + '-' + '1',
        date: req.body.pollingDate,
        applicationEndDate: req.body.applicationDeadline,
        pollingStartTime:tempDate,
        pollingEndTime:tempDate1
    });

    const newSeat2 = new Seat({
        electionId:req.body.electionId + '-' + '2',
        date: req.body.pollingDate,
        applicationEndDate: req.body.applicationDeadline,
        pollingStartTime:tempDate,
        pollingEndTime:tempDate1
    });


    const newSeat3 = new Seat({
        electionId:req.body.electionId + '-' + '3',
        date: req.body.pollingDate,
        applicationEndDate: req.body.applicationDeadline,
        pollingStartTime:tempDate,
        pollingEndTime:tempDate1
    });

    newSeat.save();
    newSeat2.save(); 
    newSeat3.save();

    res.redirect('/election/');
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

    User.findOne({lumsId:req.user.lumsId})
    .then(user => {
        // If user has already voted
        if (user.voteStatus === 'Y') {
            retVal = {pageType:'Feed',error:"User has already voted."}
            res.json(retVal)
        
        } else {

            // If tempvote of this user already exists then 
            TempVote.findOne({lumsId:req.user.lumsId,seatId:req.body.seatId})
            .then(vote => {

                if (vote){
                    retVal = {pageType : "Feed", error : "Vote already cast but not verified"};
                    res.json(retVal);
                } else {

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
                            // res.end("error");
                        }else{
                            console.log("Message sent: " + response.message);
                            // res.end("sent");
                        }
                    });

                    retVal = {pageType : "Feed",error:""};
                    res.json(retVal);
                }

            })
        }  

    })
})


router.get('/vote/verify/:str',(req,res) => {

    TempVote.findOne({url: req.params.str })
    .then(vote => {
        if (vote) {

            Seat.findOne({_id:vote.seatId})
            .then(seat => {

                t = new Date();
                sec = t.getTime();

                if (!(sec > seat.pollingStartTime.getTime() && sec < seat.pollingEndTime.getTime() )) {
                    console.log(t.getTime())
                    console.log('seat date')
                    console.log(seat.date.getTime())
                    vote.remove()
                    res.send('Your vote has not been cast. Not in Polling Time')
                
                } else {
                    seat.results.forEach((element,index) => {
                    
                        if (element.candidateIdentifier === vote.candidateId) {
                            console.log('hello')
                            element.count = element.count + 1;
                        }
                    });
    
                    // Change user's vote status
                    User.findOne({lumsId:vote.lumsId})
                    .then(user => {
    
                        if (user.voteStatus === 'N') {
                            user.voteStatus = 'I'
                        } else if (user.voteStatus === 'I') {
                            user.voteStatus = 'Y'
                        }
                        user.save()
                        seat.save();
                        vote.remove()
                        res.send('Your Vote has been verified.')
                    })
                }

            })

        } else {
            
            res.send('Verification Link expired or it does not exist')
        }
         
    })
})


module.exports = router;
