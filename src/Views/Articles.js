import { Container, Row, Col } from "react-bootstrap";
import Pagination from '../Components/Pagination';
import Breadcrumbs from '../Components/Breadcrumb';
import CardItem from "../Components/CardItem";
import FirstArticleImg from '../Assets/Images/olivier_salad_1.jpg';
import SecondArticleImg from '../Assets/Images/result.jpg';
import ThirdArticleImg from '../Assets/Images/agdams2.jpg';

function Articles() {
    return (
        <Container>
            <Row>
                <Col>
                    <Breadcrumbs />
                </Col>
            </Row>
            <Row>
                <Col className="my-3">
                    <CardItem
                        img_src={FirstArticleImg}
                        title='RASOLS vai ROSOLS'
                        text='Vai svētkos gatavosim rasolu vai rosolu? Ieskaties un uzzini pareizo atbildi!'
                        path='/articles/article1'
                        link_txt='Lasīt vairāk'
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardItem
                        img_src={SecondArticleImg}
                        title='RASOLA RECEPTE'
                        text='Klasiska Olivjē salātu jeb rasola recepte - ar labi zināmajām sastāvdaļām.'
                        path='/articles/article2'
                        link_txt='Lasīt vairāk'
                    />
                </Col>
            </Row>
            <Row>
                <Col className="my-3">
                    <CardItem
                        img_src={ThirdArticleImg}
                        title='PAPILDINĀJUMS RASOLAM'
                        text='Augstvērtīgu dzērienu piedāvājums.'
                        path='/articles/article3'
                        link_txt='Lasīt vairāk'
                    />
                </Col>
            </Row>
            <Row className="float-right my-3" >
                <Col>
                    <Pagination paginate={1} />
                </Col>
            </Row>
        </Container>
    )
}

export default Articles;
