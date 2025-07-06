(function (){
    const clientItems = [
        {
            image: "assets/img/clients/client-1.png",
            link: ""
        },
        {
            image: "assets/img/clients/client-2.png",
            link: ""
        },
        {
            image: "assets/img/clients/client-3.png",
            link: ""
        },
        {
            image: "assets/img/clients/client-4.png",
            link: ""
        },
        {
            image: "assets/img/clients/client-5.png",
            link: ""
        },
        {
            image: "assets/img/clients/client-6.png",
            link: ""
        },
        {
            image: "assets/img/clients/client-7.png",
            link: ""
        },
        {
            image: "assets/img/clients/client-8.png",
            link: ""
        }
    ]

    const clientsSection = document.getElementById("clients");
    const sectionTitle = document.createElement("div");
    sectionTitle.className = "container section-title";
    sectionTitle.setAttribute("data-aos", "fade-up");
    const h2 = document.createElement("h2");
    h2.textContent = "Clients";
    sectionTitle.appendChild(h2);
    clientsSection.appendChild(sectionTitle);

    const container = document.createElement("div");
    container.className = "container";
    container.setAttribute("data-aos", "fade-up");
    container.setAttribute("data-aos-delay", "100");
    const row = document.createElement("div");
    row.className = "row g-0 clients-wrap";
    clientItems.forEach(item => {
        const { image } = item;
        const col = document.createElement("div");
        col.className = "col-xl-3 col-md-4 client-logo";
        const img = document.createElement("img");
        img.src = image;
        img.className = "img-fluid";
        col.appendChild(img);
        row.appendChild(col);
    });

    container.appendChild(row);
    clientsSection.appendChild(container);
})();