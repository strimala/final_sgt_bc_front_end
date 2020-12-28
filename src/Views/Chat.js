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
            <Row>
                <Col>
                    <h1>Viesu grāmata</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Entries />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddNewEntrieForm />
                </Col>
            </Row>
        </Container>
    )
}

export default Chat;
