import { FC } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const testimonials = [
    {
        name: "Marina Gonzalez",
        position: "Centennial High School Sweethearts Director",
        image: "img/testimonials/testimonials-6.jpg",
        stars: 5,
        quote: "Working with Stage Corps made show planning a breeze! From start to finish, the staff at Stage Corps was quick to respond and available to answer my questions. They have exceptional customer service and knowledgeable staff to ensure that you and your program are taken care of."
    },
    {
        name: "Matt Pearce",
        position: "Coppel Arts Center Production Supervisor",
        image: "img/testimonials/testimonials-4.jpg",
        stars: 5,
        quote: "We utilize Stage Corps when we need to supplement in house labor or have last minute gaps to fill. They're always willing to work with our timelines and able to send people that are easy to work with, flexible, and knowledgeable. Sallie especially goes above and beyond to make sure our needs are met. While we don't heavily rely on them, it's always good to know I can count on them when I need extra labor."
    }
];

const Testimonials: FC = () => {
    return (
        <section id="testimonials" className="section testimonials">
            <Container>
                <Row className="gy-4">
                    {testimonials.map((testimonial, index) => {
                        return (
                            <Col key={index} lg={6} data-aos="fade-up" data-aos-delay="100">
                                <div className="testimonial-item">
                                    <Image className="testimonial-img" src={testimonial.image} />
                                    <h3>{testimonial.name}</h3>
                                    <h4>{testimonial.position}</h4>
                                    <div className="stars">
                                        {[...Array(testimonial.stars)].map((_star, index) => <i key={index} className="bi bi-star-fill"></i>)}
                                    </div>
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>{testimonial.quote}</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>

    )
}

export default Testimonials;