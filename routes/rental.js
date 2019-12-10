const express = require('express')
const router = express.Router()

//All rovers route
router.get('/', (req, res) => {
    res.render('rental/index')
})

//New rovers route
router.get('/new', (req, res) => {
    res.render('rental/rent')
})

//Create rover route
router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router