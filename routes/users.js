const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


// Home Page
router.get('/', (req, res) => {
    const message = '<h4>No route is defined for \'/\'</h4>'
    res.send(message);
});

// User register Route
router.post('/signup',(req,res,next)=>{
    res.send('user registered');
});

// Logout User
router.get('/logout',(req,res)=> {
    // req.logout();
    // req.flash('success_msg','You are logged out');
    // res.redirect('/users/login');
    res.send('logout');
});

module.exports = router;