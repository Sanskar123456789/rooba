const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    properties : [{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }]
})

exports.categories = mongoose.model('categories', categorySchema);