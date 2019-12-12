const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    Model: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    carCount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Car', carSchema)