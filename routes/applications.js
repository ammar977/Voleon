const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const fs = require('fs');
const grid = require("gridfs-stream");
const {ensureAuthenticated} = require('../helpers/auth');

require('../models/User');
const User = mongoose.model('User');

require('../models/ElectionSeat');
const Seat = mongoose.model('ElectionSeat');

// function to add candiate to electionSeat
const addCandidate = (roll,reserved) => {
    let batch = roll.substr(0,2);
    let seatNo = '';
    if (roll.substr(2,2) === '10' && reserved===false) {
        // SSE seat
        seatNo = 1;

    } else if (reserved && req.user.gender === 'F') {
        // female seat
        seatNo = 3;

    } else {
        // General seat
        seatNo = 2;
    }
    // add seat validation code here.

    User.findOne({lumsId:roll})
    .then(user => {
        Seat.findOne({electionId: batch + '-' + seatNo })
        .then(seat => {
            seat.candidates.push(user._id);
            seat.save();
        })
    })
};


let conn = mongoose.connection;
grid.mongo = mongoose.mongo;
let gfs ;

// on coonection open
conn.once('open',() => {
    gfs = grid(conn.db);
    console.log('hey')
});


router.get('/:fileName',ensureAuthenticated,(req,res)=>{
    console.log('searching file');
    gfs.files.findOne({ filename: req.params.fileName }, (err, file) => {
        if (err) return res.status(400).send(err);
        if (!file) return res.status(404).send('');
    
        res.set('Content-Type', file.contentType);
        res.set('Content-Disposition', 'attachment; filename="' + file.filename + '"');
    
        readStream = gfs.createReadStream({
          _id: file._id
        });
    
        readStream.on("error", function(err) {
          console.log("Got error while processing stream " + err.message);
          res.end();
        });
    
        readStream.pipe(res);
      });
});

// Upload application on non-reserved seat
router.post('/upload',ensureAuthenticated,(req, res) => {
    let file = req.files.file;
    let writeStream = gfs.createWriteStream({
        filename: req.user.lumsId + '_' + file.name
    });

    writeStream.on('close', (file_) => {
        // checking for file
        if(!file_) {
          res.status(400).send('No F received');
        }

        // add user as election candidate on general/SSE seat
        addCandidate(req.user.lumsId,false);

        // add file reference to user 
        User.findOne({lumsId: req.user.lumsId})
        .then(user => {
            gfs.files.findOne({filename:req.user.lumsId + '_' + file.name})
            .then(fileStored => {
                user.application = fileStored._id;
                user.save();
            })
        });

        return res.status(200).send({
            message: 'Success',
            file: file_
        });
    });

    writeStream.write(file.data, () => {
        writeStream.end();
    });
});


// Upload application on reserved seat
router.post('/upload/reserved',ensureAuthenticated,(req, res) => {
    let file = req.files.file;
    let writeStream = gfs.createWriteStream({
        filename: req.user.lumsId + '_' + file.name
    });

    writeStream.on('close', (file_) => {
        // checking for file
        if(!file_) {
          res.status(400).send('No F received');
        }

        // add user as election candidate on reserved seat
        addCandidate(req.user.lumsId,true);

        // add file reference to user 
        User.findOne({lumsId: req.user.lumsId})
        .then(user => {
            gfs.files.findOne({filename:req.user.lumsId + '_' + file.name})
            .then(fileStored => {
                user.application = fileStored._id;
                user.save();
            })
        });

        return res.status(200).send({
            message: 'Success',
            file: file_
        });
    });

    writeStream.write(file.data, () => {
        writeStream.end();
    });
});

module.exports = router;