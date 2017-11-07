(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const productFactory = require("./productFactory")
const reviewFactory = require("./reviewFactory")
const navBar = require("./navigation")

const productDatabase = {
    "products": [],
    "reviews": []
}


//products to add to database
const product1 = productFactory(
    "Otter Mug",
    "16 oz Ceramic mug with hand-painted otter image. Hand wash only",
    14.99,
    9,
    "../img/otter_mug.jpg"
)

const product2 = productFactory(
    "Otter Figurine",
    "Hand carved wooden otter with seashell. 3 inches tall",
    5.49,
    17,
    "../img/otter_figurine.jpg"
)

const product3 = productFactory(
    "Plush Otter",
    "Washable stuffed otter. 12 inches tall",
    8.99,
    3,
    "../img/otter_plush.jpg"
)

//reviews to add to database
const review1 = reviewFactory(
    "Bob",
    101,
    "Disrupt twee echo park letterpress prism, cronut hot chicken heirloom shabby chic messenger bag fam paleo whatever coloring book ethical. Pop-up iPhone retro, kale chips palo santo fam biodiesel. Portland chillwave before they sold out church-key vaporware green juice iceland, etsy chartreuse mlkshk wayfarers skateboard."
)

const review2 = reviewFactory(
    "John",
    101,
    "Pork belly four dollar toast viral, four loko occupy raw denim brooklyn art party palo santo snackwave helvetica fashion axe you probably haven't heard of them."
)

const review3 = reviewFactory(
    "Anna",
    101,
    "Blue bottle photo booth banjo next level umami. Snackwave health goth roof party offal. Wolf yuccie whatever paleo gentrify. Butcher taiyaki roof party, lyft blue bottle activated charcoal skateboard microdosing tattooed vape before they sold out occupy enamel pin af VHS.")

const review4 = reviewFactory(
    "Betty",
    102,
    "Tote bag intelligentsia master cleanse distillery. Man bun literally taiyaki air plant before they sold out shaman keytar lo-fi flannel irony aesthetic umami."
)

const review5 = reviewFactory(
    "Jack",
    102,
    "Crucifix lomo shabby chic freegan, hoodie viral lumbersexual bushwick blue bottle green juice mumblecore ramps. Snackwave tumblr iPhone kitsch shaman hammock slow-carb humblebrag echo park synth butcher chartreuse marfa occupy."
)

const review6 = reviewFactory(
    "Cody",
    102,
    "Fam vaporware hammock, humblebrag affogato lo-fi vape asymmetrical gluten-free cronut DIY craft beer. Portland organic heirloom distillery man bun, biodiesel semiotics."
)

const review7 = reviewFactory(
    "Aaron",
    103,
    "Woke meditation jianbing dreamcatcher man braid roof party intelligentsia. Tousled chicharrones green juice skateboard, cardigan next level polaroid fingerstache."
)

const review8 = reviewFactory(
    "Jerry",
    103,
    "Knausgaard sartorial actually vaporware drinking vinegar hexagon, flannel marfa cred vice. Fanny pack glossier venmo, chillwave cred tbh pinterest enamel pin cray tote bag 8-bit kinfolk."
)

const review9 = reviewFactory(
    "Art",
    103,
    "Kombucha pickled farm-to-table brunch woke food truck you probably haven't heard of them migas. Cold-pressed umami kogi typewriter salvia leggings chia echo park."
)

productDatabase.products.push(product1, product2, product3)
productDatabase.reviews.push(review1, review2, review3, review4, review5, review6, review7, review8, review9)

localStorage.setItem("betsyDatabase", JSON.stringify(productDatabase))

},{"./navigation":2,"./productFactory":4,"./reviewFactory":6}],2:[function(require,module,exports){
const navEl = document.getElementById("navigation")

const navBar = function () {
    const navLinks = {
        "categories": {
            "page": "Categories",
            "link": "#"
        },
        "orders": {
            "page": "Orders",
            "link": "#"
        },
        "logOut": {
            "page": "Log Out",
            "link": "#"
        }
    }

    for(key in navLinks) {
        let currentLink = navLinks[key]

        navEl.innerHTML += `
            <li id="nav_${currentLink.page}"><a href="${currentLink.link}">${currentLink.page}</a></li>
        `
    }
}

module.exports = navBar
},{}],3:[function(require,module,exports){
const storedProducts = JSON.parse(localStorage.getItem("betsyDatabase")).products

const productsEl = document.getElementById("products_section")

let productsContent = ""

const updateProducts = storedProducts.forEach( (product) => {
    productsContent += `
        <article id="product_${product.productId}" class="product">
            <section id="info_${product.productId}" class="info">
                <h1 class="title">${product.title}</h1>
                <img src="${product.image}" alt="${product.title}">
                <p class="description">${product.description}</p>
                <p class="price">Price: ${product.price}</p>
                <p class="quantity">Number Available: ${product.quantity}</p>
            </section>
            <section id="review_${product.productId}" class="review">
                <h1>Reviews of ${product.title}</h1>
            </section>
        </article>
    `

})
productsEl.innerHTML += productsContent

module.exports = updateProducts
},{}],4:[function(require,module,exports){
const updateProducts = require("./productController")

const idFactory = function*() {
    let idNum = 101

    while (true) {
        yield idNum
        idNum++
    }
}

const idGenerator = idFactory()


const productFactory = (title, description, price, quantity, image) => {
    return Object.create(null, {
            "productId": {
                value: idGenerator.next().value,
                enumerable: true
            },
            "title": {
                value: title,
                enumerable: true
            },
            "description": {
                value: description,
                enumerable: true
            },
            "price": {
                value: price,
                enumerable: true
            },
            "quantity": {
                value: quantity,
                enumerable: true
            },
            "image": {
                value: image,
                enumerable: true
            }
        })
}


module.exports = productFactory

},{"./productController":3}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
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
},{"./reviewController":5}]},{},[1]);
