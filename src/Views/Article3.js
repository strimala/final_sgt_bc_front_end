import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumbs from '../Components/Breadcrumb';
import ImageGallery from '../Components/ImageGallery';
import MainImage from '../Assets/Images/agdams.jpg';
import FirstSmallImage from '../Assets/Images/agdams2.jpg';
import SecondSmallImage from '../Assets/Images/agdams3.jpg';
import ThirdSmallImage from '../Assets/Images/agdams4.png';

function Article() {
    return (
        <Container>
            <Row>
                <Col>
                    <Breadcrumbs />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Papildinājums rasolam</h1>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <ImageGallery
                        main_img={MainImage}
                        main_img_alt='Agdams'
                        first_sm_img={FirstSmallImage}
                        first_sm_img_alt='Agdams'
                        second_sm_img={SecondSmallImage}
                        second_sm_img_alt='Agdams'
                        third_sm_img={ThirdSmallImage}
                        third_sm_img_alt='Agdams'
                    />
                </Col>
                <Col md={6}>
                    <h2>AGDAMS</h2>
                    <p>
                        Agdams – pēc oriģinālas receptes gatavots stiprinātais vīns,
                        ko iecienījuši daudzi stiprināto vīnu cienītāji.
                    </p>
                    <h3>Vīna saderība ar ēdienu</h3>
                    <p>Rasols, Aperitīvs, Deserti, Makaroni, Siers</p>

                </Col>
            </Row>
        </Container>

    )
}

export default Article;
