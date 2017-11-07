const storedReviews = JSON.parse(localStorage.getItem("betsyDatabase")).reviews

// const classArray = Array.from(reviewsEl)
// const reviewList = classArray.forEach()


const updateReviews = storedReviews.forEach( (review) => {
    let reviewContent = ""
    const currentProductId = `${review.productId}`
    if(currentProductId) {
        const reviewId = "review_" + currentProductId
        const currentReviewEl = document.getElementById(reviewId)
        reviewContent += `
            <section class="user_review">
                <p>${review.review}</p>
                <p>written by: ${review.author}</p>
            </section>
        `
        currentReviewEl.innerHTML += reviewContent
    }
})


// if the productId of the review is the same of the productId on the product then insert the review in that review section

module.exports = updateReviews