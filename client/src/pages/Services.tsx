import { Container, Row, Col, Image } from "react-bootstrap";
import { FC, MouseEvent, useState } from "react";

type ServiceKey = "Light Design" | "Scenic Design" | "Labor" | "Rentals" | "Sales";

interface ServiceProps {
    serviceKey: ServiceKey;
}

const serviceData = {
    "Light Design": {
        image: "/img/portfolio/IMG_0941.JPG",
        title: "Light Design",
        description: "We provide professional light design services for all types of events, ensuring your venue is perfectly illuminated to create the right atmosphere.",
    },
    "Scenic Design": {
        image: "/img/portfolio/DSC_0288.JPG",
        title: "Scenic Design",
        description: "Our scenic design team creates stunning backdrops and sets that transform your event space into a visual masterpiece.",
    },
    "Labor": {
        image: "/img/portfolio/RNJ.jpg",
        title: "Labor",
        description: "We offer skilled labor services for all your event needs, from setup to teardown, ensuring everything runs smoothly."
    },
    "Rentals": {
        image: "/img/equipment/ETCIONXE20Console.jpg",
        title: "Rentals",
        description: "Explore our extensive range of rental equipment, from lighting to staging, to make your event a success.",
    },
    "Sales": {
        image: "/img/portfolio/DSC_0287.JPG",
        title: "Sales",
        description: "We provide high-quality equipment for sale, including lighting, sound systems, and staging materials, to help you create unforgettable events."
    }
};

const Services: FC<ServiceProps> = (props: ServiceProps) => {
    const { serviceKey } = props;
    const [serviceDetails, setServiceDetails] = useState(serviceData[serviceKey])

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        const target = e.target as HTMLAnchorElement;
        document.querySelectorAll('a').forEach(link=>link.classList.remove("active"))
        target.classList.add("active")
        const textContent: ServiceKey = target.textContent as ServiceKey;
        setServiceDetails(serviceData[textContent])
    }

    return (
        <section id="service-details" className="service-details section">
            <Container>
                <Row className="gy-4">
                    <Col lg={4} data-aos="fade-up" data-aos-delay="100">
                        <div className="services-list">
                            <a onClick={handleClick}>Light Design</a>
                            <a onClick={handleClick}>Scenic Design</a>
                            <a onClick={handleClick}>Labor</a>
                            <a onClick={handleClick}>Rentals</a>
                            <a onClick={handleClick}>Sales</a>
                        </div>

                        <h4>We offer a wide variety of services.</h4>
                        <p>We are here to help you get the job done.</p>
                    </Col>
                    <Col lg={8} data-aos="fade-up" data-aos-delay="200">
                        <Image fluid src={serviceDetails.image} className="sercvices-img" />
                        <h3>{serviceDetails.title}</h3>
                        <p>{serviceDetails.description}</p>
                    </Col>
                </Row>
            </Container >
        </section>
    )
}

export default Services