(function (){
  const currentPage = window.location.pathname.split("/").pop();
  const isIndexPage = currentPage === "index.html";
  const isThankYouPage = currentPage === "thank-you.html";
  const isDeployed = window.location.hostname != "127.0.0.1";
    document.getElementById("footer").innerHTML = `
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <span class="sitename">Stage Corps</span>
          </a>
          <div class="footer-contact pt-3">
            <p>617 Business Pkwy</p>
            <p>Richardson, TX 75081</p>
            <p class="mt-3"><strong>Phone:</strong> <span>214-575-3750</span></p>
            <p><strong>Email:</strong> <span>info@stagecorps.com</span></p>
          </div>
          <div class="social-links d-flex mt-4">
            <a href="https://www.facebook.com/StageCorps"><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/stagecorps/"><i class="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/company/stage-corps-llc/"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href=${isDeployed ? "/stage-corps/pages/light-design.html" : isIndexPage ? "pages/light-design.html" : "light-design.html"}>Lighting Design</a></li>
            <li><a href=${isDeployed ? "/stage-corps/pages/scenic-design.html" : isIndexPage ? "pages/scenic-design.html" : "scenic-design.html"}>Scenic Design</a></li>
            <li><a href=${isDeployed ? "/stage-corps/pages/labor.html" : isIndexPage ? "pages/labor.html" : "labor.html"}>Labor</a></li>
            <li><a href=${isDeployed ? "/stage-corps/pages/rentals.html" : isIndexPage ? "pages/rentals.html" : "rentals.html"}>Rentals</a></li>
            <li><a href=${isDeployed ? "/stage-corps/pages/sales.html" : isIndexPage ? "pages/sales.html" : "sales.html"}>Sales</a></li>
          </ul>
        </div>

        ${isThankYouPage ? '' : `
          <div class="col-lg-4 col-md-12 footer-newsletter">
            <h4>Work with us!</h4>
            <form action="https://api.web3forms.com/submit" method="post">
              <input type="hidden" name="access_key" value="4819d7a3-7e54-437b-9f68-63bc87007d67">
              <input type="hidden" name="subject" value="New Contractor Contact">
              <input type="hidden" name="from_name" value="Leads">
              <input type="checkbox" name="botcheck" style="display: none;">
              <input type="hidden" name="redirect" value="https://josh-hensley.github.io/stage-corps/thank-you.html">
              <div class="input-group">
                <input class="form-control mb-1" type="text" name="name" placeholder="Your Name" required>
              </div>
              <div class="input-group">
                <input class="form-control mb-1" type="email" name="email" placeholder="Email" required>
                <input class="form-control mb-1" type="tel" name="phone" placeholder="Phone" required>
              </div>
              <button class="form-control btn btn-secondary mb-1 " type="submit">Connect</button>
            </form>
          </div>`}

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">Stage Corps, Josh Hensley</strong> <span>All Rights
          Reserved</span></p>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a
          href=“https://themewagon.com>ThemeWagon
      </div>
    </div>
    `
})();