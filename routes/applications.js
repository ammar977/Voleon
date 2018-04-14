const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.post('/upload', (req, res) => {
    // console.log(req.files);
    const message = '<h4>No route is defined for \'/\'</h4>'
    console.log('hello');
    res.send(message);
});

module.exports = router;