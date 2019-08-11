import React, { PureComponent } from 'react';
import { DecorationProcessWrap } from './style'
import { Steps ,Row,Col ,Icon} from 'antd';
// import {Row,Col} from 'antd'
const { Step } = Steps;




class DecorationProcess extends PureComponent {


    render() {

        return (
            <DecorationProcessWrap>
                <Row className="processcont">
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Steps current={-1}>
                            <Step title="Finished" description="This is a description." icon={<Icon type="user" />}/>
                            <Step title="In Progress" description="This is a description." />
                            <Step title="Waiting" description="This is a description." />
                        </Steps>
                    </Col>
                </Row>
          </DecorationProcessWrap>
        )
    }


}

export default DecorationProcess;
