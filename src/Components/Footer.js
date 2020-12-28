import { Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <Row className="mt-3 bg-dark d-flex justify-content-around">
            <Col md={3}>
                <p>Paldies, ka interesējies par rasolu.</p>
            </Col>
            <Col md={3}>
                <p>Privātuma politika</p>
                <p>Lietošanas noteikumi</p>
            </Col>
            <Col md={3}>
                <p>Seko rasolam sociālajos tīklos</p>
            </Col>
        </Row>
    )
}

export default Footer;
