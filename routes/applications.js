const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const fs = require('fs');
const grid = require("gridfs-stream");
const bodyParser = require('body-parser');


let conn = mongoose.connection;
grid.mongo = mongoose.mongo;
let gfs ;

// on coonection open
conn.once('open',() => {
    gfs = grid(conn.db);
    console.log('hey')
});


router.get('/:fileName',(req,res)=>{
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


router.post('/upload',(req, res) => {

    let file = req.files.file;
    let writeStream = gfs.createWriteStream({
        filename: file.name
    });

    writeStream.on('close', (file_) => {
        // checking for file
        if(!file_) {
          res.status(400).send('No F received');
        }
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