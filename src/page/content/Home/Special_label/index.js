import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import { SpecialLabelWrpa } from './style'

class SpecialLabel extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            lablelist: [
                {"title":"设计专属定制","desctext":"给您量身定制原创个性化高端装修","link":"/"},
                {"title":"特色精钻工程","desctext":"为您打造行业精钻施工方案","link":"/"},
                {"title":"材料优质环保","desctext":"保障您舒适，环保，无污染的家居环境","link":"/"},
                {"title":"服务贴心无忧","desctext":"贴心的人性化客户服务体系","link":"/"},
                {"title":"多元化管理理念","desctext":"为您的爱家的每一道工序严格把关","link":"/"}
            ]
        }
    }
    render() {
        return (
            <SpecialLabelWrpa>
               <Row type="flex" justify="center">
                   {
                       this.state.lablelist.map((item,index)=>{
                           return(
                             <Col className="Special_item" xs={8} sm={8} md={3} lg={3} xl={3} key={index}>
                                 <Link to={item.link}>
                                    <p>{item.title}</p>
                                    <span>{item.desctext}</span>
                                 </Link>
                             </Col>
                           )
                       })
                   }
              </Row>
            </SpecialLabelWrpa>
        )
    }

}

export default SpecialLabel
