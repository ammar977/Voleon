const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const nev = require('email-verification')(mongoose);


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
});


// signup request from user 
router.post('/singup',(req,res) => {
    
    // server side validation
    let errors = [];

    // check if passwords match
    if(req.body.password!= req.body.password2){
        errors.push({text:'passwords do not match'});
    }

    // check password restrictions
    if(req.body.password.length < 4){
        errors.push({text:'password must be atleast 4 characters'});
    }

    if(errors.length > 0) {
        // send response to notify of incorrect information
        retVal = {verificationSent: true, err: errors};
        res.json(retVal);

    } else {
        // create newUser
        const newUser = User({
            lumsId:req.body.lumsId,
            password:req.body.password,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            gender:req.body.gender
        });

        // Add password hash to password field
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if (err) throw err;
                newUser.password = hash;
            });
        });
    

        nev.createTempUser(newUser, function(err, existingPersistentUser, newTempUser) {
            // some sort of error 
            if (err)
                // handle error... 
                console.log('Some sort of error');
         
            // user already exists in persistent collection... 
            if (existingPersistentUser)
                // handle user's existence... violently.
                errors.push({text:"User with this id already exists"}); 
         
            // a new user 
            if (newTempUser) {

                const URL = newUser.lumsId ;
                nev.sendVerificationEmail(email, URL, function(err, info) {
                    if (err)
                        // handle error... 
                retVal = {verificationSent : true};
                res.json(retVal);
                    // flash message of success 
                });
         
            // user already exists in temporary collection... 
            } else {
                retVal = {verificationSent: true, err:errors};
                res.json(retVal);
            }
        });

    }


});
// Logout User
router.get('/logout',(req,res)=> {

    req.logout();
    res.redirect('/users/loginfalse');

});

module.exports = router;