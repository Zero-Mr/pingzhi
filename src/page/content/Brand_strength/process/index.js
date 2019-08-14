import React, { PureComponent } from 'react';
import { ProcessWrap } from './style'
import { Steps, Icon } from 'antd';

const { Step } = Steps;

class Process extends PureComponent {

    render() {
        return (
            <ProcessWrap>
                <div className="ProcessWrap-cont">
                    <h1 className="text-center">质检监管流程</h1>
                    <Steps>
                        <Step status="finish" title="水电图纸审核" icon={<Icon type="file-image" />} />
                        <Step status="finish" title="水电试压" icon={<Icon type="warning" />} />
                        <Step status="finish" title="水电验收" icon={<Icon type="thunderbolt" />} />
                        <Step status="finish" title="泥土验收" icon={<Icon type="safety-certificate" />} />
                        <Step status="finish" title="油漆验收" icon={<Icon type="experiment" />} />
                        <Step status="finish" title="收尾杂项验收" icon={<Icon type="reconciliation" />} />
                        <Step status="finish" title="各工种自检、复查" icon={<Icon type="solution" />} />
                        <Step status="finish" title="完工验收" icon={<Icon type="home" />} />
                    </Steps>
                </div>
            </ProcessWrap>
        )
    }
}

export default Process