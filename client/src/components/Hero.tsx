import { Carousel, Container, Image } from "react-bootstrap";
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
            <Carousel
                slide
                indicators
                interval={5000}
                touch
                activeIndex={activeIndex}
                onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}>
                {carouselItems.map((item, index) => {
                    return (
                        <Carousel.Item style={{height: '90vh'}} key={index}>
                            <Image src={item.image} fluid />
                            <Carousel.Caption>
                                <Container className="bg-dark bg-opacity-50 p-4 rounded w-50">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                </Container>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
    );
}
export default Hero;