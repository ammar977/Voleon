const mongoose = require('mongoose');
const Schema = mongoose.Schema;

adminSchema = new Schema({

    adminId:{
        type: String , 
        required: true 
    },

    passHash:{
        type: String 
    }
});

mongoose.model('admin',adminSchema);
