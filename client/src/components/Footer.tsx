import { FC, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: `I'm interested in working with Stage Corps!`,
        phone: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ formData })
            });
            if (!response.ok) throw new Error('Failed to send message');
            window.location.href = '/thank-you';
        } catch (error) {
            console.error(error);
            alert('Error sending message');
        }
    }

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
                            <p className="mt-3"><strong>Phone:</strong> <a href="tel:12145753750">214-575-3750</a></p>
                            <p><strong>Email:</strong> <a href="mailto:info@stagecorps.com">info@stagecorps.com</a></p>
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
                        <form onSubmit={handleSubmit}>
                            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                            <div className="input-group">
                                <input onChange={handleChange} className="form-control mb-1" type="text" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="input-group">
                                <input onChange={handleChange} className="form-control mb-1" type="email" name="email" placeholder="Email" required />
                                <input onChange={handleChange} className="form-control mb-1" type="tel" name="phone" placeholder="Phone" required />
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