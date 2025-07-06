(function (){
    const portfolioItems = [
        {
            image: "assets/img/portfolio/Chamberlain Nutcracker Snow.jpg",
            title: "Chamberlain Nutcracker"
        },
        {
            image: "assets/img/portfolio/DSC_0287.JPG",
            title: "Show Title Here"
        },
        {
            image: "assets/img/portfolio/DSC_0288.JPG",
            title: "Show Title Here"
        },
        {
            image: "assets/img/portfolio/IMG_0941.JPG",
            title: "Show Title Here"
        },
        {
            image: "assets/img/portfolio/IMG_6482.JPG",
            title: "Show Title Here"
        },
        {
            image: "assets/img/portfolio/IMG_6495.JPG",
            title: "Show Title Here"
        },
        {
            image: "assets/img/portfolio/Into the Woods 2.jpg",
            title: "Into the Woods"
        },
        {
            image: "assets/img/portfolio/Into the Woods.jpg",
            title: "Into the Woods"
        },
        {
            image: "assets/img/portfolio/RNJ.jpg",
            title: "Show Title Here"
        }

    ];

    const portfolio = document.getElementById("portfolio");

    const sectionTitle = document.createElement("div");
    sectionTitle.className = "container section-title";
    sectionTitle.setAttribute("data-aos", "fade-up");
    const h2 = document.createElement("h2");
    h2.textContent = "Portfolio";
    sectionTitle.appendChild(h2);
    portfolio.appendChild(sectionTitle);

    const container = document.createElement("div");
    container.className = "container";
    const isotopeLayout = document.createElement("div");
    isotopeLayout.className = "isotope-layout";
    isotopeLayout.setAttribute("data-default-filter", "*");
    isotopeLayout.setAttribute("data-layout", "masonry");
    isotopeLayout.setAttribute("data-sort", "original-order");
    const row = document.createElement("div");
    row.className = "row gy-4 isotope-container";
    row.setAttribute("data-aos", "fade-up");
    row.setAttribute("data-aos-delay", "200");

    portfolioItems.forEach(item => {
        const { image, title } = item;
        const portfolioItem = document.createElement("div");
        portfolioItem.className = "col-lg-4 col-md-6 portfolio-item isotope-item";
        const img = document.createElement("img");
        img.src = image;
        img.className = "img-fluid";
        portfolioItem.appendChild(img);
        
        const portfolioInfo = document.createElement("div");
        portfolioInfo.className = "portfolio-info";
        const h4 = document.createElement("h4");
        h4.textContent = title;
        portfolioInfo.appendChild(h4);
        
        const previewLink = document.createElement("a");
        previewLink.href = image;
        previewLink.setAttribute("data-gallery", "portfolio-gallery-app");
        previewLink.className = "glightbox preview-link";
        const icon = document.createElement("i");
        icon.className = "bi bi-zoom-in";
        previewLink.appendChild(icon);
        
        portfolioInfo.appendChild(previewLink);
        portfolioItem.appendChild(portfolioInfo);
        
        row.appendChild(portfolioItem);
    });
    isotopeLayout.appendChild(row);
    container.appendChild(isotopeLayout);
    portfolio.appendChild(container);
})();