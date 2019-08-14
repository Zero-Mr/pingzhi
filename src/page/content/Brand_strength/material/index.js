import React,{PureComponent} from 'react';
import {MterialWrap} from './style'
import { Row,Col } from 'antd'
import Leftsrc  from "@src/statics/index/img_material_logo.png"
import right_img_0 from "@src/statics/index/img_material1.png"
import right_img_1 from "@src/statics/index/img_material2.png"
import right_img_2 from "@src/statics/index/img_material3.png"
import right_img_3 from "@src/statics/index/img_material4.png"
import right_img_4 from "@src/statics/index/img_material5.png"
import right_img_5 from "@src/statics/index/img_material6.png"
import axios from 'axios';
import apiList from "@src/apiData.json"

class Mterial extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            splicdata:[
                
            ],
            imgsrc:[
                {"imgsrc":right_img_0},
                {"imgsrc":right_img_1},
                {"imgsrc":right_img_2},
                {"imgsrc":right_img_3},
                {"imgsrc":right_img_4},
                {"imgsrc":right_img_5}
            ]
        }
    }
    render(){
        const { splicdata,imgsrc } = this.state;
        return(
            <MterialWrap>
                <h1 className="text-center">
                     优质环保材料
                </h1>
                <p className="text-center">
                    精选全球50余家优质材料商战略合作，保障您舒适环保无污染的家居环境
                </p>
                <Row>
                    <Col className="Mterial-imgwrap">
                            <Col xs={24} sm={24} md={11} lg={11} xl={11} className="left-splice_img">
                                <img src={Leftsrc} alt="" className="imgres" />
                            </Col>
                            <Col xs={24} sm={24} md={13} lg={13} xl={13}>
                                {
                                    splicdata.map((item,index)=>{
                                        return (
                                            <Col key={index} xs={12} sm={12} md={12} lg={12} xl={12} className="hover-box">
                                            <img src={imgsrc[index].imgsrc} alt="" className="imgres" />
                                            <div className="data-box text-center">
                                                  <h3>{item.title}</h3>
                                                  <p>{item.dsc}</p>
                                            </div>
                                          </Col>
                                        )
                                    })
                                }
                            </Col>
                    </Col>
                </Row>
            </MterialWrap>
        )
    }
    componentDidMount(){
        let thiss=this;
        axios.get(apiList.data[8].splice_hover).then((res)=>{
            thiss.setState({
                splicdata:res.data.data
            })
        })
    }
}

export default Mterial