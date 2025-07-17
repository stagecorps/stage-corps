(function (){
    const portfolioItems = [
        {
            image: "../assets/img/portfolio/ChamberlainNutcrackerSnow.jpg",
            title: "Chamberlain Nutcracker"
        },
        {
            image: "../assets/img/portfolio/DSC_0287.JPG",
            title: "Show Title Here"
        },
        {
            image: "../assets/img/portfolio/DSC_0288.JPG",
            title: "Show Title Here"
        },
        {
            image: "../assets/img/portfolio/IMG_0941.JPG",
            title: "Show Title Here"
        },
        {
            image: "../assets/img/portfolio/IMG_6482.JPG",
            title: "Show Title Here"
        },
        {
            image: "../assets/img/portfolio/IMG_6495.JPG",
            title: "Show Title Here"
        },
        {
            image: "../assets/img/portfolio/IntotheWoods2.jpg",
            title: "Into the Woods"
        },
        {
            image: "../assets/img/portfolio/IntotheWoods.jpg",
            title: "Into the Woods"
        },
        {
            image: "../assets/img/portfolio/RNJ.jpg",
            title: "Show Title Here"
        }

    ];
    const portfolio = document.getElementById("portfolio");
    portfolio.innerHTML = `
<div class="container section-title" data-aos="fade-up">
    <h2>Portfolio</h2>
</div><!-- End Section Title -->

<div class="container">

    <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

        <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

            ${portfolioItems.map(item => `
                <div class="col-lg-4 col-md-6 portfolio-item isotope-item">
                    <img src=${item.image} class="img-fluid" alt="">
                    <div class="portfolio-info">
                        <h4>${item.title}</h4>
                        <a href=${item.image} data-gallery="portfolio-gallery-app"
                            class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    </div>
                </div>`).join('')}

        </div>

    </div>

</div>`;
})();