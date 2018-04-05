const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Load user model
require('../models/User');
const User = mongoose.model('User');

// Home Page
router.get('/', (req, res) => {
    const message = '<h4>No route is defined for \'/\'</h4>'
    res.send(message);
});

// User register Route
router.post('/signup',(req,res,next)=>{
    res.send('user registered');
});

// User Login request Route
router.post('/feed',(req,res,next)=>{
    
    // Password validation
    // Insert passport JS here
    let retval = {success:false};
    User.find({lumsId:req.body.username})
    .then(user => {
        retval = {success: req.body.pass === user.passHash};
        res.json(retval);        
    });
});

// Logout User
router.get('/logout',(req,res)=> {
    // req.logout();
    // req.flash('success_msg','You are logged out');
    // res.redirect('/users/login');
    res.send('logout');
});

module.exports = router;