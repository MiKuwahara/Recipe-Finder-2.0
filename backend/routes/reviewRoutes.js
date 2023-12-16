const express = require('express')
const router = express.Router()
const {
    getReviews,
    postReview,
    updateReview, 
    deleteReview,
} = require('../controllers/reviewController')

//routes for get and post review
router.route('/').get(getReviews).post(postReview)

//routes for update and delete reviews
router.route('/:id').put(updateReview).delete(deleteReview)

module.exports = router