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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

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
                    <h1>Rasola recepte</h1>
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
                    <h2>Sastāvdaļas:</h2>
                    <ul>
                        <li style={{ listStyleType: "none" }}><span style={{ padding: "0 10px 0 0" }}><FontAwesomeIcon icon={faCheckSquare} /></span>Kartupeļi</li>
                        <li style={{ listStyleType: "none" }}><span style={{ padding: "0 10px 0 0" }}><FontAwesomeIcon icon={faCheckSquare} /></span>Burkāni</li>
                        <li style={{ listStyleType: "none" }}><span style={{ padding: "0 10px 0 0" }}><FontAwesomeIcon icon={faCheckSquare} /></span>Olas</li>
                        <li style={{ listStyleType: "none" }}><span style={{ padding: "0 10px 0 0" }}><FontAwesomeIcon icon={faCheckSquare} /></span>Konservēti zaļie zirnīši</li>
                        <li style={{ listStyleType: "none" }}><span style={{ padding: "0 10px 0 0" }}><FontAwesomeIcon icon={faCheckSquare} /></span>Desa</li>
                        <li style={{ listStyleType: "none" }}><span style={{ padding: "0 10px 0 0" }}><FontAwesomeIcon icon={faCheckSquare} /></span>Majonēze</li>
                        <li style={{ listStyleType: "none" }}><span style={{ padding: "0 10px 0 0" }}><FontAwesomeIcon icon={faCheckSquare} /></span>Garšvielas</li>
                    </ul>
                    <h3>Pagatavošana</h3>
                    <p>Izvāra kartupeļus, burkānus un olas. </p>
                    <p>Kartupeļus un burkānus sagriež smalkos kubiņos un ber lielā traukā.</p>
                    <p>Sagriež olu, desu un marinētos gurķīšus. Ber bļodā.</p>
                    <p>Konservētajiem zaļajiem zirnīšiem nolej sulu un pievieno pārējām sastāvdaļām.</p>
                    <p>Pievieno majonēzi un garšvielas. Visu kārtīgi samaisa.</p>
                    <p>Liek ledusskapī atdzesēties.</p>
                </Col>
            </Row>
        </Container>

    )
}

export default Article;
