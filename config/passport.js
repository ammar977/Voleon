const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Load user model
require('../models/User')
const User = mongoose.model('User');


module.exports = function(passport){
    passport.use(new LocalStrategy((username,password,done)=> {
        // match user
        User.findOne({lumsId: username})
        .then(user => {

            if(!user) {
                return done(null,false,{message: 'No user found'});
            }
            
            // match password
            bcrypt.compare(password,user.passHash,(err,isMatch)=> {
                if(err) throw err;

                if(isMatch) {
                    return done(null,user);
                } else {
                    return done(null,false,{message: 'Incorrect Password'}); 
                }
            })
        });
    }));
    

    passport.serializeUser(function(user, done) {
        done(null, user.lumsId);
      });
      
      passport.deserializeUser(function(lumsId, done) {
        User.findById(lumsId, function(err, user) { // findbyId is a mongoose function
          done(err, user);
        });
      });
}