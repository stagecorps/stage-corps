import { FC } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const teamMembers = [
    {
        name: 'Pavel Perebillo',
        positions: ['CEO', 'Co-Founder', 'Light Designer'],
        image: 'img/team/pavel.png',
        email: 'pavel@stagecorps.com'
    },
    {
        name: 'Eric Gray',
        positions: ['CFO', 'Co-Founder', 'Light Designer'],
        image: 'img/team/eric.png',
        email: 'eric@stagecorps.com'
    },
    {
        name: 'Sallie Apple',
        positions: ['Operations Manager'],
        image: 'img/team/sallie.png',
        email: 'info@stagecorps.com'
    },
    {
        name: 'John Charron',
        positions: ['Sales Manager', 'Scenic Designer', 'Light Designer'],
        image: 'img/team/john.png',
        email: 'john@stagecorps.com'
    }
];

const Team: FC = () => {
    return (
        <section id="team" className="team section">
            <Container className="section-title">
                <h2>Team</h2>
            </Container>
            <Container>
                <Row className="gy-4">
                    {teamMembers.map((member) => {
                        return (
                            <Col lg={3} md={6} key={member.name} className="d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div className="team-member">
                                    <div className="member-img">
                                        <Image src={member.image} fluid />
                                        <div className="social">
                                            <a href={member.email}><i className="bi bi-envelope"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>{member.name}</h4>
                                        {member.positions.map((pos) => <span key={pos}>{pos}</span>)}
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default Team;