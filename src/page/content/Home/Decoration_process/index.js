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
                        <h1 className="processcont-title">装修流程</h1>
                        <Steps current={-1}>
                            <Step title="免费预约" description="This is a description." icon={<Icon type="phone" />}/>
                            <Step title="免费量房" description="This is a description." icon={<Icon type="bar-chart" />}/>
                            <Step title="确定方案" description="This is a description." icon={<Icon type="solution" />}/>
                            <Step title="签约合同" description="This is a description." icon={<Icon type="file-protect" />}/>
                            <Step title="装修施工" description="This is a description." icon={<Icon type="tool" />}/>
                            <Step title="竣工验收" description="This is a description." icon={<Icon type="home" />}/>
                        </Steps>
                    </Col>
                </Row>
          </DecorationProcessWrap>
        )
    }


}

export default DecorationProcess;
