const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema(
    {
        reviewerName: {
            type: String,
            required: [true, 'Please add a name']
        },
        //text where they can leave their review
        text: {
            type: String,
            required: [true, 'Please add a review text'],
        },
        //rate from 1 star to 5 stars
        rating: {
            // type: Number,
            type: String,
            enum: ['1 star', '2 stars', '3 stars', '4 stars', '5 stars'] ,
            required: [true, 'Please provide a rating'],
        },    
    },
    {
        timestamps: true,
    }   
)

module.exports = mongoose.model('Review', reviewSchema)