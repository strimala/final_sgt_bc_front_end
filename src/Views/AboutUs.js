import TabsTable from '../Components/TabsTable';
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumbs from '../Components/Breadcrumb';
import FirstTabImg from '../Assets/Images/olivier_salad_1.jpg';


function AboutUs() {
    return (
        <Container>
            <Row>
                <Col>
                    <Breadcrumbs />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>About us</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TabsTable
                        eventKey_tab1='kas'
                        title_tab1='Kas?'
                        img_tab1={FirstTabImg}
                        txt_tab1='Tab1 teksts'
                        eventKey_tab2='kur'
                        title_tab2='Kur?'
                        txt_tab2='Tab2 teksts'
                        eventKey_tab3='kad'
                        title_tab3='Kad?'
                        txt_tab3='Tab3 teksts'
                        eventKey_tab4='kapec'
                        title_tab4='Kāpēc?'
                        txt_tab4='Tab15 teksts'

                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>Karte</div>
                </Col>
            </Row>
        </Container>

    )
}

export default AboutUs;
