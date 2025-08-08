import { FC } from 'react';

const Contact: FC = () => {
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
                        <form action="https://api.web3forms.com/submit" method="post" role="form" className="php-email-form">
                            <input type="hidden" name="access_key" value="4819d7a3-7e54-437b-9f68-63bc87007d67" />
                            <input type="hidden" name="subject" value="Message from a new client!" />
                            <input type="hidden" name="from_name" value="Leads" />
                            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                            <input type="hidden" name="redirect" value="https://stagecorps.onrender.com/thank-you" />
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                                        required />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                                        required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone Number"
                                    required />
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" placeholder="Message" required></textarea>
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