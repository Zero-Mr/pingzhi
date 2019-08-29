import React, { PureComponent } from 'react';
import { CandesignersWrap } from './style'
import { Tabs, Icon } from 'antd';
import apiList from '@src/apiData.json'
import axios from 'axios'
import { Carousel,Row,Col } from 'antd';
const { TabPane } = Tabs;


class Characteristic extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            listdata: [],
            icondata: ['thunderbolt', "cloud", "build", "line", "experiment", "tool"]
        }
    }

    render() {
        const { listdata, icondata } = this.state;
        return (
            <CandesignersWrap>
                <div className="slideWrap">
                    <h1 className="text-center">特色精钻工程</h1>
                    <p className="text-center">国家施工一级资质，36项工艺全程标准施工</p>
                    <Tabs defaultActiveKey="0">
                        {
                            listdata.map((item, index) => {
                                return (
                                    <TabPane
                                        key={index}
                                        tab={
                                            <span>
                                                <Icon type={icondata[index]} />
                                                {item[0].category_name}
                                            </span>
                                        }
                                    >
                                        <Carousel autoplay>
                                            
                                            {
                                                item.map((inneritem,innerindex) => {
                                                    return (
                                                            <div key={innerindex}>
                                                                <Row>
                                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                                        <img className="imgres" alt="" src={inneritem.image}/>
                                                                    </Col>
                                                                    <Col className="text-center silde-data" xs={12} sm={12} md={12} lg={12} xl={12}>
                                                                        <p>0{index+=1}、{inneritem.title}</p>
                                                                        <p dangerouslySetInnerHTML={{__html:inneritem.content}}>
                                                                        </p>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                    )
                                                })
                                            }
                                        </Carousel>
                                    </TabPane>
                                )
                            })
                        }


                    </Tabs>
                </div>
            </CandesignersWrap>
        )
    }
    componentDidMount() {
        let thiss = this;
        axios.get(apiList.data[9].characteristiclist).then((res) => {

            let arr = [];
            let obj = res.data
            for (let item in obj) {
                arr.push(obj[item]);
            }

            thiss.setState({
                listdata: arr
            })
        }).catch((error) =>{
            console.log(error)
        })
    }
}

export default Characteristic