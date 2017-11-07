const storedReviews = JSON.parse(localStorage.getItem("betsyDatabase")).reviews

const reviewsEl = document.getElementsByClassName("reviews")

let reviewsContent = ""

const updateReviews = storedReviews.forEach( (review) => {
    reviewsContent += `
        <p>${review.review}</p>
        <p>written by: ${review.author}</p>
    `
})

reviewsEl.innerHTML += reviewsContent

// if the productId of the review is the same of the productId on the product then insert the review in that review section

// module.exports = updateReviews