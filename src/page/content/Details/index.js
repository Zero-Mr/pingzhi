import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    DetailsWrap
} from './style'
import axios from 'axios'
import apiList from '@src/apiData.json'
import { Breadcrumb, Row, Col, Descriptions, Timeline } from 'antd';
import { Link } from 'react-router-dom'
import Username from '../Brand_strength/server_banner/usernameui'
import UserTel from '../Brand_strength/server_banner/telui'
import UserAddress from '../Brand_strength/server_banner/userhome'
import Freebtn from '../Brand_strength/server_banner/freebtn'

class Details extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    render() {
        const { data } = this.state
        return (
            <DetailsWrap>
                <div className="bannercont">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to={"/Details/" + this.props.match.params.id}>当前位置</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to="/">首页</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to="/Decorate-a-case">装修案例</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to={"/Details/" + this.props.match.params.id}>{data.title}</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    <Row>

                        <Col xs={24} sm={24} md={17} lg={17} xl={17} className="databox">
                            <h1 className="text-center title">
                                {data.title}
                            </h1>
                            <Descriptions bordered>
                                <Descriptions.Item label="楼盘名称">{data.property}</Descriptions.Item>
                                <Descriptions.Item label="案例户型" span={2}>{data.house_type}</Descriptions.Item>
                                <Descriptions.Item label="案例风格">{data.house_style}</Descriptions.Item>
                                <Descriptions.Item label="所在城市" span={2}>{data.city}</Descriptions.Item>
                                <Descriptions.Item label="案例面积">{data.area}㎡</Descriptions.Item>
                                <Descriptions.Item label="装修预算" span={2}>{data.price}万</Descriptions.Item>
                                <Descriptions.Item label="设计说明" >
                                    {data.content}
                                </Descriptions.Item>
                            </Descriptions>
                            <div className="imgbox">
                                <Row>
                                    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                        <Timeline>
                                            {
                                            data.images && data.images.map((item,index) =>{
                                                return (
                                                <Timeline.Item key={index}>第{index+1}张
                                                    <br />
                                                    {item.des ? <a href={"#detail-map"+index}>{item.des}</a> : ""}
                                                    
                                                </Timeline.Item>                                                
                                                )
                                                })
                                            }
                                        </Timeline>
                                    </Col>
                                    <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                        {
                                            data.images && data.images.map((item,index)=>{
                                                return (
                                                    <div className="imgwrapbox" key={index}>
                                                        <img src={item.img} id={"detail-map"+index} className="imgres" alt="" />
                                                        {item.des ? <p>{item.des}</p> : ""}
                                                        
                                                    </div>
                                                )
                                            })
                                        }
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col xs={24} sm={24} md={7} lg={7} xl={7} className="add-address">
                            <div>
                                <h3 className="text-center">
                                    免费申请户型规划
                                </h3>
                                <p className="text-center">专属设计师免费1对1全程服务</p>

                                <div className="formitem">
                                        <Username />
                                </div>
                                <div className="formitem">
                                        <UserTel />
                                </div>
                                <div className="formitem">
                                        <UserAddress />
                                </div>
                                <div className="formitem">
                                        <Freebtn />
                                </div>
                                <p className="text-center">现在预约即可享受5项VIP服务</p>
                            </div>
                        </Col>
                    </Row>

                </div>
            </DetailsWrap>
        )
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        let thiss = this;
        axios.get(apiList.data[11].getDesignDetail, {
            params: {
                fjsadbjsa: id
            }
        }).then((res) => {
            let data = res.data;
            thiss.setState({
                data
            })
        }).catch((error)=>{
            console.log(error)
        })
    }
}



export default connect(null, null)(Details)