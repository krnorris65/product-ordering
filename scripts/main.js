const productFactory = require("./productFactory")
const reviewFactory = require("./reviewFactory")


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


const reviewMug1 = reviewFactory(
    "Bob",
    "Otter Mug",
    "Disrupt twee echo park letterpress prism, cronut hot chicken heirloom shabby chic messenger bag fam paleo whatever coloring book ethical. Pop-up iPhone retro, kale chips palo santo fam biodiesel. Portland chillwave before they sold out church-key vaporware green juice iceland, etsy chartreuse mlkshk wayfarers skateboard."
)

const reviewMug2 = reviewFactory(
    "John",
    "Otter Mug",
    "Pork belly four dollar toast viral, four loko occupy raw denim brooklyn art party palo santo snackwave helvetica fashion axe you probably haven't heard of them."
)

const reviewMug3 = reviewFactory(
    "Anna",
    "Otter Mug",
    "Blue bottle photo booth banjo next level umami. Snackwave health goth roof party offal. Wolf yuccie whatever paleo gentrify. Butcher taiyaki roof party, lyft blue bottle activated charcoal skateboard microdosing tattooed vape before they sold out occupy enamel pin af VHS.")

const reviewFigurine1 = reviewFactory(
    "Betty",
    "Otter Figurine",
    "Tote bag intelligentsia master cleanse distillery. Man bun literally taiyaki air plant before they sold out shaman keytar lo-fi flannel irony aesthetic umami."
)

const reviewFigurine2 = reviewFactory(
    "Jack",
    "Otter Figurine",
    "Crucifix lomo shabby chic freegan, hoodie viral lumbersexual bushwick blue bottle green juice mumblecore ramps. Snackwave tumblr iPhone kitsch shaman hammock slow-carb humblebrag echo park synth butcher chartreuse marfa occupy."
)

const reviewFigurine3 = reviewFactory(
    "Cody",
    "Otter Figurine",
    "Fam vaporware hammock, humblebrag affogato lo-fi vape asymmetrical gluten-free cronut DIY craft beer. Portland organic heirloom distillery man bun, biodiesel semiotics."
)

const reviewPlush1 = reviewFactory(
    "Cody",
    "Plush Otter",
    "Woke meditation jianbing dreamcatcher man braid roof party intelligentsia. Tousled chicharrones green juice skateboard, cardigan next level polaroid fingerstache."
)

const reviewPlush2 = reviewFactory(
    "Jerry",
    "Plush Otter",
    "Knausgaard sartorial actually vaporware drinking vinegar hexagon, flannel marfa cred vice. Fanny pack glossier venmo, chillwave cred tbh pinterest enamel pin cray tote bag 8-bit kinfolk."
)

const reviewPlush3 = reviewFactory(
    "Art",
    "Plush Otter",
    "Kombucha pickled farm-to-table brunch woke food truck you probably haven't heard of them migas. Cold-pressed umami kogi typewriter salvia leggings chia echo park."
)

const productDatabase = {}

productDatabase.products = [product1, product2, product3]
productDatabase.reviews = [reviewMug1, reviewMug2, reviewMug3, reviewFigurine1, reviewFigurine2, reviewFigurine3, reviewPlush1, reviewPlush2, reviewPlush3]


localStorage.setItem("productDatabase", JSON.stringify(productDatabase))