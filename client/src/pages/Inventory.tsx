import { FC, useRef, useState, useEffect } from "react";
import { Container } from "react-bootstrap";

interface IRentalItem {
    name: string;
    display_image: string;
}

const Inventory: FC = () => {
    const [rentalItems, setRentalItems] = useState<IRentalItem[]>([]);
    const initialized = useRef(false);

    useEffect(() => {
        const fetchData = async () => {
            let items: IRentalItem[] = [];
            for (let i = 1; i <= 20; i++) {
                const response = await fetch(`/ezrentout/assets?page=${i}`);
                const data = await response.json();
                const assets: IRentalItem[] = data.assets;
                const simplifiedAssets = assets.map((item: IRentalItem) => {
                    const { name, display_image } = item;
                    return { name, display_image }
                });
                items = [...items, ...simplifiedAssets]
            };
            const filteredAssets = items.filter((item: IRentalItem, index: number, self: IRentalItem[]) => {
                return index === self.findIndex(it => it.name === item.name)
            })
            console.log(filteredAssets);
            setRentalItems(filteredAssets);
        };
        if (!initialized.current) {
            fetchData();
            initialized.current = true;
        }
    });

    return (
        <section className="portfolio section">
            <Container className="section-title">
                <h2>Inventory</h2>
            </Container>
            {!initialized.current ?
                (<div id="preloader"></div>) :
                (
                    <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                        <div id="display-case" className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                            {rentalItems.map((item: IRentalItem) => {
                                return (
                                    <div key={item.name} className="col-lg-4 col-md-6 portfolio-item isotope-item">
                                        <img src={item.display_image} className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>{item.name}</h4>
                                            <a href={item.display_image} data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href={item.name} title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>)
                            })}
                        </div>
                    </div>
                )}

        </section>

    )
}

export default Inventory