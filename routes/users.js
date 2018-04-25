const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const nev = require('email-verification')(mongoose);
const {ensureAuthenticated} = require('../helpers/auth');


// Load user model
require('../models/User');
const User = mongoose.model('User');

require('../models/Post');
const Post = mongoose.model('Post');

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

});


// dummy request comes after failed authentication from passport
router.get('/loginfalse',(req,res) => {

    console.log('unsuccessful');
    // send false to client
    retval = {success: false};
    res.json(retval);
});


router.post('/login',(req,res,next)=>{

    // // passport authentication
    // passport.authenticate('local',{
    //     successRedirect: '/user/feed0',
    //     failureRedirect: '/user/loginfalse',
    // })(req,res,next); // weird passport syntax

    passport.authenticate('local', (err,user,info) => {

        if (err)  
            return next(err); 

        if (!user) {
             return res.redirect('/user/loginfalse'); 
        }

        req.logIn(user, function(err) {
            if (err) { 
              return next(err); 
            }
            
          return res.redirect(`/user/feed${user.securityLevel}`);
        });
    })(req,res,next);
});

// dummy request from passport authetication
router.get('/feed:securityLevel',ensureAuthenticated,(req,res)=>{
    console.log('successful');

    Post.find()
    .then(posts_list => {
        User.findOne({lumsId:req.user.lumsId})
        .then(user => {
            user.postIds = undefined; 
            user.passHash = undefined;
            if (posts_list.length === 0) {

                retval = {success: true, userObj: user, pageType: 'Feed', userType:req.params.securityLevel, posts : []};
                res.json(retval);
                
            }
    
            retval = {success: true, userObj: user, pageType: 'Feed', userType:req.params.securityLevel, posts: posts_list};
            res.json(retval);
        })
        
    })
    
});


// signup request from user 
router.post('/signup',(req,res) => {
    // server side validation
    let errors = [];

    // check if fields are empty 
    if (req.body.lumsId==="" || req.body.password==="" || req.body.password2 === "" || req.body.firstName==="" || req.body.lastName==="") {
        errors.push({text:"Please fill all fields."});
    }
    // check if passwords match
    if(req.body.password!= req.body.password2){
        errors.push({text:'Passwords do not match.'});
    }

    // check password restrictions
    if(req.body.password.length < 4){
        errors.push({text:'Password must be atleast 4 characters.'});
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

                errors.push({text:"User already exists."});
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
    retval = {success: false, pageType:'Login'};
    res.json(retval);

});


router.get('/profile/:userid',ensureAuthenticated,(req,res) => {
    User.findOne({_id:req.params.userid})
    .then(userObj => {
        userObj.passHash = undefined;
        userObj.postIds = undefined;
        Post.find({posterId: req.params.userid})
        .then(posts_list => {

            retval = {
                user : userObj,
                posts: posts_list
            };

            res.json(retval);
        });
        
    });
});

module.exports = router;
