const mongoose = require('mongoose')

const parkingSchema = new mongoose.Schema({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        validate: {
          validator: function(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
      },
      required: true
    },
    parking: {
        type: String,
        enum: ['VIP Parking', 'Regular Parking'],
        required: true
    },
    droppoff: {
        type: Date,
        required: true
    },
    pickup: {
        type: Date,
        required: true
    },
    parkingSpot: {
        type: Boolean,
        required: true
    },
    pSpot2: {
        type: Boolean,
        required: true
    },
    pSpot3: {
        type: Boolean,
        required: true
    },
    pSpot4: {
        type: Boolean,
        required: true
    },
    pSpot5: {
        type: Boolean,
        required: true
    },
    pSpot6: {
        type: Boolean,
        required: true
    },
    vippSpot1: {
        type: Boolean,
        required: true
    },
    vippSpot2: {
        type: Boolean,
        required: true
    },
    vippSpot3: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Booking', parkingSchema)