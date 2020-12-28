import { Container, Row, Col } from "react-bootstrap";
import Pagination from '../Components/Pagination';
import Breadcrumbs from '../Components/Breadcrumb';
import CardItem from "../Components/CardItem";
import eggimg from '../Assets/Images/egg.jpg';

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
                        img_src={eggimg}
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
                        img_src={eggimg}
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
                        img_src={eggimg}
                        title='PAPILDINĀJUMS RASOLAM'
                        text='Augstvērtīgu dzērienu piedāvājums.'
                        path='/articles/article3'
                        link_txt='Lasīt vairāk'
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Pagination paginate={1} />
                </Col>
            </Row>
        </Container>
    )
}

export default Articles;
