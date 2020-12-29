import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumbs from '../Components/Breadcrumb';
import ImageGallery from '../Components/ImageGallery';
import MainImage from '../Assets/Images/olivier_salad_1.jpg';
import FirstSmallImage from '../Assets/Images/olivier_salad_2.jpg';
import SecondSmallImage from '../Assets/Images/olivier_salad_3.jpg';

function Article() {
    return (
        <Container>
            <Row>
                <Col>
                    <Breadcrumbs />
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <h1>RASOLS vai ROSOLS</h1>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <ImageGallery
                        main_img={MainImage}
                        main_img_alt='Rasols'
                        first_sm_img={FirstSmallImage}
                        first_sm_img_alt='Rasols'
                        second_sm_img={SecondSmallImage}
                        second_sm_img_alt='Rasols'
                    />
                </Col>
                <Col md={6}>
                    <p>
                        Auksto ēdienu – salātus, kas gatavoti no vārītas vai ceptas gaļas,
                        vārītiem dārzeņiem (piemēram, kartupeļiem, bietēm), olām un skābētiem vai marinētiem gurķiem,
                        pievienojot krējumu vai krējumu ar majonēzi un garšvielas, – sauc par rasolu.
                        Šis ir vienīgais minētais variants latviešu valodas pareizrakstības vārdnīcās.
                    </p>
                    <p>
                        Rasolu līdzīgo recepšu dēļ mēdz dēvēt arī par Olivjē salātiem,
                        galvaspilsētas vai vienkārši gaļas salātiem.
                    </p>
                </Col>
            </Row>
        </Container>

    )
}

export default Article;
