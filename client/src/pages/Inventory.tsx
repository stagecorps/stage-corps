import { FC } from "react";
import rentalItems from '../../../db/equipment.json'

interface IRentalItem {
    name: string;
    image: string;
}

const Inventory: FC = () => {
    return (
        <section className="portfolio section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Inventory</h2>
            </div>
            <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                <div id="display-case" className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                    {rentalItems.map((item: IRentalItem) => {
                        return (
                            <div key={item.name} className="col-lg-4 col-md-6 portfolio-item isotope-item">
                                <img src={item.image} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>{item.name}</h4>
                                    <a href={item.image} data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                    <a href={item.name} title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </section>

    )
}

export default Inventory