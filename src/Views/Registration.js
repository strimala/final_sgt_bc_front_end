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
            <Row>
                <Col>
                    <h1 className="mb-3">Reģistrācijas forma</h1>
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
