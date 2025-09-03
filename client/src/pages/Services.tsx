import { Container, Row, Col, Image } from "react-bootstrap";
import { FC, MouseEvent, useState } from "react";

type ServiceKey = "Light Design" | "Scenic Design" | "Sound Design" | "Production Support" | "Rentals" | "Sales";

interface ServiceProps {
    serviceKey: ServiceKey;
}

const serviceData = {
    "Light Design": {
        image: "/img/portfolio/IMG_0941.JPG",
        title: "Light Design",
        description: "We provide professional light design services for all types of events. From theatre to dance to immersive experiences, we ensure your production is perfectly illuminated to create the right atmosphere for your patrons.",
    },
    "Scenic Design": {
        image: "/img/portfolio/DSC_0288.JPG",
        title: "Scenic Design",
        description: "Our scenic designers will help you create stunning concepts for your sets and provide you sketches, technical designs, and white models to aid you in immersing an audience in a visual masterpiece.",
    },
    "Sound Design": {
        image: "/img/portfolio/ChamberlainNutcrackerSnow.jpg",
        title: "Sound Design",
        description: "Sound design description"
    },
    "Production Support": {
        image: "/img/portfolio/RNJ.jpg",
        title: "Production Support",
        description: "Need a hand? We have many skilled support staff with years of experience who can come and help you with your next event from set up to tear down and everything in between. We are ready to help!"
    },
    "Rentals": {
        image: "/img/equipment/ETCIONXE20Console.jpg",
        title: "Rentals",
        description: "Stage Corps has a robust inventory of both cutting edge and dependable lighting and effects equipment for your productions. They are all available to rent on a weekly basis and are first come first serve booking.",
    },
    "Sales": {
        image: "/img/portfolio/DSC_0287.JPG",
        title: "Sales",
        description: "Do you want equipment for the long-term? We are an official dealer for numerous companies including VariLite, Blizzard, Froggy’s Fog, and more. If you are in need of supplies for the beginning of the year, we also have various lamps for conventional instruments and types of theatrical tape."
    },
    "Set Pieces": {
        image: "",
        title: "Set Pieces",
        description: "This year, we are beginning a new partnership with Stagecraft Professional Set Solutions to help make preparations for your productions even easier. Founded by Master Carpenter Mike Carter, Stagecraft rents and sells everything from basic set pieces such as flats, platforms, cubes, and stairs to furniture and even custom pieces based on your own specifications."
    },
    "Education": {
        image: "",
        title: "Education",
        description:"Would you or your students like to brush up on or learn some new skills? We offer opportunities to learn lighting, design, and even how to best utilize the equipment that you currently have. Our workshops are ideal for both teachers and students, ensuring that you will have prepared technicians to handle future productions. Below you will find some complimentary materials for you to use in your curriculum so you can get a better ideal of the quality that we offer our clients"
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
                            <a onClick={handleClick}>Sound Design</a>
                            <a onClick={handleClick}>Production Support</a>
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