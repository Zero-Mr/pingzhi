import React, { PureComponent } from 'react';
import { CandoWrap } from './style'
import { Steps } from 'antd';
const { Step } = Steps;

class Candesigners extends PureComponent {
    render() {
        return (
            <CandoWrap>
                <div>
                    <h1 className="text-center">设计师还能做什么</h1>
                    <Steps current={-1}>
                        <Step title="提供布局合理的设计方案"/>
                        <Step title="提供标准的装修预算" />
                        <Step title="提供主材选购的装修预算" />
                        <Step title="提供软装搭配的专业建议" />
                        <Step title="装修过程中的施工配合" />
                    </Steps>
                </div>
            </CandoWrap>
        )
    }
}

export default Candesigners