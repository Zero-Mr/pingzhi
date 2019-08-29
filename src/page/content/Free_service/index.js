import React, { PureComponent } from 'react';
import { FreeServerWrap } from './style'
import UserName from '../Brand_strength/server_banner/usernameui'
import TelNumber from '../Brand_strength/server_banner/telui'
import Address from '../Brand_strength/server_banner/userhome'
import Freebtn from '../Brand_strength/server_banner/freebtn'
import { Icon, Row, Col, Button } from 'antd'
import { connect } from 'react-redux';
import {actionsCreators} from './store'
import axios from 'axios'
import apiList from '@src/apiData.json'
import imgsrc_1 from '@src/statics/index/house_inspection_1.png'
import imgsrc_2 from '@src/statics/index/house_inspection_2.png'
import imgsrc_3 from '@src/statics/index/house_inspection_3.png'
import imgsrc_4 from '@src/statics/index/amount_room.png'
import imgsrc_5 from '@src/statics/index/plan_1.png'
import imgsrc_6 from '@src/statics/index/plan_2.png'
import imgsrc_7 from '@src/statics/index/plan_3.png'
import imgsrc_8 from '@src/statics/index/reckon.png'
import imgsrc_9 from '@src/statics/index/visit_1.png'
import imgsrc_10 from '@src/statics/index/visit_2.png'
import imgsrc_11 from '@src/statics/index/visit_3.png'

