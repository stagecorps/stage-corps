(function (){
    const clientItems = [
        {
            image: "assets/img/clients/client-1.png",
            link: ""
        },
        {
            image: "assets/img/clients/client-2.png",
            link: ""
        },
        {
            image: "assets/img/clients/client-3.png",
            link: ""
        },
        {
            image: "assets/img/clients/client-4.png",
            link: ""
        },
        {
            image: "assets/img/clients/client-5.png",
            link: ""
        },
        {
            image: "assets/img/clients/client-6.png",
            link: ""
        },
        {
            image: "assets/img/clients/client-7.png",
            link: ""
        },
        {
            image: "assets/img/clients/client-8.png",
            link: ""
        }
    ]

    const clientsSection = document.getElementById("clients");
    clientsSection.innerHTML = `
<div class="container section-title" data-aos="fade-up">
    <h2>Clients</h2>
</div><!-- End Section Title -->

<div class="container" data-aos="fade-up" data-aos-delay="100">

    <div class="row g-0 clients-wrap">
        ${clientItems.map(item => `
            <div class="col-xl-3 col-md-4 client-logo">
                <a href="${item.link}">
                    <img src="${item.image}" class="img-fluid" alt="">
                </a>
            </div><!-- End Client Item -->
        `).join('')}

    </div>

</div>
    `;
})();