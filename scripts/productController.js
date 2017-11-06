const storedProducts = JSON.parse(localStorage.getItem("productDatabase")).products

const productsEl = document.getElementById("products_section")

let productsContent = ""

const updateProducts = storedProducts.forEach( (product) => {
    productsContent += `
        <section id="product_${product.productId}">
            <h1>${product.title}</h1>
            <img src="${product.image}" alt="${product.title}">
            <p>${product.description}</p>
            <p>${product.price}</p>
            <p>${product.quantity}</p>
        </section>
        <section id="review_${product.productId}>
        </section>
    `

})
productsEl.innerHTML += productsContent

module.exports = updateProducts