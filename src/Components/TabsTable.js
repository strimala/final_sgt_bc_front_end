import { Tabs, Tab } from 'react-bootstrap';
import { Row, Col, Image } from "react-bootstrap";

function TabsTable(props) {
    return (
        <Tabs defaultActiveKey={props.eventKey_tab1}>
            <Tab eventKey={props.eventKey_tab1} title={props.title_tab1}>
                <Row>
                    <Col md={4}>
                        <Image src={props.img_tab1} style={{ maxWidth: '100%' }} />
                    </Col>
                    <Col md={8}>
                        {props.txt_tab1}
                    </Col>
                </Row>

            </Tab>
            <Tab eventKey={props.eventKey_tab2} title={props.title_tab2}>
                <div>{props.txt_tab2}</div>
            </Tab>
            <Tab eventKey={props.eventKey_tab3} title={props.title_tab3}>
                <div>{props.txt_tab3}</div>
            </Tab>
            <Tab eventKey={props.eventKey_tab4} title={props.title_tab4}>
                <div>{props.txt_tab4}</div>
            </Tab>
            <Tab eventKey={props.eventKey_tab5} title={props.title_tab5}>
                <div>{props.txt_tab5}</div>
            </Tab>
        </Tabs>
    )
}

export default TabsTable;