class FreeServer extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            serverdata: [
                { "title": "免费验房", "dsc": "绝不放过任何瑕疵", "innertextone": "专业检测工具和专业验房服务", "innertexttwo": "提供高于行业标准的验房检测", "spanone": "专业", "spantwo": "全面", "innerdsc": "空鼓、渗漏水、裂缝、强弱电、等新房质量问题一网打尽，根据验房结果提供合理解决方案。", "btntxt": "申请免费验房","imglist":[imgsrc_1, imgsrc_2, imgsrc_3],"alerttext":"免费上门验房，绝不放过任何瑕疵！"},
                { "title": "免费量房", "dsc": "尺寸精确至0.01平米", "innertextone": "全房间结构复尺", "innertexttwo": "提供精准房屋尺寸", "spanone": "精准", "spantwo": "详细", "innerdsc": "对各个房间长、宽、高以及门、窗、空调、暖气的位置进行逐一精确测量为后期合理设计、准确预算、严谨施工提供准确数据", "btntxt": "申请免费量房","imglist":[imgsrc_4],"alerttext":"免费上门量房，尺寸精确至0.01平米！"},
                { "title": "提供平面方案", "dsc": "贴心满足业主需求", "innertextone": "合理规划空间功能布局", "innertexttwo": "提供个性化平面设计方案", "spanone": "合理", "spantwo": "个性", "innerdsc": "专业设计师实地量房，为您的房子“量体裁衣”现场沟通采光及空间布局方案，定制专属于您的幸福家", "btntxt": "申请提供平面方案","imglist":[imgsrc_5, imgsrc_6, imgsrc_7],"alerttext":"免费提供平面方案，贴心满足业主需求！"},
                { "title": "提供全装估算", "dsc": "项目清晰 价格透明", "innertextone": "明码标价全房所需用材", "innertexttwo": "提供合理装修报价", "spanone": "透明", "spantwo": "放心", "innerdsc": "装修预算不怕“低价”陷阱、后期恶意“增项”，专业预算团队根据实际方案提供全房装修所需材料明细及报价提供合理的装修估算，报价公开透明。", "btntxt": "申请提供全装估算","imglist":[imgsrc_8],"alerttext":"免费提供全装估算，项目清晰价格透明！"},
                { "title": "参观精钻工地", "dsc": "工程质量 眼见为实", "innertextone": "精钻工地实地考察", "innertexttwo": "全面了解装修工程质量", "spanone": "环保", "spantwo": "安全", "innerdsc": "工地管理有规范、施工工艺有讲究、施工标准有细节，全城精钻工地实地体验，看形象和标准，更看细节和质量", "btntxt": "申请参观精钻工地","imglist":[imgsrc_9, imgsrc_10, imgsrc_11],"alerttext":"免费参观精钻工地，工程质量眼见为实！"}
            ],
            isshow:false,
            alerttitle:"",
            alerttext:"",
            allter:""
        }
        this.floorNavBtn = this.floorNavBtn.bind(this)
    }
    render() {
        const { serverdata,isshow,alerttitle,alerttext,allter} = this.state;
        const { alertsubscribe,clickclose } = this.props;
        return (
            <FreeServerWrap>
                <div className="topbox">
                    <div className="topbox-cont">
                        <div className="floatLeft leftbox">

                        </div>
                        <div className="floatRight rightbox">
                            <h1>10秒钟，快速开启您的装修之旅</h1>
                            <div className="freeusername">
                                <UserName />
                            </div>
                            <div className="freetel">
                                <TelNumber />
                            </div>
                            <div className="freeaddress">
                                <Address />
                            </div>
                            <div className="freebtn">
                                <Freebtn />
                            </div>
                            <p className="commitment"><Icon type="warning" />我们承诺：品智装饰提供该项免费服务，绝不产生任何费用，为了您的利益以及我们的口碑，您的隐私将被严格保密。</p>
                        </div>
                    </div>
                </div>
                <div className="server-select">
                    <div className="server-select-cont">
                        <Row type="flex" className="selectbox" justify="space-around" align="middle">
                            {
                                serverdata.map((item, index) => {
                                    let icontext;
                                    if (index == 0) {
                                        icontext = "home"
                                    } else if (index == 1) {
                                        icontext = "project"
                                    } else if (index == 2) {
                                        icontext = "layout"
                                    } else if (index == 3) {
                                        icontext = "account-book"
                                    } else if (index == 4) {
                                        icontext = "bank"
                                    }
                                    return (
                                        <Col onClick={ () => this.floorNavBtn(index) } key={index} xs={12} sm={12} md={4} lg={4} xl={4} className="text-center item">
                                            <h3>{item.title}</h3>
                                            <p>{item.dsc}</p>
                                            <Icon type={icontext} />
                                        </Col>
                                    )
                                })
                            }

                        </Row>
                    </div>
                </div>
                <div className="select-block">
                    {
                        serverdata.map((item, index) => {
                            if ( index %2 == 0) {
                                return (
                                    <div className="select-block-item" key={index}>
                                        <div className="center-cont">
                                            <Row>
                                                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="data-box">
                                                    <h3>{item.title}</h3>
                                                    <p className="innertext">{item.innertextone}</p>
                                                    <p className="innertext">{item.innertexttwo}</p>
                                                    <span className="spanblock">{item.spanone}</span>
                                                    <span className="spanblock">{item.spantwo}</span>
                                                    <p className="innerdsc">{item.innerdsc}</p>
                                                    <Button onClick={ () => alertsubscribe(this,item.btntxt,item.alerttext) }  type="primary">{item.btntxt}</Button>
                                                </Col>
                                                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="imgbox">
                                                    {item.imglist.map((srcitem,srcindex)=>{
                                                        return (                     
                                                                <img key={srcindex} src={srcitem} alt="" className="imgres" />
                                                        )
                                                    })}
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                )
                            } else {
                                return(
                                    <div className="select-block-item" key={index}>
                                    <div className="center-cont">
                                        <Row>
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="imgbox">
                                                <img src={item.imglist[0]} alt="" className="imgres" />
                                            </Col>
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="data-box text-right">
                                                    <h3>{item.title}</h3>
                                                    <p className="innertext">{item.innertextone}</p>
                                                    <p className="innertext">{item.innertexttwo}</p>
                                                    <span className="spanblock">{item.spanone}</span>
                                                    <span className="spanblock">{item.spantwo}</span>
                                                    <p className="innerdsc">{item.innerdsc}</p>
                                                    <Button onClick={ () => alertsubscribe(this,item.btntxt,item.alerttext)} type="primary">{item.btntxt}</Button>
                                            </Col>

                                        </Row>
                                    </div>
                                </div>
                                )
                            }
                        })
                    }

                </div>
                <div className={ isshow ? "alertsubscribe isopen" : "alertsubscribe" } >
                    <div className="centerWrap text-center">
                    <Icon type="close" className="closebtn" onClick={() =>clickclose(this)} />
                        <h1>{alerttitle}</h1>
                        <p>{alerttext}</p>
                        <div className="usernamebox margin-t">
                            <UserName />
                        </div>
                        <div className="tebnumber margin-t">
                             <TelNumber />
                        </div>
                        <div className="homeaddress margin-t">
                            <Address />
                        </div>
                        <div className="freebtnbox margin-t">
                            <Freebtn />
                        </div>
                        <p>已有<span>{allter}</span>位客户报名</p>
                        <p>免费电话申请<span>400-700-9883</span></p>
                    </div>
                </div>
            </FreeServerWrap>
        )
    }
    floorNavBtn(index){
        let dom = document.querySelectorAll(".select-block-item")[index].offsetTop 
        window.scrollTo(0,dom)
    }
    componentDidMount(){
        document.title= "免费服务"
        let thiss= this;
        axios.get(apiList.data[6].alltelnum).then((res)=>{
            let num = res.data
            thiss.setState({
                allter:num
            })
        }).catch((error)=>{
            console.log(error)
        })
        
    }
}


const mapDispathToProps = (dispatch) => {
    return {
        alertsubscribe(thiss,text,alerttext){
            thiss.setState({
                isshow:true,
                alerttitle:text,
                alerttext,
            })
            dispatch(actionsCreators.setFreetext(text))
        },
        clickclose(thiss){
            thiss.setState({
                isshow:false
            })
        }
    }
}

export default connect(null, mapDispathToProps)(FreeServer)