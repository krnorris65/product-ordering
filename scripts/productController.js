const storedProducts = JSON.parse(localStorage.getItem("betsyDatabase")).products

// const productsEl = document.getElementById("products_section")

let productsContent = ""

const updateProducts = storedProducts.forEach( (product) => {
    productsContent += `
        <article id="product_${product.productId}">
            <h1>${product.title}</h1>
            <img src="${product.image}" alt="${product.title}">
            <p>${product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Number Available: ${product.quantity}</p>
            <section class="reviews review_${product.productId}">
                <p>Reviews of ${product.title}</p>
            </section>
        </article>
    `

})
// productsEl.innerHTML += productsContent

module.exports = updateProducts