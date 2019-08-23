import React, { PureComponent } from 'react';
import { ProcessWrap } from './style'
import { connect } from 'react-redux';
import {actionsCreators} from './store'
import { Breadcrumb ,Row,Col ,Card  } from 'antd';
import { Link } from 'react-router-dom'
import UserName from '../Brand_strength/server_banner/usernameui'
import UserTel from '../Brand_strength/server_banner/telui'
import UserHome from '../Brand_strength/server_banner/userhome'
import FreeBtn from '../Brand_strength/server_banner/freebtn'

class Process extends PureComponent {
    

    constructor(props){
        super(props)
        this.state = {

        }
    }


    render() {
        const { urlID, before ,ins,after,question,nowAddress} = this.props;

        let content ;
        if(urlID == '003'){
            content =
            <Card title="家居风水" bordered={true}>
            </Card>
        }else if(urlID == '001' || urlID == '002'){
            content =  <Card title="装修问答" bordered={true}>
                 {
                     question &&  question.map((item,index)=>{
                            return (
                                <p className={ item.get('status') ? 'optionselect active' : "optionselect"} key={index}>{item.get('text')}</p> 
                            )
                        })
                    }
             </Card>
        }else{
               
            content = 
            <div>
                <Card title="装修前-准备阶段" bordered={true}>
                    {
                        before &&  before.map((item,index)=>{
                            return (
                                <p className={ item.get('status') ? 'optionselect active' : "optionselect"} key={index}>{item.get('text')}</p> 
                            )
                        })
                    }
                </Card>
                <Card title="装修中-施工阶段" bordered={true}>
                {
                  ins &&  ins.map((item,index)=>{
                        if(index<=6){
                            return (
                                <p className={ item.get('status') ? 'optionselect active' : "optionselect"} key={index}>{item.get('text')}</p> 
                            )
                        }
                       
                    })
                }
                </Card>
                <Card title="装修后-入住阶段" bordered={true}>
                    {
                     after &&   after.map((item,index)=>{
                            return (
                                <p className={ item.get('status') ? 'optionselect active' : "optionselect"} key={index}>{item.get('text')}</p> 
                            )
                        })
                    }
                </Card>
            </div>
  
        }
        return (
            <ProcessWrap>
                <div className="process-content">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="/">
                                首页
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to="/Decorate-a-knowledge">
                                装修知识
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                                {nowAddress}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Row className="process-select">
                        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                            {content}
                            <div className="add-data-box">
                                <h3 className="text-center">免费申请户型规划</h3>
                                <p className="text-center">专属设计师免费1对1全程服务</p>
                                <div className="cj-item">
                                    <UserName />
                                </div>
                                <div className="cj-item">
                                    <UserTel/>
                                </div>
                                <div className="cj-item">
                                    <UserHome/>
                                </div>
                                <div className="cj-item">
                                    <FreeBtn/>
                                </div>
                                <p className="text-center">
                                   现在预约即可享受5项VIP服务
                                </p>
                            </div>

                        </Col>
                    </Row>
                </div>  
            </ProcessWrap>
        )
    }

    componentDidUpdate(){
        //   setstatusfunc(this)
    }

    componentDidMount(){
        setstatusfunc(this)
        window.scrollTo(0,-30)
    }
}

function setstatusfunc(thiss){
    let idarr = thiss.props.match.params.id.split(':');
    let getID =idarr[0];
    let statusindx=idarr[1];
    let classification =thiss.props.match.params.classification;
    let before = thiss.props.before;
    let ins = thiss.props.ins;
    let after = thiss.props.after;
    let alldata = thiss.props.alldata;
    let question = thiss.props.question
    thiss.props.setStatus(getID,classification,before,ins,after,question,statusindx,alldata)
}

const mapStateProps = (state) => {
    return {
        before:state.getIn(['process','processdata','before',0,'list']),
        ins:state.getIn(['process','processdata','in',0,'list']),
        after:state.getIn(['process','processdata','after',0,'list']),
        question:state.getIn(['process','processdata','question',0,'list']),
        urlID:state.getIn(['process','urlID']),
        nowAddress:state.getIn(['process','nowAddress']),
        classification:state.getIn(['process','classification']),
        alldata:state.getIn(['process','processdata'])

    }
}

