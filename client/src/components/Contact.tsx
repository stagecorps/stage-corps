import { FC, useState } from 'react';

const Contact: FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
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
    };

    return (
        <section id="contact" className="section contact">
            <div className="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
            </div>
            <div className="container" data-aos="fade">
                <div className="row gy-5 gx-lg-5">
                    <div className="col-lg-4">
                        <div className="info">
                            <h3>Get in touch</h3>
                            <div className="info-item d-flex">
                                <i className="bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <h4>Location:</h4>
                                    <p>617 Business Pkwy, Richardson, TX 75081</p>
                                </div>
                            </div>
                            <div className="info-item d-flex">
                                <i className="bi bi-envelope flex-shrink-0"></i>
                                <div>
                                    <h4>Email:</h4>
                                    <p><a href="mailto:info@stagecorps.com">info@stagecorps.com</a></p>
                                </div>
                            </div>
                            <div className="info-item d-flex">
                                <i className="bi bi-phone flex-shrink-0"></i>
                                <div>
                                    <h4>Call:</h4>
                                    <p><a href="tel:+12145753750">{`(214) 575-3750`}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <form onSubmit={handleSubmit} role="form" className="php-email-form">
                            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input onChange={handleChange} type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                                        required />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input onChange={handleChange} type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                                        required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input onChange={handleChange} type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone Number"
                                    required />
                            </div>
                            <div className="form-group mt-3">
                                <textarea onChange={handleChange} className="form-control" name="message" placeholder="Message" required></textarea>
                            </div>
                            <div className="text-center"><button type="submit" className="btn btn-secondary text-dark">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>)
}
export default Contact