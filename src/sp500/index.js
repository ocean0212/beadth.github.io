import React, {Component} from 'react';
import {Row, Col} from 'antd';
// import axios from 'axios'

class SP500 extends Component {

    render() {
        return (<SP500UI/>)
    }
}

const SP500UI = (props) => {
    return (
        <div>
            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                    Col
                </Col>
                <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                    Col
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                    Col
                </Col>
            </Row>
        </div>
    )
}

export default SP500