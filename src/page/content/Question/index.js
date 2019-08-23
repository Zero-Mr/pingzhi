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
            fengshuilist:[],
            questions:[],
            renovation:[]
        }
    }

    render() {
        const { fengshuilist , questions,renovation} = this.state;
        const { before , ins,after } = this.props;
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
                                    {
                                            before.map((item,index)=>{
                                                let icontype;
                                                if(index==0){
                                                    icontype='key'
                                                }else if(index==1){
                                                    icontype='edit'
                                                }else if(index==2){
                                                    icontype='calculator'
                                                }else if(index==3){
                                                    icontype='file-protect'
                                                }
                                                return (
                                                    <li key={index}>
                                                        <Link to={'/Know-how/'+item.get('id')+':'+index+'/before'}>
                                                            <Icon type={icontype} />
                                                            <br />
                                                            {item.get('text')}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                </ul>
                            </Card>
                        </Col>
                        <Col xs={7} sm={7} md={7} lg={7} xl={7} className="gutter-row">
                            <Card
                                hoverable
                                cover={<img alt="example" src={processimg_2} />}
                            >
                                <ul>
                                    {
                                        ins.map((item,index)=>{
                                            
                                            let icontype;
                                            if(index==0){
                                                icontype='tool'
                                            }else if(index==1){
                                                icontype='thunderbolt'
                                            }else if(index==2){
                                                icontype='bg-colors'
                                            }else if(index==3){
                                                icontype='gold'
                                            }
                                            if(index>=0 && index<=3){
                                                return(
                                                    <li key={index}>
                                                        <Link to={'/Know-how/'+item.get('id')+':'+index+'/in'}>
                                                        <Icon type={icontype} />
                                                        <br />
                                                        {item.get('text')}
                                                    </Link>
                                                    </li>
                                                )
                                            }
                                          
                                        })
                                    }
                                </ul>
                               <ul>
                                    {       
                                        ins.map((item,index)=>{            
                                            let icontype;
                                            if(index==4){
                                                icontype='pic-center'
                                            }else if(index==5){
                                                icontype='experiment'
                                            }else if(index==6){
                                                icontype='flag'
                                            }else if(index==7){
                                                icontype='ellipsis'
                                            }
                                            if(index>3){
                                                return(
                                                    <li key={index}>
                                                        <Link to={'/Know-how/'+item.get('id')+':'+index+'/in'}>
                                                        <Icon type={icontype} />
                                                        <br />
                                                        {item.get('text')}
                                                    </Link>
                                                    </li>
                                                )
                                            }
                                          
                                        })
                                    }
                               </ul>
                            </Card>
                        </Col>
                        <Col xs={7} sm={7} md={7} lg={7} xl={7} className="gutter-row">
                            <Card
                                hoverable
                                cover={<img alt="example" src={processimg_3} />}
                            >
                                <ul>
                                    {
                                        after.map((item,index)=>{
                                            let icontype;
                                            if(index == 0){
                                                icontype='profile'
                                            }else if(index == 1){
                                                icontype='home'
                                            }
                                            return (
                                                <li key={index}>
                                                    <Link to={'/Know-how/'+item.get('id')+':'+index+'/after'}>
                                                        <Icon type={icontype} />
                                                        <br />
                                                        {item.get('text')}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="feng-shui">
                    <div className="feng-shui-wrap">
                        <h3>家居风水 <span className="floatRight"><Link to="/Know-how/003/fengshui">全部</Link></span> </h3>
                        <Row type="flex" justify="space-around" align="middle">
                            {
                                fengshuilist && fengshuilist.map((item,index)=>{
                                    if(index<=1){
                                        return(
                                            <Col key={index} xs={12} sm={12} md={7} lg={7} xl={7} className="feng-shui-item">
                                                <Link to="">
                                                    <img src={ item.image} alt="" className="imgres" />
                                                    <p>{item.title}</p>
                                                </Link>
                                            </Col>
                                        )
                                    }
                                })
                            }

                            <Col xs={24} sm={24} md={7} lg={7} xl={7}>
                                    {
                                       fengshuilist && fengshuilist.map((item,index)=>{
                                           if(index>=2){
                                               return (
                                                <Col className="fengshui-three-item" key={index} xs={8} sm={8} md={24} lg={24} xl={24}>
                                                    <Link to="">
                                                           <img src={ item.image} alt="" className="imgres" />
                                                           <span>{item.title}</span>
                                                    </Link>
                                                </Col>
                                               )
                                           }
                                       }) 
                                    }
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="questions-and-answers">
                        <div className="questions-and-answers-content">
                                <h3 className="title">装修问答</h3>
                                <Row>
                                    <Col className="Doubt-item" xs={24} sm={24} md={12} lg={12} xl={12}>
                                        <h4>品智常见疑问 <Link to="/Know-how/001:0/question" className="floatRight">全部>></Link> </h4>
        
                                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                            {
                                                questions && questions.map((item,index)=>{
                                                    if(index==0){
                                                        return (
                                                           <div key={index} className={"Doubt"+index}>
                                                                <Link to="">
                                                                        <img src={item.image} alt="" className="imgres"/>
                                                                        <p>{item.title}</p>
                                                                </Link>
                                                           </div> 
                                                        )
                                                    }
                                                    if(index>=1 && index <=3){
                                                        return (
                                                            <div key={index} className={"Doubt-list Doubt-list-"+index}>
                                                                <ul>
                                                                    <li>
                                                                        <Link to="">
                                                                           · {item.title}
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        )
                                                    }
                                                })
                                            }             
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                            {
                                                questions && questions.map((item,index)=>{
                                                    if(index>=4){
                                                        return (
                                                            <div key={index} className={"Doubt-list margin-b Doubt-list-"+index}>
                                                                <Link to="">
                                                                    <div className="dis-inline">
                                                                        <img src={item.image} alt="" className="imgres"/>

                                                                    </div>
                                                                    <div className="dis-inline">
                                                                    <p>{item.title}</p>

                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        )
                                                    }
                                                })
                                            }
                                        </Col>
                                    </Col>
                                    <Col className="Doubt-item" xs={24} sm={24} md={12} lg={12} xl={12}>
                                          <h4>装修常见疑问 <Link to="/Know-how/002:1/question" className="floatRight">全部>></Link> </h4>
                                          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                            {
                                                renovation && renovation.map((item,index)=>{
                                                    if(index==0){
                                                        return (
                                                           <div key={index} className={"Doubt"+index}>
                                                              <Link to="">
                                                                    <img src={item.image} alt="" className="imgres"/>
                                                                    <p>{item.title}</p>
                                                              </Link>
                                                           </div> 
                                                        )
                                                    }
                                                    if(index>=1 && index <=3){
                                                        return (
                                                            <div key={index} className={"Doubt-list Doubt-list-"+index}>
                                                                <ul>
                                                                    <li>
                                                                        <Link to="">
                                                                           · {item.title}
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        )
                                                    }
                                                })
                                            }             
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                            {
                                                renovation && renovation.map((item,index)=>{
                                                    if(index>=4){
                                                        return (
                                                            <div key={index} className={"Doubt-list margin-b Doubt-list-"+index}>
                                                                <Link to="">
                                                                <div className="dis-inline">
                                                                    <img src={item.image} alt="" className="imgres"/>

                                                                </div>
                                                                <div className="dis-inline">
                                                                   <p>{item.title}</p>

                                                                </div>
                                                                </Link>
                                                            </div>
                                                        )
                                                    }
                                                })
                                            }
                                        </Col>
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
            let data = res.data;
            thiss.setState({
                fengshuilist:data[0],
                questions:data[1],
                renovation:data[2]
            })
        })
    
    }


}

const mapState = (state) =>{
    return {
        before:state.getIn(['process','processdata','before',0,'list']),
        ins:state.getIn(['process','processdata','in',0,'list']),
        after:state.getIn(['process','processdata','after',0,'list'])
        
    }
}


export default connect(mapState, null)(Question)