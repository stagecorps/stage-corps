import { FC } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'

const clientItems = [
        {
            image: "img/clients/client-1.png",
            style: {
                background: "white"
            },
            link: "https://www.coppellartscenter.org/"
        },
        {
            image: "img/clients/client-2.png",
             style: {
                background: "white"
            },
            link: "https://www.cutxeventcenter.com/"
        },
        {
            image: "img/clients/client-3.png",
             style: {
                background: "black"
            },
            link: "https://www.lewisvillegrand.com/"
        },
        {
            image: "img/clients/client-4.png",
             style: {
                background: "black"
            },
            link: "https://www.eisemanncenter.com/"
        }
    ]

const Clients: FC = () => {
    return (
        <section id='clients' className="clients section">
            <Container className="section-title" >
                <h2>Clients</h2>
            </Container>
            <Container>
                <Row className="g-0 clients-wrap" >
                    {clientItems.map((item, index) => {
                        return (
                            <Col xl={3} md={4} className="client-logo" key={index} style={item.style}>
                                <a href={item.link} target='_blank'>
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