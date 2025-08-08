import { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: FC = () => {
    return (
        <footer id="footer" className="footer dark-background">
            <Container className="footer-top">
                <Row className="gy-4">
                    <Col lg={4} md={6} className="footer-about">
                        <a href="/" className="logo d-flex align-items-center">
                            <span className="sitename">Stage Corps</span>
                        </a>
                        <div className="footer-contact pt-3">
                            <p>617 Business Pkwy</p>
                            <p>Richardson, TX 75081</p>
                            <p className="mt-3"><strong>Phone:</strong> <span>214-575-3750</span></p>
                            <p><strong>Email:</strong> <span>info@stagecorps.com</span></p>
                        </div>
                        <div className="social-links d-flex mt-4">
                            <a href="https://www.facebook.com/StageCorps"><i className="bi bi-facebook"></i></a>
                            <a href="https://www.instagram.com/stagecorps/"><i className="bi bi-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/stage-corps-llc/"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="/services/light-design">Lighting Design</a></li>
                            <li><a href="/services/scenic-design">Scenic Design</a></li>
                            <li><a href="/services/labor">Labor</a></li>
                            <li><a href="/services/rentals">Rentals</a></li>
                            <li><a href="/services/sales">Sales</a></li>
                        </ul>
                    </Col>
                    <Col lg={4} md={12} className="footer-newsletter">
                        <h4>Work with us!</h4>
                        <form action="https://api.web3forms.com/submit" method="post">
                            <input type="hidden" name="access_key" value="4819d7a3-7e54-437b-9f68-63bc87007d67" />
                            <input type="hidden" name="subject" value="New Contractor Contact" />
                            <input type="hidden" name="from_name" value="Leads" />
                            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                            <input type="hidden" name="redirect" value="https://stagecorps.onrender.com/thank-you" />
                            <div className="input-group">
                                <input className="form-control mb-1" type="text" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="input-group">
                                <input className="form-control mb-1" type="email" name="email" placeholder="Email" required />
                                <input className="form-control mb-1" type="tel" name="phone" placeholder="Phone" required />
                            </div>
                            <button className="form-control btn btn-secondary mb-1 " type="submit">Connect</button>
                        </form>
                    </Col>
                </Row>
            </Container>
            <Container className="copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong className="px-1 sitename">Stage Corps, Josh Hensley</strong> <span>All Rights
                    Reserved</span></p>
            </Container>
        </footer>)
}

export default Footer;