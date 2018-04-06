const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const passport = require('passport');


// Load user model
require('../models/User');
const User = mongoose.model('User');

// User register Route
router.post('/signup',(req,res,next)=>{
    res.send('user registered');
});


// dummy request comes after failed authentication from passport
router.get('/loginfalse',(req,res) => {

    // send false to client
    retval = {success:false};
    res.json(retval);
});


router.post('/login',(req,res,next)=>{

    // passport authentication
    passport.authenticate('local',{
        successRedirect: '/user/feed',
        failureRedirect: '/user/loginfalse',
    })(req,res,next); // weird passport syntax

});

// dummy request from passport authetication
router.get('/feed',(req,res)=>{
    console.log('successful');
    retval = {success:true};
    res.json(retval);
})

// Logout User
router.get('/logout',(req,res)=> {

    req.logout();
    res.redirect('/users/loginfalse');

});

module.exports = router;