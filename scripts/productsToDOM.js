const productsToDOM = require("./updateProducts")
const reviewsToDOM = require("./updateReviews")

const productsEl = document.getElementById("products_section")
const reviewsEl = document.getElementsByClassName("reviews")

const updateDOM = (product, review) => {
    productsEl.innerHTML += productsToDOM

    if(review.productId === product.productId) {
        reviewsEl.innerHTML += reviewsToDOM
    }
}