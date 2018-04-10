const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const nev = require('email-verification')(mongoose);


// Load user model
require('../models/User');
const User = mongoose.model('User');

nev.configure({
    verificationURL: 'http://localhost:5000/user/verify${URL}',
    persistentUserModel: User,
 
    transportOptions: {
        service: 'Outlook',
        auth: {
            user: '19100176@lums.edu.pk',
            pass: '0344Telenor'
        }
    },
    verifyMailOptions: {
        from: 'Do Not Reply <19100176@lums.edu.pk>',
        subject: 'Please confirm account',
        html: 'Click the following link to confirm your account:</p><p>${URL}</p>',
        text: 'Please confirm your account by clicking the following link: ${URL}'
    },
    shouldSendConfirmation: false
}, function(error, options){
});

nev.generateTempUserModel(User, function(err, tempUserModel) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('generated temp user model: ' + (typeof tempUserModel === 'function'));
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

    retval = {success:true};
    res.json(retval);
});


// signup request from user 
router.post('/signup',(req,res) => {
    // server side validation
    let errors = [];

    // check if fields are empty 
    if (req.body.lumsId==="" || req.body.password==="" || req.body.password2 === "" || req.body.firstName==="" || req.body.lastName==="") {
        errors.push({text:"Please fill all fields"});
    }
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
        retVal = {verificationSent: false, err: errors};
        res.json(retVal);

    } else {
        // create newUser
        const newUser = new User({
            lumsId:req.body.lumsId,
            passHash:req.body.password,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            gender:req.body.gender,
            email:req.body.lumsId + "@lums.edu.pk"
        });

        // Add password hash to password field
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.passHash,salt,(err,hash)=>{
                if (err) throw err;
                newUser.passHash = hash;
            });
        });


        nev.createTempUser(newUser, function(err, existingPersistentUser,newTempUser) {

            if (err) throw err;
            
            // user already exists in persistent collection...
            if (existingPersistentUser) {

                errors.push({text:"User already exists"});
            }

            // a new user 
            if (newTempUser && errors.length < 1) {

                console.log('in newTempUser');
                var URL = newTempUser[nev.options.URLFieldName];
                nev.sendVerificationEmail(newUser.email, URL, function(err, info) {

                    if (err) throw err;

                    retVal = {verificationSent : true, pageType:'Verification'};
                    res.json(retVal);

                });
         
            // user already exists in temporary collection... 
            } else {

                retVal = {verificationSent: false, err:errors};
                res.json(retVal);
            }
        });

    }


});



// verification link opened 
router.get('/verify:URL',(req,res) => {
    
    url = req.params.URL;
    nev.confirmTempUser(url, function(err, user) {
        if (err) throw err;
            // handle error... 

        // user was found! 
        if (user) {
            // optional 
            // nev.sendConfirmationEmail(user['email'], function(err, info) {
            // //     // redirect to their profile... 
            //     console.log('Sending confirmation email');
            console.log('User added successfully');
            res.send('User added');
        }
     
        // user's data probably expired... 
        else {
            // redirect to sign-up 
            console.log('User not added');
            res.send('User not added');
        }
            
    });
})
// Logout User
router.get('/logout',(req,res)=> {

    req.logout();
    res.redirect('/users/loginfalse');

});

module.exports = router;