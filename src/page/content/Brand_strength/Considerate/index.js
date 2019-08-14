import React, { PureComponent } from 'react';
import { ConsiderateWrap } from './style'
import { Row, Col, Icon } from 'antd'


class Considerate extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            datalist: [
                { "icontype:": "wechat", "title": "建立微信服务群", "dsc": "方便您与我们在设计和施工阶段的交流和沟通，建立便捷高效的服务和沟通平台。" },
                { "icontype:": "car", "title": "材料统一配送", "dsc": "与全球50余家品牌材料商战略合作，集团统一配送，节省中间商销售环节差价，让您更省心省钱。" },
                { "icontype:": "user", "title": "专业工程监理", "dsc": "全程跟踪从预算到竣工，从质量到环保的整个过程，为您爱家装修的每一个工序严格把关。" },
                { "icontype:": "user", "title": "工人专职自有", "dsc": "由居众装饰培训学院，标准化作业培训，持证上岗，装饰施工技术及管理人员更专业。" },
                { "icontype:": "mobile", "title": "微管家系统", "dsc": "手机移动端口便捷的施工管理平台，不用天天跑工地，也能全程监控施工，微信实时验收。" },
                { "icontype:": "interaction", "title": "三三制过程回访", "dsc": "集团、区域、分公司三个层级，在施工的前、中、后三个阶段对您进行回访。" },
                { "icontype:": "audit", "title": "客户满意度调查", "dsc": "全方位对您做满意度调查，通过制度保障过程中的服务品质、工程质量和客户满意度。" },
                { "icontype:": "tool", "title": "5年保修 终身维护", "dsc": "5年防水防漏保修，2年基础工程保修，终身维护，为您提供有效和及时的售后保障。" },
            ]
        }
    }

    render() {
        const { datalist } = this.state;
        return (
            <ConsiderateWrap>
                <div className="ConsiderateWrap-cont">
                    <h1 className="text-center">服务贴心无忧</h1>
                    <p className="text-center">客户满意度是衡量我们工作的唯一标准</p>
                    <Row>
                        {
                            datalist.map((item, index) => {
                                let typestr;
                                if(index ==0){
                                    typestr="wechat"
                                }else if(index ==1){
                                    typestr="car"
                                }else if(index ==2){
                                    typestr="user"
                                }else if(index ==3){
                                    typestr="user"
                                }else if(index ==4){
                                    typestr="mobile"
                                }else if(index ==5){
                                    typestr="interaction"
                                }else if(index ==6){
                                    typestr="audit"
                                }else if(index ==7){
                                    typestr="tool"
                                }
                                return (
                                    <Col key={index} className="text-center item" xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <Icon className="iconclass" type={typestr} />
                                        <h3>{item.title}</h3>
                                        <p>
                                              {item.dsc}
                                        </p>
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </div>
            </ConsiderateWrap>
        )
    }
}

export default Considerate