const mapDispathToProps = (dispatch) => {
    return {
        setStatus(id,option,before,ins,after,question,statusindx,alldata){
            let nowAddress;
            if(id=='001'){
                nowAddress='品智常见问答'
            }else if(id=='002'){
                nowAddress='装修常见疑问'
            }else if(id=='003'){
                nowAddress='家居风水'
            }else{
                nowAddress='装修流程'
            }

            let JSalldata = alldata.toJS();
            let JSafter = after.toJS();
            let JSbefore = before.toJS();
            let JSin = ins.toJS();
            let JSquestion = question.toJS();


            // function funcfor(arr1,arr2,arr3,arr4){
            //     for(let a = 0; a < JSbefore.length; a++){
            //         if( a == statusindx ){
            //             JSbefore[a].status = true
            //         }else{
            //             JSbefore[a].status = false
            //         }
            //     }
            //     for(let b = 0; b < JSafter.length; b++){
            //         JSafter[b].status = false
            //     }
            //     for(let c = 0; c <JSin.length; c++){
            //         JSin[c].status =false
            //     }
            //     for(let d =0; d < JSquestion.length; d++){
            //         JSquestion[d].status = false
            //     }
            // }

            if(option == 'before'){
                console.log('装修前')
                for(let a = 0; a < JSbefore.length; a++){
                    if( a == statusindx ){
                        JSbefore[a].status = true
                    }else{
                        JSbefore[a].status = false
                    }
                }
                for(let b = 0; b < JSafter.length; b++){
                    JSafter[b].status = false
                }
                for(let c = 0; c <JSin.length; c++){
                    JSin[c].status =false
                }
                for(let d =0; d < JSquestion.length; d++){
                    JSquestion[d].status = false
                }

            }else if(option == 'in'){
                console.log('装修中')
                for(let a = 0; a < JSbefore.length; a++){
                        JSbefore[a].status = false
                }
                for(let b = 0; b < JSafter.length; b++){
                    JSafter[b].status = false
                }
                for(let c = 0; c <JSin.length; c++){
                    if(c==statusindx){
                        JSin[c].status = true
                    }else{
                        JSin[c].status =false
                    }
                }
                for(let d =0; d < JSquestion.length; d++){
                    JSquestion[d].status = false
                }
            }else if(option == 'after'){
                console.log('装修后')
                for(let a = 0; a < JSbefore.length; a++){
                        JSbefore[a].status = false
                }
                for(let b = 0; b < JSafter.length; b++){
                    if( b == statusindx ){
                       JSafter[b].status = true                        
                    }else{
                       JSafter[b].status = false
                    }
                }
                for(let c = 0; c <JSin.length; c++){
                    JSin[c].status =false
                }
                for(let d =0; d < JSquestion.length; d++){
                    JSquestion[d].status = false
                }
            }else if(option == 'question'){
                console.log('问答')
                for(let a = 0; a < JSbefore.length; a++){
                    JSbefore[a].status = false
                 }
                for(let b = 0; b < JSafter.length; b++){
                        JSafter[b].status = false      
                }
                for(let c = 0; c <JSin.length; c++){
                    JSin[c].status =false
                }
                for(let d =0; d < JSquestion.length; d++){  
                    if( d == statusindx ){
                        JSquestion[d].status = true
                    }else{
                        JSquestion[d].status = false
                    }
                 }
            }else if(option == 'all'){
                console.log('全部')
                for(let a = 0; a < JSbefore.length; a++){
                    JSbefore[a].status = false
                 }
                for(let b = 0; b < JSafter.length; b++){
                        JSafter[b].status = false      
                }
                for(let c = 0; c <JSin.length; c++){
                    JSin[c].status =false
                }
                for(let d =0; d < JSquestion.length; d++){
                        JSquestion[d].status = false
                 }
            }
            console.log(option)
            console.log(JSalldata)
            console.log(JSafter,JSbefore,JSin,JSquestion)
            dispatch(actionsCreators.setStatusCreators(id,option,nowAddress,statusindx,JSafter,JSbefore,JSin,JSquestion))

        }
    }
}

export default connect(mapStateProps, mapDispathToProps)(Process)