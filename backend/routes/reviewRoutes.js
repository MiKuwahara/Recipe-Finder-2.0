const express = require('express')
const router = express.Router()


//get routes from review
router.get('/', (req, res) => {
    res.status(200).json({message: 'Get reviews'})
})

router.post('/', (req, res) => {
    res.status(200).json({message: 'Post reviews'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update review ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete review ${req.params.id}`})
})

module.exports = router