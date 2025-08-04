import { Container, Row, Col, Image } from 'react-bootstrap'

const Clients: React.FC = () => {
    const clientItems = [
        {
            image: "img/clients/client-1.png",
            link: ""
        },
        {
            image: "img/clients/client-2.png",
            link: ""
        },
        {
            image: "img/clients/client-3.png",
            link: ""
        },
        {
            image: "img/clients/client-4.png",
            link: ""
        },
        {
            image: "img/clients/client-5.png",
            link: ""
        },
        {
            image: "img/clients/client-6.png",
            link: ""
        },
        {
            image: "img/clients/client-7.png",
            link: ""
        },
        {
            image: "img/clients/client-8.png",
            link: ""
        }
    ]

    return (
        <section id='clients' className="clients section">
            <Container className="section-title" >
                <h2>Clients</h2>
            </Container>
            <Container>
                <Row className="g-0 clients-wrap" >
                    {clientItems.map((item, index) => {
                        return (
                            <Col xl={3} md={4} className="client-logo" key={index}>
                                <a href={item.link}>
                                    <Image src={item.image} fluid />
                                </a>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    );
}
export default Clients;