{
const navEl = document.getElementById("navigation")

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

let navContent = `<li><h1 id="company_name" style="display:inline">Betsy Co.</h1></li>`

for(key in navLinks) {
    let currentLink = navLinks[key]

    navContent += `
        <li id="nav_${currentLink.page}"><a href="${currentLink.link}">${currentLink.page}</a></li>
    `
}

navEl.innerHTML += navContent

}

module.exports = null