const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

require('../models/Post')
const Post = mongoose.model('Post');
require('../models/User')
const User = mongoose.model('User');

router.get('/',(req,res) => {

    Post.find()
    .then(posts_list=> {
      retval = {posts:posts_list};
      res.json(retval);
    })

});

router.get('/:username', (req,res) => {

    User.findOne({lumsId : req.params.username})
    .then(user => {
        Post.find({posterId:user._id})
        .then(posts_list => {
            retval = {posts:posts_list};
            res.json(retval);
        })
    })
    
})


module.exports =  router;