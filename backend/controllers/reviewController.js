// @desc   Get reviews
// @route  GET /api/reviews
//@access  Private
const getReviews = (req, res) => {
    res.status(200).json({ message: 'Get Reviews'})
}

// @desc   Create reviews
// @route  POST /api/reviews
//@access  Private
const postReview = (req, res) => {
    res.status(200).json({ message: 'Post a review'})
}

// @desc   Update reviews
// @route  PUT /api/reviews/:id
//@access  Private
const updateReview = (req, res) => {
    res.status(200).json({message: `Update review ${req.params.id}`})
}

// @desc   Delete review
// @route  DELETE /api/reviews/:id
//@access  Private
const deleteReview = (req, res) => {
    res.status(200).json({message: `Delete review ${req.params.id}`})
}


module.exports = {
    getReviews,
    postReview,
    updateReview,
    deleteReview,
}