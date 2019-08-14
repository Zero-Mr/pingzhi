import React,{PureComponent} from 'react';
import { ContactUsWrap } from './style'
import { Row,Col } from 'antd'
import shenzhenaddres from '@src/statics/index/address.png'
import swaddress from '@src/statics/index/swaddress.png'

class ContactUs extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            isshow:true
        }
        this.changeisshow = this.changeisshow.bind(this)
    }
    render(){
        const { isshow } = this.state;
        if(isshow){
            return(
                <ContactUsWrap>
                <div className="contactus-box">
                    <ul className="list-inline hascity">
                        <li 
                            className={ isshow ? 'active' : '' }
                            onClick={ this.changeisshow }
                            >深圳
                        </li>
                        <li 
                            className={ !isshow ? "active" : '' }
                            onClick={ this.changeisshow }
                            >汕尾
                        </li>
                    </ul>
                    <Row>
                        

                        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                            <img src={shenzhenaddres} alt="" className="imgres"/>
                        </Col>
                        <Col xs={24} sm={24} md={7} lg={7} xl={7} className="floatRight">
                            <ul>
                                <li>品智总部</li>
                                <li>广东省深圳市罗湖区桂园街道深南东路与和平路交汇处鸿隆世纪广场a座6楼</li>
                                <li>电话：888888888</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </ContactUsWrap>
            )
        }else{
            return(
                <ContactUsWrap>
                <div className="contactus-box">
                    <ul className="list-inline hascity">
                        <li 
                            className={ isshow ? 'active' : '' }
                            onClick={ this.changeisshow }
                            >深圳
                        </li>
                        <li 
                            className={ !isshow ? "active" : '' }
                            onClick={ this.changeisshow }
                            >汕尾
                        </li>
                    </ul>
                    <Row>
                        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                            <img src={swaddress} alt="" className="imgres"/>
                        </Col>
                        <Col xs={24} sm={24} md={7} lg={7} xl={7} className="floatRight">
                            <ul>
                                <li>汕尾总部</li>
                                <li>广东省汕尾市海丰县附城镇三环南路正升华府大门口A2商铺二楼-汕尾市品智广告传媒有限公司</li>
                                <li>电话：0660-6288888</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </ContactUsWrap>
            )
        }
    }
    changeisshow(){
        this.setState({
            isshow:!this.state.isshow
        })
    }
}

export default ContactUs