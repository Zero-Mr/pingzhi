import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    QuestionWrap
} from './style'
import UserName from '../Brand_strength/server_banner/usernameui'
import UserTel from '../Brand_strength/server_banner/telui'
import UserAddress from '../Brand_strength/server_banner/userhome'
import FreeBtn from '../Brand_strength/server_banner/freebtn'
import { Icon, Row, Col, Card } from 'antd'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apilist from '@src/apiData.json'
import processimg_1 from '@src/statics/index/lores1.png'
import processimg_2 from '@src/statics/index/lores2.png'
import processimg_3 from '@src/statics/index/lores3.png'
class Question extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            fengshuilist:[]
        }
    }

    render() {
        return (
            <QuestionWrap>
                <div className="Question-banner">
                    <div className="fromwrap">
                        <div className="floatRight adddata">
                            <h3 className="text-center">10秒钟，快速开启您的装修之旅</h3>
                            <div className="fromitem">
                                <UserName />
                            </div>
                            <div className="fromitem">
                                <UserTel />
                            </div>
                            <div className="fromitem">
                                <UserAddress />
                            </div>
                            <div className="fromitem">
                                <FreeBtn />
                            </div>
                            <p>
                                <Icon type="warning" />我们承诺：品智装饰提供该项免费服务，绝不产生任何费用，为了您的利益以及我们的口碑，您的隐私将被严格保密。
                                    </p>
                        </div>
                    </div>
                </div>
                <div className="process">
                    <h1 className="title">
                        装修流程
                    </h1>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col xs={7} sm={7} md={7} lg={7} xl={7} className="gutter-row">
                            <Card
                                hoverable
                                cover={<img alt="example" src={processimg_1} />}
                            >
                                <ul className="list-inline">
                                    <li>
                                        <Link to="/">
                                            <Icon type="key" />
                                            <br />
                                            收房
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <Icon type="edit" />
                                            <br />
                                            设计
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <Icon type="calculator" />
                                            <br />
                                            预算
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <Icon type="file-protect" />
                                            <br />
                                            合同
                                        </Link>
                                    </li>
                                </ul>
                            </Card>
                        </Col>
                        <Col xs={7} sm={7} md={7} lg={7} xl={7} className="gutter-row">
                            <Card
                                hoverable
                                cover={<img alt="example" src={processimg_2} />}
                            >
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <Icon type="tool" />
                                            <br />
                                            拆改
                                            </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <Icon type="thunderbolt" />
                                            <br />
                                            水电
                                            </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <Icon type="bg-colors" />
                                            <br />
                                            防水
                                            </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <Icon type="gold" />
                                            <br />
                                            泥瓦
                                            </Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <Icon type="pic-center" />
                                            <br />
                                            木工
                                            </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <Icon type="experiment" />
                                            <br />
                                            油漆
                                            </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <Icon type="flag" />
                                            <br />
                                            竣工
                                            </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <Icon type="ellipsis" />
                                            <br />
                                            更多
                                            </Link>
                                    </li>
                                </ul>
                            </Card>
                        </Col>
                        <Col xs={7} sm={7} md={7} lg={7} xl={7} className="gutter-row">
                            <Card
                                hoverable
                                cover={<img alt="example" src={processimg_3} />}
                            >
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <Icon type="profile" />
                                            <br />
                                            软装
                                            </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <Icon type="home" />
                                            <br />
                                            入住
                                            </Link>
                                    </li>
                                </ul>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="feng-shui">
                    <div className="feng-shui-wrap">
                        <h3>家居风水 <span className="floatRight"><Link to="/">全部</Link></span> </h3>
                        <Row type="flex" justify="space-around" align="middle">
                            <Col xs={7} sm={7} md={7} lg={7} xl={7} className="feng-shui-item">
                                 <Link to="">
                                     <img src="https://cdn2.ijuzhong.com/ijuzhong_public/upload/20190809/cabba9869616cdc343d1eb0e64d37319.png?x-oss-process=style/web" alt="" className="imgres" />
                                     <p>玄关怎么设计才合理？该注意哪些风水问题？</p>
                                 </Link>
                            </Col>
                            <Col xs={7} sm={7} md={7} lg={7} xl={7}>
                                   2
                            </Col>
                            <Col xs={7} sm={7} md={7} lg={7} xl={7}>
                                    3
                            </Col>
                        </Row>
                    </div>
                </div>
            </QuestionWrap>
        )
    }

    componentDidMount(){
        
        let thiss = this;
        axios.get(apilist.data[4].knowledge,{
            params:{
                option:true
            }
        }).then((res)=>{
            let fengshuilist = res.data.list;
            console.log(fengshuilist)
            thiss.setState({
                fengshuilist
            })
        })
    
    }


}



export default connect(null, null)(Question)