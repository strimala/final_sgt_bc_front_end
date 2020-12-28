import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import Breadcrumbs from '../Components/Breadcrumb';

function Registration() {
    return (
        <Container>
            <Row>
                <Col>
                    <Breadcrumbs />
                </Col>
            </Row>
            <h1 className="mb-3">Reģistrācijas forma</h1>
            <Form>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Control placeholder="Lietotājvārds*" required />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Control type="password" placeholder="Parole*" required />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Control type="password" placeholder="Parole atkārtoti*" required />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Control type="text" placeholder="Vārds*" required />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Control type="text" placeholder="Uzvārds" />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Control as="select" required>
                            <option>Valsts*</option>
                            <option>Eldorado</option>
                            <option>Nārnija</option>
                            <option>Aizspogulija</option>
                            <option>Atlanta</option>
                            <option>Utopija</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Check type="checkbox" label="Esmu iepazinies un piekrītu lietošanas noteikumiem*" required />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Button variant="primary" type="submit">
                            Iesniegt
                    </Button>
                    </Col>
                </Form.Row>
            </Form>
        </Container>
    )
}

export default Registration;
