(async () => {
    const response = await fetch('../db/equipment.json');
    const rentalItems = await response.json();
    document.getElementById('rental').innerHTML = `
<div class="container section-title" data-aos="fade-up">
    <h2>Inventory</h2>
</div>
<div class="container">

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <div id="display-case" class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

            ${rentalItems.map(item => {
        return `
                <div class="col-lg-4 col-md-6 portfolio-item isotope-item">
                    <img src=${item.image} class="img-fluid" alt="">
                    <div class="portfolio-info">
                        <h4>${item.name}</h4>
                        <a href=${item.image} data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                        <a href=${item.name} title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                    </div>
                </div>
                `
    }).join('')}

          </div>

        </div>

      </div>
    `
})()