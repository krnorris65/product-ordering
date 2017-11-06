const reviewFactory = (author, product, review) => {
    return Object.create(null,{
        "product": {
            value: product,
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