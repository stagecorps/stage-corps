import { Container, Col, Row, Button, Image } from "react-bootstrap";

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <Container>
                <Row className="position-relative">
                    <Col lg={6} data-aos="fade-up" data-aos-delay="100">
                        <h2 className="inner-title">About Us</h2>
                        <h3>Our Story</h3>
                        <h4>Est 2010</h4>
                        <p>Stage Corps was founded in 2010 by Pavel Perebillo and Eric Gray in Richardson, Texas. Our goal is to
                            create a memorable experience for our clients and their guests. We strive to give you the best in
                            the
                            business, from lights to support.</p>
                        <Button variant="secondary" href="/team">Learn More</Button>
                    </Col>
                    <Col lg={6} className="about-img" data-aos="zoom-out" data-aos-delay="200">
                        <Image src="img/about.JPG" fluid></Image>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default About;