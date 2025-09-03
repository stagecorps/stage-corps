import { Carousel } from "react-bootstrap";
import { FC, useState } from "react";

const Hero: FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselItems = [
        {
            image: 'img/hero-carousel/hero-carousel-1.jpg',
            title: 'Service you can trust',
            description: 'Our experienced personnel will take care of all your production and event needs',
            link: '/services/production-support'
        },
        {
            image: 'img/hero-carousel/hero-carousel-2.jpeg',
            title: 'The gear that you need',
            description: 'We offer a diverse selection of equipment. From LEDs to fog machines, let us know how we can help you!',
            link: '/services/rentals'
        },
        {
            image: 'img/hero-carousel/hero-carousel-3.jpg',
            title: 'Qualified and imaginative designers',
            description: 'Our designers will help bring your ideas to life and make your productions shine!',
            link: '/services/light-design'
        }
    ];


    return (
        <section id="hero" className="hero section">
            <Carousel
                className="carousel"
                fade
                slide
                indicators
                interval={5000}
                touch
                activeIndex={activeIndex}
                onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}>
                {carouselItems.map((item, index) => {
                    return (
                        <Carousel.Item style={{ height: '90vh' }} key={index}>
                            <img className="img-fluid carousel-img" src={item.image} />
                            <Carousel.Caption className="p-4 bg-dark bg-opacity-50 carousel-caption">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <a href={item.link} className="btn-get-started">Read More</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </section>
    );
}
export default Hero;