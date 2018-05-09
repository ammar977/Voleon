const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TempVoteSchema = new Schema({
    seatId:{
        type:String
    },
    candidateId:{
        type:String
    },
    lumsId:{
        type:String
    },
    url:{
        type:String
    }
})

mongoose.model('TempVote',TempVoteSchema);
