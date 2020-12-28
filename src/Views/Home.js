import { Container, Row, Col } from "react-bootstrap";
import CardItem from "../Components/CardItem";
import ControledCarousel from "../Components/ControledCarousel";
import FirstCarouselImg from '../Assets/Images/olivier_salad_1.jpg';
import SecondCarouselImg from '../Assets/Images/olivier_salad_2.jpg';
import ThirdCarouselImg from '../Assets/Images/olivier_salad_3.jpg';
import SecondArticleImg from '../Assets/Images/result.jpg';
import ThirdArticleImg from '../Assets/Images/agdams2.jpg';

function Home() {
    return (
        <Container>
            <Row>
                <Col>
                    <ControledCarousel
                        first_img_src={FirstCarouselImg}
                        second_img_src={SecondCarouselImg}
                        third_img_src={ThirdCarouselImg}
                    />
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <p>Jaunākie raksti:</p>
                </Col>
            </Row>
            <Row>
                <Col md={12} lg={4}>
                    <CardItem
                        img_src={FirstCarouselImg}
                        title='RASOLS vai ROSOLS'
                        text='Vai svētkos gatavosim rasolu vai rosolu? Ieskaties un uzzini pareizo atbildi!'
                        path='/articles/article1'
                        link_txt='Lasīt vairāk'
                    />
                </Col>
                <Col md={12} lg={4}>
                    <CardItem
                        img_src={SecondArticleImg}
                        title='RASOLA RECEPTE'
                        text='Klasiska Olivjē salātu jeb rasola recepte - ar labi zināmajām sastāvdaļām.'
                        path='/articles/article2'
                        link_txt='Lasīt vairāk'
                    />
                </Col>
                <Col md={12} lg={4}>
                    <CardItem
                        img_src={ThirdArticleImg}
                        title='PAPILDINĀJUMS RASOLAM'
                        text='Augstvērtīgu dzērienu piedāvājums.'
                        path='/articles/article3'
                        link_txt='Lasīt vairāk'
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
