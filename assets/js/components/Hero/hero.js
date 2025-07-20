(function (){
     const carouselItems = [
        {
            image: 'assets/img/hero-carousel/hero-carousel-1.jpg',
            title: 'We are professional',
            description: 'Our personnel will take care of all your production and event needs',
        },
        {
            image: 'assets/img/hero-carousel/hero-carousel-2.jpeg',
            title: 'Find what you need',
            description: 'We offer a diverse selection of different equipment. From LEDs to fog machines, let us know how we can help you!',
        },
        {
            image: 'assets/img/hero-carousel/hero-carousel-3.jpg',
            title: 'Experienced designers',
            description: 'From stage to light designers, we have someone who can help you make your next event the best it can be.',
        }
    ];

    document.getElementById('hero').innerHTML = `
<div id="hero-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

    ${carouselItems.map(item => `
        <div class="carousel-item active">
            <img src=${item.image} alt="">
            <div class="container">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <a href="#about" class="btn-get-started">Read More</a>
            </div>
        </div>
        `).join('')}

    <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
    </a>

    <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
    </a>

    <ol class="carousel-indicators"></ol>

</div>
    `;
    
})();