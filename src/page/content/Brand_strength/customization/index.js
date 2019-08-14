import React, { PureComponent } from 'react';
import { CustomizationWrap } from "./style"
import hover_img_0 from '@src/statics/index/img_design1.png'
import hover_img_1 from '@src/statics/index/img_design2.png'
import hover_img_2 from '@src/statics/index/img_design3.png'
import hover_img_3 from '@src/statics/index/img_design4.png'
import { Row, Col } from 'antd'

class Customization extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            datalist:[
                {"titleone":"国家设计甲级资质","titletwo":"汇聚全国设计精英"},
                {"titleone":"23年原创设计","titletwo":"海量方案任你选择"},
                {"titleone":"多种风格户型","titletwo":"满足个性需求"},
                {"titleone":"720°VR 全景","titletwo":"提前体验完美之家"},              
            ],
            imglist:[hover_img_0,hover_img_1,hover_img_2,hover_img_3]
        }
    }
    render() {
        const { datalist ,imglist} = this.state; 
        return (
            <CustomizationWrap>
                <h1 className="text-center">设计专属定制</h1>
                <p className="text-center">国家设计甲级资质，大牌设计师给您量身定制高端方案</p>
                <Row gutter={16} className="itemwrap">
                    {
                        datalist.map( (item,index) => {
                            return (
                                <Col key={index} className="gutter-row" xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <img src={imglist[index]} alt="" className="imgres"/>
                                    <p className="text-center">{item.titleone}</p>
                                    <p className="text-center">{item.titletwo}</p>
                                </Col>
                            )
                        } )
                    }
                    
              
                </Row>
            </CustomizationWrap>
        )
    }
    
}

export default Customization