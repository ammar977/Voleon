const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const File = mongoose.model('File');
const User = mongoose.model('User');


const postSchema = new Schema({

    posterId:{
        type: mongoose.Schema.Types.ObjectId ,
         ref: 'User' , 
         required: true 
    },

    posterName:{
        type:String
    },

    timeStamp:{
        type: Date , 
        required: true
    },

    textContent:{ 
        type: String
    },

    comments:{
        required:false,
        commentId:{ 
            type: String , 
            // required: true
        },
        commenterId:{
            type: mongoose.Schema.Types.ObjectId , 
            ref: 'User' , 
            // required: true
        },
        timeStamp:{ 
            type: Date  , 
            // required: true  
        },
        content:{ 
            type: String
        },
    }

    // attachment:{
    //     type: Schema.Types.Objectid ,  
    //     ref: 'File' 
    // }
});

mongoose.model('Post',postSchema);