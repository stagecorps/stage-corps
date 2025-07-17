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

    const hero = document.getElementById('hero');
    const heroCarousel = document.createElement('div');
    heroCarousel.id = 'hero-carousel';
    heroCarousel.className = 'carousel slide carousel-fade';
    heroCarousel.setAttribute('data-bs-ride', 'carousel');
    heroCarousel.setAttribute('data-bs-interval', '5000');
   
    carouselItems.forEach(item => {
        const { image, title, description } = item;
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        if (item === carouselItems[0]) {
            carouselItem.classList.add('active');
        };
        const imageElement = document.createElement('img');
        imageElement.src = image;
        carouselItem.appendChild(imageElement);
        const container = document.createElement('div');
        container.className = 'container';
        const h2 = document.createElement('h2');
        h2.textContent = title;
        const p = document.createElement('p');
        p.textContent = description;
        const button = document.createElement('a');
        button.href = 'index.html#about';
        button.className = 'btn-get-started';
        button.textContent = 'Read More';
        container.appendChild(h2);
        container.appendChild(p);
        container.appendChild(button);
        carouselItem.appendChild(container);
        heroCarousel.appendChild(carouselItem);
    });
    
    const prev = document.createElement('a');
    prev.className = 'carousel-control-prev';
    prev.href = '#hero-carousel';
    prev.setAttribute('role', 'button');
    prev.setAttribute('data-bs-slide', 'prev');
    const prevIcon = document.createElement('span');
    prevIcon.className = 'carousel-control-prev-icon bi bi-chevron-left';
    prevIcon.setAttribute('aria-hidden', 'true');
    prev.appendChild(prevIcon);
    const next = document.createElement('a');
    next.className = 'carousel-control-next';
    next.href = '#hero-carousel';
    next.setAttribute('role', 'button');
    next.setAttribute('data-bs-slide', 'next');
    const nextIcon = document.createElement('span');
    nextIcon.className = 'carousel-control-next-icon bi bi-chevron-right';
    nextIcon.setAttribute('aria-hidden', 'true');
    next.appendChild(nextIcon);
    heroCarousel.appendChild(prev);
    heroCarousel.appendChild(next);
    const carouselIndicators = document.createElement('ol');
    carouselIndicators.className = 'carousel-indicators';
    heroCarousel.appendChild(carouselIndicators);
    hero.appendChild(heroCarousel);
})();