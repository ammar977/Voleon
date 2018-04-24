const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {ensureAuthenticated} = require('../helpers/auth');

require('../models/ElectionSeat');
const Seat = mongoose.model('ElectionSeat');
require('../models/User');
const User = mongoose.model('User');


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
        retVal = {results : seat.voteCounts};
        res.json(retVal);
    })
})

module.exports = router;
