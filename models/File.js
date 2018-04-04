const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chunksSchema = newSchema({
    file_id:{ 
        type: String , 
        required: true 
    },

    data:{ type: Binary  }
});
