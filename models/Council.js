const mongoose = require('mongoose');
const Schema = mongoose.Schema;

councilSchema = new Schema({

    councilId:{
        type: String , 
        required: true 
    },

    passHash:{
        type: String 
    }
});

mongoose.model('Council',councilSchema);
