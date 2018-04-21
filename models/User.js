const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Post = mongoose.model('Post');
// const File = mongoose.model('File');

const userSchema = new Schema({

    lumsId : {
        type:String,
        required:true
    },
    
    passHash : {
        type:String
    },

    email : {
        type:String
    },
    
    firstName:{
        type:String
    },

    lastName:{
        type:String
    },

    gender:{
        type:String
    },

    voteStatus : {
        type:String,
        default: 'N'
    },

    securityLevel:{
        type:Number,
        default:0
    },

    postIds:{
        type:String
    },

    application: {
        type: mongoose.Schema.Types.ObjectId , 
        ref: 'fs.files'
    }

    // profile_pic:{
    //     type: Schema.Types.Objectid , 
    //     ref: ’File’
    // },

    // cover_pic: {
    //     type: Schema.Types.Objectid ,
    //      ref: ‘File’
    // }
    
});

mongoose.model('User',userSchema);