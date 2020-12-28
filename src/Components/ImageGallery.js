import { Row, Col } from 'react-bootstrap';
import { SRLWrapper } from 'simple-react-lightbox';

function ImageGallery(props) {
    return (
        <SRLWrapper>
            <Row>
                <Col>
                    <a href={props.main_img}>
                        <img src={props.main_img} alt={props.main_img_alt} style={{ maxWidth: '100%' }} />
                    </a>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <a href={props.first_sm_img}>
                        <img src={props.first_sm_img} alt={props.first_sm_img_alt} style={{ maxWidth: '100%' }} />
                    </a>
                </Col>
                <Col>
                    <a href={props.second_sm_img}>
                        <img src={props.second_sm_img} alt={props.second_sm_img_alt} style={{ maxWidth: '100%' }} />
                    </a>
                </Col>
                <Col>
                    <a href={props.third_sm_img}>
                        <img src={props.third_sm_img} alt={props.third_sm_img_alt} style={{ maxWidth: '100%' }} />
                    </a>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <a href={props.fourth_sm_img}>
                        <img src={props.fourth_sm_img} alt={props.fourth_sm_img_alt} style={{ maxWidth: '100%' }} />
                    </a>
                </Col>
                <Col>
                    <a href={props.fifth_sm_img}>
                        <img src={props.fifth_sm_img} alt={props.fifth_sm_img_alt} style={{ maxWidth: '100%' }} />
                    </a>
                </Col>
                <Col>
                    <a href={props.sixth_sm_img}>
                        <img src={props.sixth_sm_img} alt={props.sixth_sm_img_alt} style={{ maxWidth: '100%' }} />
                    </a>
                </Col>
            </Row>
        </SRLWrapper>
    )
}

export default ImageGallery;
