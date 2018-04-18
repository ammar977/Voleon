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



module.exports = router;