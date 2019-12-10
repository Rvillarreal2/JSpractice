const express = require('express')
const router = express.Router()

//All rovers route
router.get('/', (req, res) => {
    res.render('parking/index')
})

//New rovers route
router.get('/spot', (req, res) => {
    res.render('parking/spot')
})

//Create rover route
router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router