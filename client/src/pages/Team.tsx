import { FC } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const teamMembers = [
    {
        name: 'Pavel Perebillo',
        positions: ['CEO', 'Co-Founder', 'Light Designer'],
        image: 'img/team/pavel.png',
        x: '',
        facebook: '',
        instagram: '',
        linkedin: ''
    },
    {
        name: 'Eric Gray',
        positions: ['CFO', 'Co-Founder', 'Light Designer'],
        image: 'img/team/eric.png',
        x: '',
        facebook: '',
        instagram: '',
        linkedin: ''
    },
    {
        name: 'Sallie Apple',
        positions: ['Operations Manager'],
        image: 'img/team/sallie.png',
        x: '',
        facebook: '',
        instagram: '',
        linkedin: ''
    },
    {
        name: 'John Charron',
        positions: ['Sales Manager', 'Scenic Designer', 'Light Designer'],
        image: 'img/team/john.png',
        x: '',
        facebook: '',
        instagram: '',
        linkedin: ''
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
                                            <a href={member.x}><i className="bi bi-twitter-x"></i></a>
                                            <a href={member.facebook}><i className="bi bi-facebook"></i></a>
                                            <a href={member.instagram}><i className="bi bi-instagram"></i></a>
                                            <a href={member.linkedin}><i className="bi bi-linkedin"></i></a>
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