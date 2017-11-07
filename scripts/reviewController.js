const storedReviews = JSON.parse(localStorage.getItem("betsyDatabase")).reviews


const updateReviews = storedReviews.forEach( (review) => {
    let reviewContent = ""
    const currentProductId = `${review.productId}` //get the product id
    if(currentProductId) {
        const reviewId = "review_" + currentProductId //id of corresponding review section
        const currentReviewEl = document.getElementById(reviewId) //get the corresponding review section
        reviewContent += `
            <section class="user_review">
                <p>${review.review}</p>
                <p class="author">written by: ${review.author}</p>
            </section>
        `
        currentReviewEl.innerHTML += reviewContent
    }
})



module.exports = updateReviews