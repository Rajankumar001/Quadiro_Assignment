const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
    name: { 
        type: String,
         required: true
         },
    description: { 
        type: String, 
        required: true 
    },
    comments: [{
         user: String,
          text: String
         }]
});

module.exports = mongoose.model('Item', ItemSchema);
