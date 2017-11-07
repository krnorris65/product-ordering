const updateReviews = require("./reviewController")

const reviewFactory = (author, productId, review) => {
    return Object.create(null,{
        "productId": {
            value: productId,
            enumerable: true
        },
        "author": {
            value: author,
            enumerable: true
        },
        "review": {
            value: review,
            enumerable: true
        }
    })
}

module.exports = reviewFactory