const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {ensureAuthenticated} = require('../helpers/auth');


require('../models/Post')
const Post = mongoose.model('Post');
require('../models/User')
const User = mongoose.model('User');

router.get('/',ensureAuthenticated,(req,res) => {
    
    Post.find()
    .then(posts_list=> {
      retval = {posts:posts_list};
      res.json(retval);
    })

});

router.get('/:username', ensureAuthenticated,(req,res) => {

    User.findOne({lumsId : req.params.username})
    .then(user => {
        Post.find({posterId:user._id})
        .then(posts_list => {

            if (!posts_list) {
                retval = {posts:[]};
                res.json(retval);
            }
            retval = {posts:posts_list};
            res.json(retval);
        })
    })
    
})

router.post('/new', ensureAuthenticated,(req,res) => {

    if (req.user.securityLevel === 0) {
        retval = {error:"User has no posting rights"}
        res.json(retval)
    }

    newPost = new Post({
        posterId:req.user._id,
        textContent:req.body.textContent,
        timeStamp:Date.now()
    })
    
    newPost.save()
    res.redirect('/post/')

})

module.exports =  router;