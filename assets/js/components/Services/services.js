(()=>{
    const currentPage = window.location.pathname.split('/').pop();
    const serviceDetails = document.getElementById('service-details');
    const serviceData = {
        "light-design.html": {
            image: "../assets/img/portfolio/IMG_0941.JPG",
            title: "Light Design",
            description: "We provide professional light design services for all types of events, ensuring your venue is perfectly illuminated to create the right atmosphere.",
        },
        "scenic-design.html": {
            image: "../assets/img/portfolio/DSC_0288.JPG",
            title: "Scenic Design",
            description: "Our scenic design team creates stunning backdrops and sets that transform your event space into a visual masterpiece.",
        },
        "labor.html": {
            image: "../assets/img/portfolio/RNJ.jpg",
            title: "Labor",
            description: "We offer skilled labor services for all your event needs, from setup to teardown, ensuring everything runs smoothly."
        },
        "rentals.html": {
            image: "../assets/img/equipment/ETCIONXE20Console.jpg",
            title: "Rentals",
            description: "Explore our extensive range of rental equipment, from lighting to staging, to make your event a success.",
        },
        "sales.html": {
            image: "../assets/img/portfolio/DSC_0287.JPG",
            title: "Sales",
            description: "We provide high-quality equipment for sale, including lighting, sound systems, and staging materials, to help you create unforgettable events."
        }};
    serviceDetails.innerHTML = `
<div class="container">

    <div class="row gy-4">

        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="services-list">
                <a href="light-design.html">Light Design</a>
                <a href="scenic-design.html">Scenic Design</a>
                <a href="labor.html">Labor</a>
                <a href="rentals.html">Rentals</a>
                <a href="sales.html">Sales</a>
            </div>

            <h4>We offer a wide variety of services.</h4>
            <p>We are here to help you get the job done.</p>
        </div>

        <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">
            <img src=${serviceData[currentPage].image} alt="" class="img-fluid services-img">
            <h3>${serviceData[currentPage].title}</h3>
            <p>${serviceData[currentPage].description}</p>
        </div>

    </div>

</div>`;
    const serviceLinks = document.querySelectorAll('.services-list a');
    serviceLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
})()