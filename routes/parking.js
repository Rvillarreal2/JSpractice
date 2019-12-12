const express = require('express')
const router = express.Router()
const Booking = require('../models/bookings')

//New bookings route
router.get('/', (req, res) => {
    res.render('parking/index')
})

//New rovers route
router.get('/booking', (req, res) => {
    res.render('parking/booking', { booking: new Booking()})
})

//Create rover route
router.post('/', async (req, res) => {
    const booking = new Booking({
        first: req.body.first,
        last: req.body.last,
        phone: req.body.phone,
        email: req.body.email,
        parking: req.body.parking,
        dropoff: req.body.dropoff,
        pickup: req.body.pickup
    })
    res.send("Booking Confirmation: <br/>" + req.body.first + '<br/>' + req.body.phone
    + "<br/>" + req.body.email + " <br/>" + req.body.parking + "<br/>" + req.body.dropoff + "<br/>" + req.body.pickup)


    try{
        const newBooking = await AuthenticatorAssertionResponse.save()
    }catch{
        res.render('parking/booking', {
            errorMessage: 'Error submitting form'
        })
    }

    // booking.save((err, newBooking) =>{
    //     if(err){
    //         res.render('parking/booking', {
    //             errorMessage: 'Error submitting form'
    //         })
    //     }else{
    //         res.redirect('parking')
    //     }
    // })
    // res.send(req.body.first)
})

module.exports = router