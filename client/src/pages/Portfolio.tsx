import { FC } from "react";

const portfolioItems = [
    {
        image: "img/portfolio/ChamberlainNutcrackerSnow.jpg",
        title: "Chamberlain Nutcracker"
    },
    {
        image: "img/portfolio/DSC_0287.JPG",
        title: "Show Title Here"
    },
    {
        image: "img/portfolio/DSC_0288.JPG",
        title: "Show Title Here"
    },
    {
        image: "img/portfolio/IMG_0941.JPG",
        title: "Show Title Here"
    },
    {
        image: "img/portfolio/IMG_6482.JPG",
        title: "Show Title Here"
    },
    {
        image: "img/portfolio/RNJ.jpg",
        title: "Into the Woods"
    },
    {
        image: "img/portfolio/IntotheWoods.jpg",
        title: "Into the Woods"
    },
    {
        image: "img/portfolio/RNJ.jpg",
        title: "Show Title Here"
    },
    {
        image: "img/portfolio/2159.PNG",
        title: "Show Title Here"
    },
    {
        image: "img/portfolio/2160.PNG",
        title: "Show Title Here"
    },

];

const Portfolio: FC = () => {
    return (
        <section className="portfolio section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Portfolio</h2>
            </div>
            <div className="container">

                <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                    <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                        {portfolioItems.map(item =>
                            <div key={item.title} className="col-lg-4 col-md-6 portfolio-item isotope-item">
                                <img src={item.image} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>{item.title}</h4>
                                    <a href={item.image} data-gallery="portfolio-gallery-app"
                                        className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Portfolio