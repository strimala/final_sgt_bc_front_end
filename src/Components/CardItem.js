import { Row, Col, Card } from 'react-bootstrap';

function CardItem(props) {
    return (

        <Card>
            <Row className="no-gutters">
                <Col md={4} className="align-self-center p-1" >
                    <Card.Img variant="top" src={props.img_src} style={{ maxWidth: '100%' }} />
                </Col>
                <Col md={8}>
                    <Card.Body className="p-2">
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                        <Card.Link href={props.path}>{props.link_txt}</Card.Link>
                    </Card.Body>
                </Col>
            </Row>
        </Card>

    )
}

export default CardItem;
