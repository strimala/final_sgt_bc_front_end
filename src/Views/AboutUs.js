import TabsTable from '../Components/TabsTable';
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumbs from '../Components/Breadcrumb';
import FirstTabImg from '../Assets/Images/olivier_salad_1.jpg';
import SecondTabImg from '../Assets/Images/olivier_salad_2.jpg';
import ThirdTabImg from '../Assets/Images/olivier_salad_3.jpg';
import Map from '../Components/Map';

function AboutUs() {
    return (
        <Container>
            <Row>
                <Col>
                    <Breadcrumbs />
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <h1>Par mums</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TabsTable
                        eventKey_tab1='kas'
                        title_tab1='Kas?'
                        img_tab1={FirstTabImg}
                        txt_tab1='Auksto ēdienu – salātus, kas gatavoti no vārītas vai ceptas gaļas, 
                        vārītiem dārzeņiem (piemēram, kartupeļiem, bietēm), olām un skābētiem vai marinētiem gurķiem, 
                        pievienojot krējumu vai krējumu ar majonēzi un garšvielas, – sauc par rasolu.'

                        eventKey_tab2='kur'
                        title_tab2='Kur?'
                        img_tab2={SecondTabImg}
                        txt_tab2='Auksto ēdienu – salātus, kas gatavoti no vārītas vai ceptas gaļas, 
                        vārītiem dārzeņiem (piemēram, kartupeļiem, bietēm), olām un skābētiem vai marinētiem gurķiem, 
                        pievienojot krējumu vai krējumu ar majonēzi un garšvielas, – sauc par rasolu.'

                        eventKey_tab3='kad'
                        title_tab3='Kad?'
                        img_tab3={ThirdTabImg}
                        txt_tab3='Auksto ēdienu – salātus, kas gatavoti no vārītas vai ceptas gaļas, 
                        vārītiem dārzeņiem (piemēram, kartupeļiem, bietēm), olām un skābētiem vai marinētiem gurķiem, 
                        pievienojot krējumu vai krējumu ar majonēzi un garšvielas, – sauc par rasolu.'

                        eventKey_tab4='kapec'
                        title_tab4='Kāpēc?'
                        img_tab4={FirstTabImg}
                        txt_tab4='Auksto ēdienu – salātus, kas gatavoti no vārītas vai ceptas gaļas, 
                        vārītiem dārzeņiem (piemēram, kartupeļiem, bietēm), olām un skābētiem vai marinētiem gurķiem, 
                        pievienojot krējumu vai krējumu ar majonēzi un garšvielas, – sauc par rasolu.'

                    />
                </Col>
            </Row>
            <Row className="mt-5 mb-3">
                <Col>
                    <h2>Kontaktinformācija</h2>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Map />
                </Col >
                <Col md={4}>
                    <h3>Adrese:</h3>
                    <p>Rīga, Latvija</p>
                    <h3>Epasts:</h3>
                    <p>rasols@mail.com</p>
                    <h3>Telefons:</h3>
                    <p>+371 666 00 666</p>
                </Col>
            </Row>
        </Container>

    )
}

export default AboutUs;
