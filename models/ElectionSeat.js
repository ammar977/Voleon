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

    pollingStartTime:{  
        type: Date 
    },

    pollingEndTime:{ 
        type: Date
    },

    // applications:{ type: objectid,  ref: 'File'},

    candidates:[{
        type: mongoose.Schema.Types.ObjectId , 
        ref: 'User'
    }],

    voteCounts:[{
        type: Number
    }],

    results: [{
        candidateIdentifier:{ // mongo ID of candidate
            type:String
        },
        count : {
            type:Number
        }
    }]
});

mongoose.model('ElectionSeat',electionSeatSchema);