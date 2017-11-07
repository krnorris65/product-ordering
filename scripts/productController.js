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