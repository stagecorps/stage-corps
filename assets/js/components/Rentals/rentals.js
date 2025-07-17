(async () => {
    let rentalItems = [];
    for (let i = 1; i <= 20; i++) {
        const response = await fetch(`../assets/db/page${i}.json`);
        const data = await response.json();
        data.assets.forEach(item => rentalItems.push(item));
    }
    rentalItems = rentalItems.filter((item, index, self) => item.name != self[index - 1]?.name);
    document.getElementById('rental').innerHTML = `
<div class="container">

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <div id="display-case" class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

            ${rentalItems.map(item => {
        return `
                <div class="col-lg-4 col-md-6 portfolio-item isotope-item">
                    <img src=${item.display_image} class="img-fluid" alt="">
                    <div class="portfolio-info">
                        <h4>${item.name}</h4>
                        <a href=${item.display_image} data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
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