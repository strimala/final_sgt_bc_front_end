import { Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <Row className="mt-3 p-3 bg-light d-flex justify-content-center">
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
