const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const User = mongoose.model('User');

electionSeatSchema = new Schema({

    electionId:{
        type: String , 
        required: true
    },

    name:{ 
        type: String
    },

    status:{  
        type: String  ,  
        default: 'Upcoming'  
    },

    date:{  
        type: Date 
    },

    applicationStartDate:{ 
        type: Date
    },

    applicationEndDate:{
        type: Date
    },

    pollingStartTimestamp:{  
        type: Date 
    },

    pollingEndTimestamp:{ 
        type: Date
    },

    // applications:{ type: objectid,  ref: 'File'},

    candidates:[{
        type: mongoose.Schema.Types.ObjectId , 
        ref: 'User'
    }],

    voteCounts:[{
        type: Number
    }]
});

mongoose.model('ElectionSeat',electionSeatSchema);