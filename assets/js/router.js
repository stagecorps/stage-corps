const route = (e) => {
    e = e || window.event;
    e.preventDefault();
    window.history.pushState({}, "", e.target.href);
    handleLocation();
};

const routes = {
    404: "pages/404.html",
    "/stage-corps/": "pages/home.html",
    "/stage-corps/index.html": "pages/home.html",
    "/stage-corps/team": "pages/team.html",
    "/stage-corps/testimonials": "pages/testimonials.html",
    "/stage-corps/services/light-design": "pages/light-design.html",
    "/stage-corps/services/scenic-design": "pages/scenic-design.html",
    "/stage-corps/services/labor": "pages/labor.html",
    "/stage-corps/services/rentals": "pages/rentals.html",
    "/stage-corps/services/sales": "pages/sales.html",
    "/stage-corps/portfolio": "pages/portfolio.html",
    "/stage-corps/contact": "pages/contact.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then(data => data.text());
    console.log(html);
    document.querySelector("main").innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();