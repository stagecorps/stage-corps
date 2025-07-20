const route = async (e) => {
    e.preventDefault();
    const path = e.target.getAttribute("href").split("/").pop();
    handleLocation();
    window.history.pushState({}, "", path);
};

const routes = {
    "#/": "pages/main.html",
    "#/team": "pages/team.html",
    "#/testimonials": "pages/testimonials.html",
    "#/light-design": "pages/light-design.html",
    "#/scenic-design": "pages/scenic-design.html",
    "#/labor": "pages/labor.html",
    "#/sales": "pages/sales.html",
    "#/rentals": "pages/rentals.html",
    "#/portfolio": "pages/portfolio.html",
    "#/contact": "pages/contact.html"
}

const handleLocation = async () => {
    const path = window.location.pathname.split("/").pop();
    const route = routes[path] ? routes[path] : routes["*"];
    const response = await fetch(route);
    const html = await response.text();
    document.querySelector("main").innerHTML = html;
}

handleLocation();