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