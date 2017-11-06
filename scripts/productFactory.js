const idFactory = function*() {
    let idNum = 100

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
