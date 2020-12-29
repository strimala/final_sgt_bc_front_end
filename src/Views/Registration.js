import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumbs from '../Components/Breadcrumb';
import RegistrationForm from '../Components/RegistrationForm';

function Registration() {
    return (
        <Container>
            <Row>
                <Col>
                    <Breadcrumbs />
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <h1>Reģistrācijas forma</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <RegistrationForm />
                </Col>
            </Row>
        </Container>
    )
}

export default Registration;
