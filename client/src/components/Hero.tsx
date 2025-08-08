import { Carousel } from "react-bootstrap";
import { FC, useState } from "react";

const Hero: FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselItems = [
        {
            image: 'img/hero-carousel/hero-carousel-1.jpg',
            title: 'We are professional',
            description: 'Our personnel will take care of all your production and event needs',
        },
        {
            image: 'img/hero-carousel/hero-carousel-2.jpeg',
            title: 'Find what you need',
            description: 'We offer a diverse selection of different equipment. From LEDs to fog machines, let us know how we can help you!',
        },
        {
            image: 'img/hero-carousel/hero-carousel-3.jpg',
            title: 'Experienced designers',
            description: 'From stage to light designers, we have someone who can help you make your next event the best it can be.',
        }
    ];


    return (
        <section id="hero" className="hero section">
            <Carousel
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
                            <img className="img-fluid" src={item.image} />
                            <Carousel.Caption className="p-4 bg-dark bg-opacity-50">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <a href="#about" className="btn-get-started">Read More</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </section>
    );
}
export default Hero;