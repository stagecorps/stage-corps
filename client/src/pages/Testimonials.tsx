import { Container, Row, Col, Image } from "react-bootstrap";

const testimonials = [
    {
        name: "Saul Goodman",
        position: "Ceo & Founder",
        image: "img/testimonials/testimonials-1.jpg",
        stars: 5,
        quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
    },
    {
        name: "Sara Wilsson",
        position: "Designer",
        image: "img/testimonials/testimonials-2.jpg",
        stars: 5,
        quote: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
    },
    {
        name: "Jena Karlis",
        position: "Store Owner",
        image: "img/testimonials/testimonials-3.jpg",
        stars: 5,
        quote: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem enim duis veniam ipsum anim magna sunt elit fore quem dolore labore."
    },
    {
        name: "Matt Brandon",
        position: "Freelancer",
        image: "img/testimonials/testimonials-4.jpg",
        stars: 5,
        quote: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolore labore duis magna enim sint veniam duis veniam ipsum anim magna sunt elit fore quem dolore labore."
    },
    {
        name: "John Larson",
        position: "Entrepreneur",
        image: "img/testimonials/testimonials-5.jpg",
        stars: 5,
        quote: "Quis quorum aliqua sint quem legam fore sunt aliqua noster fugiat irure amet legam anim culpa. Qui officia deserunt mollit anim laborum cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Emily Harrison",
        position: "Store Owner",
        image: "img/testimonials/testimonials-6.jpg",
        stars: 5,
        quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
];

const Testimonials: React.FC = () => {
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