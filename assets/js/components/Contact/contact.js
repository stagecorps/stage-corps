(()=>{
    document.getElementById("contact").innerHTML = `
<div class="container section-title" data-aos="fade-up">
    <h2>Contact</h2>
</div>

<div class="container" data-aos="fade">

    <div class="row gy-5 gx-lg-5">

        <div class="col-lg-4">

            <div class="info">
                <h3>Get in touch</h3>

                <div class="info-item d-flex">
                    <i class="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                        <h4>Location:</h4>
                        <p>617 Business Pkwy, Richardson, TX 75081</p>
                    </div>
                </div><!-- End Info Item -->

                <div class="info-item d-flex">
                    <i class="bi bi-envelope flex-shrink-0"></i>
                    <div>
                        <h4>Email:</h4>
                        <p><a href="mailto:info@stagecorps.com">info@stagecorps.com</a></p>
                    </div>
                </div><!-- End Info Item -->

                <div class="info-item d-flex">
                    <i class="bi bi-phone flex-shrink-0"></i>
                    <div>
                        <h4>Call:</h4>
                        <p><a href="tel:+12145753750">(214) 575-3750</a></p>
                    </div>
                </div><!-- End Info Item -->

            </div>

        </div>

        <div class="col-lg-8">
            <form action="https://api.web3forms.com/submit" method="post" role="form" class="php-email-form">
                <input type="hidden" name="access_key" value="4819d7a3-7e54-437b-9f68-63bc87007d67">
                <input type="hidden" name="subject" value="Message from a new client!">
                <input type="hidden" name="from_name" value="Leads">
                <input type="checkbox" name="botcheck" style="display: none;">
                <input type="hidden" name="redirect" value="https://josh-hensley.github.io/stage-corps/thank-you.html">
                <div class="row">
                    <div class="col-md-6 form-group">
                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name"
                            required="">
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email"
                            required="">
                    </div>
                </div>
                <div class="form-group mt-3">
                    <input type="tel" class="form-control" name="phone" id="phone" placeholder="Your Phone Number"
                        required="">
                </div>
                <div class="form-group mt-3">
                    <textarea class="form-control" name="message" placeholder="Message" required=""></textarea>
                </div>
                <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit" class="btn btn-secondary text-dark">Send Message</button>
                </div>
            </form>
        </div><!-- End Contact Form -->

    </div>

</div>
`

})();