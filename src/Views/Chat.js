import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumbs from '../Components/Breadcrumb';
import AddNewEntrieForm from '../Components/AddNewEntrieForm';
import Entries from '../Components/Entries';

function Chat() {
    return (
        <Container>
            <Row>
                <Col>
                    <Breadcrumbs />
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <h1>Viesu grāmata</h1>
                </Col>
            </Row>
            <Row>
                <Col style={{ overflowY: 'scroll', maxHeight: '300px' }}>
                    <Entries />
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <AddNewEntrieForm />
                </Col>
            </Row>
        </Container>
    )
}

export default Chat;
