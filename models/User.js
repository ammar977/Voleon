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

    isCandidate:{
        type:Boolean,
        default:false
    },

    postIds:{
        type:String
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