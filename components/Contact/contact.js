(function (){
    const contactSection = document.querySelector('#contact');
    const sectionTitle = document.createElement('div');
    sectionTitle.classList = 'container section-title';
    sectionTitle.setAttribute('data-aos', 'fade-up');
    const h2 = document.createElement('h2');
    h2.textContent = 'Contact';
    sectionTitle.appendChild(h2);
    contactSection.appendChild(sectionTitle);

    const container = document.createElement('div');
    container.classList = 'container';
    container.setAttribute('data-aos', 'fade');
    contactSection.appendChild(container);

    const row = document.createElement('div');
    row.classList = 'row gy-5 gx-lg-5';
    container.appendChild(row);

    const col = document.createElement('div');
    col.classList = 'col-lg-4';
    row.appendChild(col);

    const info = document.createElement('div');
    info.classList = 'info';
    col.appendChild(info);

    infoItems = [
        {
            icon: 'bi-geo-alt',
            title: 'Location:',
            content: '617 Business Pkwy, Richardson, TX 75081'
        },
        {
            icon: 'bi-telephone',
            title: 'Call:',
            content: '+1 972-234-1234'
        },
        {
            icon: 'bi-envelope',
            title: 'Email:',
            content: 'info@stagecorps.com'
        }
    ];

    infoItems.forEach(item => {
        const infoItem = document.createElement('div');
        infoItem.classList = 'info-item d-flex';
        info.appendChild(infoItem);

        const icon = document.createElement('i');
        icon.classList = `bi ${item.icon} flex-shrink-0`;
        infoItem.appendChild(icon);

        const contentDiv = document.createElement('div');
        infoItem.appendChild(contentDiv);

        const title = document.createElement('h4');
        title.textContent = item.title;
        contentDiv.appendChild(title);

        const content = document.createElement('p');
        content.textContent = item.content;
        contentDiv.appendChild(content);
    });

    const colForm = document.createElement('div');
    colForm.classList = 'col-lg-8';
    row.appendChild(colForm);
    const form = document.createElement('form');
    form.setAttribute('action', 'https://api.web3forms.com/submit');
    form.setAttribute('method', 'post');
    form.classList = 'php-email-form';
    colForm.appendChild(form);
    form.innerHTML = `
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
    `;

})();