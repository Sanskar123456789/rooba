const mongoose = require('mongoose');

const propertySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    why: {
        type: String,
        required: true
    },
    what: {
        type: String,
        required: true
    },
    landmarks: {
        type: String,
        required: true
    },
    isSold: {
        type: Boolean,
        default: false
    },
    boughtBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    statusOfLand: {
        type: String,
        require: true
    },
    images : [String]
})

exports.property = mongoose.model('property',propertySchema);