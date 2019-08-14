import React, { PureComponent } from 'react';
import { TensWrap } from './style'
import { Row, Col } from 'antd'
import Username from '../server_banner/usernameui'
import Telnumber from '../server_banner/telui'
import UserHome from '../server_banner/userhome'
import Freebtn from "../server_banner/freebtn"

class Tenseconds extends PureComponent {
    render() {
        return (
            <TensWrap>
                <div>
                    <h1 className="text-center">10秒预约去体验馆看材料</h1>
                    <Row gutter={16}>
                        <Col className="gutter-row"  xs={24} sm={24} md={6} lg={6} xl={6}>
                            <Username />
                        </Col>
                        <Col className="gutter-row"  xs={24} sm={24} md={6} lg={6} xl={6}>
                            <Telnumber />
                        </Col>
                        <Col className="gutter-row"  xs={24} sm={24} md={6} lg={6} xl={6}>
                            <UserHome />
                        </Col>
                        <Col className="gutter-row"  xs={24} sm={24} md={6} lg={6} xl={6}>
                            <Freebtn />
                        </Col>
                    </Row>
                </div>
            </TensWrap>
        )
    }
}

export default Tenseconds