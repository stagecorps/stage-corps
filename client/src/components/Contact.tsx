import { FC } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'

const Contact: FC = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
            </div>
            <Container>
                <Row>
                    <Col lg={6} className="d-flex flex-column justify-content-center align-items-stretch">
                        <div className="content">
                            <h3>Contact Us</h3>
                            <p>
                                Have questions or need assistance? Our team is here to help. Reach out to us via the form below or through our contact details.
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <form action="/submit-contact" method="post" className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-6 form-group">
                                    <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                            </div>
                            <div className="form-group">
                                <textarea name="message" className="form-control" rows={5} placeholder="Message" required></textarea>
                            </div>
                            <div className="text-center">
                                <Button className="text-dark" type="submit" variant="secondary">Send Message</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Contact;