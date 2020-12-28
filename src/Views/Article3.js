import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumbs from '../Components/Breadcrumb';
import ImageGallery from '../Components/ImageGallery';
import MainImage from '../Assets/Images/result.jpg';
import FirstSmallImage from '../Assets/Images/potato_carrot.jpg';
import SecondSmallImage from '../Assets/Images/sausage.jpg';
import ThirdSmallImage from '../Assets/Images/onion.jpg';
import FourthSmallImage from '../Assets/Images/boiled_eggs.jpg';
import FifthSmallImage from '../Assets/Images/green_peas.jpg';
import SixthSmallImage from '../Assets/Images/ingredients.jpg';

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
                        main_img_alt='Rasols'
                        first_sm_img={FirstSmallImage}
                        first_sm_img_alt='Vārīti kartupeļi un burkāni'
                        second_sm_img={SecondSmallImage}
                        second_sm_img_alt='Desa'
                        third_sm_img={ThirdSmallImage}
                        third_sm_img_alt='Sīpols'
                        fourth_sm_img={FourthSmallImage}
                        fourth_sm_img_alt='Vārītas olas'
                        fifth_sm_img={FifthSmallImage}
                        fifth_sm_img_alt='Konservēti zaļie zirnīši'
                        sixth_sm_img={SixthSmallImage}
                        sixth_sm_img_alt='Rasola sastāvdaļas'
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
