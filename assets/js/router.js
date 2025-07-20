const route = async (e) => {
    e.preventDefault();
    const path = e.target.getAttribute("href").split("/").pop();
    handleLocation();
    window.history.pushState({}, "", path);
};

const routes = {
    "/stage-corps/": "../../pages/main.html",
    "/stage-corps/index.html": "../../pages/main.html",
    "/stage-corps/team": "../../pages/team.html",
    "/stage-corps/testimonials": "../../pages/testimonials.html",
    "/stage-corps/light-design": "../../pages/light-design.html",
    "/stage-corps/scenic-design": "../../pages/scenic-design.html",
    "/stage-corps/labor": "../../pages/labor.html",
    "/stage-corps/sales": "../../pages/sales.html",
    "/stage-corps/rentals": "../../pages/rentals.html",
    "/stage-corps/portfolio": "../../pages/portfolio.html",
    "/stage-corps/contact": "../../pages/contact.html",
    "*": "../../main.html"
}

const handleLocation = async () => {
    const path = window.location.pathname.split("/").pop();
    const route = routes[path] ? routes[path] : routes["*"];
    const response = await fetch(route);
    const html = await response.text();
    document.querySelector("main").innerHTML = html;
}

handleLocation();