import React, { PureComponent } from 'react';
import { ProcessWrap } from './style'
import { connect } from 'react-redux';
import { actionsCreators } from './store'
import { Breadcrumb, Row, Col, Card, Pagination } from 'antd';
import { Link } from 'react-router-dom'
import UserName from '../Brand_strength/server_banner/usernameui'
import UserTel from '../Brand_strength/server_banner/telui'
import UserHome from '../Brand_strength/server_banner/userhome'
import FreeBtn from '../Brand_strength/server_banner/freebtn'
import axios from 'axios'
import apiList from '@src/apiData.json'

class Process extends PureComponent {

    render() {
        const { urlID, before, ins, after, question, nowAddress, current, totalpage, onChange, clickitem ,itemdata,alldata} = this.props;
        let content;
        if (urlID == '003') {
            content =
                <Card title="家居风水" bordered={true}>
                </Card>
        } else if (urlID == '001' || urlID == '002') {
            content = <Card title="装修问答" bordered={true}>
                {
                    question && question.map((item, index) => {
                        return (
                            <p  
                                className={item.get('status') ? 'optionselect active' : "optionselect"} 
                                key={index}>
                                <Link  
                                 onClick={(e) =>clickitem(e,alldata,index,this)}
                                 parentopctin="question"  
                                 to={'/Know-how/001:'+index+'/question'}>
                                      {item.get('text')}
                                </Link>
                            </p>
                        )
                    })
                }
            </Card>
        } else {
            content =
                <div>
                    <Card title="装修前-准备阶段" bordered={true}>
                        {
                            before && before.map((item, index) => {
                                return (
                                    <p  
                                        className={item.get('status') ? 'optionselect active' : "optionselect"} 
                                        key={index}>
                                        <Link 
                                            parentopctin="before"  
                                            to={'/Know-how/01:'+index+'/before'}
                                            onClick={(e) =>clickitem(e,alldata,index,this)} >
                                            {item.get('text')}
                                        </Link>
                                        </p>
                                )
                            })
                        }
                    </Card>
                    <Card title="装修中-施工阶段" bordered={true}>
                        {
                            ins && ins.map((item, index) => {
                                if (index <= 6) {
                                    return (
                                        <p 
                                            className={item.get('status') ? 'optionselect active' : "optionselect"} 
                                            key={index}>
                                            <Link 
                                                parentopctin="in"  
                                                to={'/Know-how/01:'+index+'/in'}
                                                onClick={(e) =>clickitem(e,alldata,index,this)} >
                                                 {item.get('text')}
                                             </Link>
                                            </p>
                                    )
                                }

                            })
                        }
                    </Card>
                    <Card title="装修后-入住阶段" bordered={true}>
                        {
                            after && after.map((item, index) => {
                                return (
                                    <p 
                                        className={item.get('status') ? 'optionselect active' : "optionselect"} 
                                        key={index}>
                                            <Link 
                                                parentopctin="after"  
                                                to={'/Know-how/01:'+index+'/after'}
                                                onClick={(e) =>clickitem(e,alldata,index,this)} >
                                                 {item.get('text')}
                                             </Link>
                                        </p>
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
                                    <UserTel />
                                </div>
                                <div className="cj-item">
                                    <UserHome />
                                </div>
                                <div className="cj-item">
                                    <FreeBtn />
                                </div>
                                <p className="text-center">
                                    现在预约即可享受5项VIP服务
                                </p>
                            </div>

                        </Col>
                        <Col xs={24} sm={24} md={18} lg={18} xl={18} className="data-item">
                         
                            {
                                itemdata.map((item,index)=>{
                                    return (
                                        <Row className="item" key={index}>
                                            <Link to={'/'+item.get('id')}>
                                                <Col xs={24} sm={24} md={8} lg={8} xl={8} className="imgbox">
                                                    <img alt="" src={item.get('image')} className="imgres" />
                                                </Col>
                                                <Col xs={24} sm={24} md={16} lg={16} xl={16} className="item-data_box">
                                                    <h3>{item.get('title')}</h3>
                                                    <p>{item.get('summary')}</p>
                                                    <time>{item.get('time')}</time>
                                                </Col>
                                            </Link>
                                        </Row>
                                    )
                                })
                            }
                        </Col>
                        <Pagination current={current} onChange={onChange} total={totalpage} className="text-center" />
                    </Row>
                </div>
            </ProcessWrap>
        )
    }

    componentDidMount() {
        setstatusfunc(this)
        window.scrollTo(0, -30)
    }
}

function setstatusfunc(thiss) {
    let idarr = thiss.props.match.params.id.split(':');
    let getID = idarr[0];
    let statusindx = idarr[1];
    let classification = thiss.props.match.params.classification;
    let before = thiss.props.before;
    let ins = thiss.props.ins;
    let after = thiss.props.after;
    let alldata = thiss.props.alldata;
    let question = thiss.props.question
    thiss.props.setStatus(getID, classification, before, ins, after, question, statusindx, alldata,thiss)
}

const mapStateProps = (state) => {
    return {
        before: state.getIn(['process', 'processdata', 'before', 0, 'list']),
        ins: state.getIn(['process', 'processdata', 'in', 0, 'list']),
        after: state.getIn(['process', 'processdata', 'after', 0, 'list']),
        question: state.getIn(['process', 'processdata', 'question', 0, 'list']),
        urlID: state.getIn(['process', 'urlID']),
        nowAddress: state.getIn(['process', 'nowAddress']),
        classification: state.getIn(['process', 'classification']),
        alldata: state.getIn(['process', 'processdata']),
        current: state.getIn(['process', 'current']),
        totalpage: state.getIn(['process', 'totalpage']),
        itemdata: state.getIn(['process', 'itemdata'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {

        clickitem(e,alldata,index,thiss){
            let value = e.target.innerHTML;
            let jsdata = alldata.toJS();
            let optionselect = e.target.getAttribute('parentopctin');
            let beforedata = jsdata['before'][0].list
            let indata = jsdata['in'][0].list
            let afterdata = jsdata['after'][0].list
            let questiondata = jsdata['question'][0].list
            let nowselect;
            thiss.props.Judgefunc(thiss,optionselect,beforedata,afterdata,indata,questiondata,index);
            thiss.props.switchfunc(value,nowselect)
            dispatch(actionsCreators.changesehect(beforedata,indata,afterdata,questiondata))

        },

        switchfunc(data,boxs){
            switch(data){
                case '品智常见问题':
                        boxs = 'pz_proble'
                        break;
                    case '装修常见疑问':
                        boxs = 'dc_question'
                        break;
                    case '入住':
                            boxs = 'h_rz'
                        break;
                    case '软装':
                            boxs = 'h_rzh'
                        break;
                    case '竣工':
                            boxs = 'z_jg'
                        break;
                    case '油漆':
                            boxs = 'z_yq'
                        break;
                    case '木工':
                            boxs = 'z_mg'
                        break;
                    case '泥瓦':
                            boxs = 'z_nw'
                        break;
                    case '防水':
                            boxs = 'z_fs'
                        break;
                    case '水电':
                            boxs = 'z_sd'
                        break;
                    case '水电':
                            boxs = 'z_cg'
                        break;
                    case '合同':
                            boxs = 'q_ht'
                        break;
                    case '预算':
                            boxs = 'q_ys'
                        break;
                    case '设计':
                            boxs = 'q_sj'
                        break;
                    case '收房':
                            boxs = 'q_sf'
                        break;
                    case '拆改':
                            boxs = 'z_cg'
                            break;
                    case '更多':
                            boxs = 'all'
                            break;            
                default:
                    break;
            }
            if(boxs == 'all'){
                axios.get(apiList.data[4].knowledge, {
                    params: {
                        limit: 6,
                        page: 1,
                        type:2
    
                    }
                }).then((res) => {
                    let axiosarr = res.data.list;
                    let total = res.data.total/6*10;
                    dispatch(actionsCreators.setArrDataCreators(axiosarr,total))
                    sessionStorage.setItem('typesof', 'all');
                })
            }else if(boxs != ''){
                axios.get(apiList.data[4].knowledge, {
                    params: {
                        limit: 6,
                        page: 1,
                        category: boxs
    
                    }
                }).then((res) => {
                    let axiosarr = res.data.list;
                    let total = res.data.total/6*10;
                    dispatch(actionsCreators.setArrDataCreators(axiosarr,total))
                    sessionStorage.setItem('typesof', boxs);
                })
            }else{
                axios.get(apiList.data[4].knowledge, {
                    params: {
                        limit: 6,
                        page: 1,
                        type:3
    
                    }
                }).then((res) => {
                    let axiosarr = res.data.list;
                    let total = res.data.total/6*10;
                    dispatch(actionsCreators.setArrDataCreators(axiosarr,total))
                    sessionStorage.setItem('typesof', 'fengshui');
                })
            }
        },

        onChange(page) {
            let typesof = sessionStorage.getItem('typesof');
            console.log(typesof)
            if( typesof == 'all' ){
                axios.get(apiList.data[4].knowledge, {
                    params: {
                        limit: 6,
                        offset:page,
                        type:2

                    }
                }).then((res) => {
                    let axiosarr = res.data.list;
                    dispatch(actionsCreators.ChangepageDataCreators(axiosarr,page))
                })
            }else if( typesof == 'fengshui' ){
                axios.get(apiList.data[4].knowledge, {
                    params: {
                        limit: 6,
                        offset:page,
                        type:3

                    }
                }).then((res) => {
                    let axiosarr = res.data.list;
                    dispatch(actionsCreators.ChangepageDataCreators(axiosarr,page))
                })
            }else{
                axios.get(apiList.data[4].knowledge, {
                    params: {
                        limit: 6,
                        offset:page,
                        category: typesof
    
                    }
                }).then((res) => {
                    let axiosarr = res.data.list;
                    dispatch(actionsCreators.ChangepageDataCreators(axiosarr,page))
                })
            }
            dispatch(actionsCreators.changepageCreators(page))
        },

        funcfor(arr1,arr2,arr3,arr4,indexnum){
            for (let a = 0; a < arr1.length; a++) {
                if (a == indexnum) {
                    arr1[a].status = true
                } else {
                    arr1[a].status = false
                }
            }
            for (let b = 0; b < arr2.length; b++) {
                arr2[b].status = false
            }
            for (let c = 0; c < arr3.length; c++) {
                arr3[c].status = false
            }
            for (let d = 0; d < arr4.length; d++) {
                arr4[d].status = false
            }
        },
        Judgefunc(thiss,condition,arr1,arr2,arr3,arr4,indexnum){
            if (condition == 'before') {
                thiss.props.funcfor(arr1, arr2, arr3, arr4,indexnum)

            } else if (condition == 'in') {
                thiss.props.funcfor(arr3, arr2, arr1, arr4,indexnum)

            } else if (condition == 'after') {
                thiss.props.funcfor(arr2, arr1, arr3, arr4,indexnum)

            } else if (condition == 'question') {
                thiss.props.funcfor(arr4, arr2, arr3, arr1,indexnum)

            } else if (condition == 'all') {
                for (let a = 0; a < arr1.length; a++) {
                    arr1[a].status = false
                }
                for (let b = 0; b < arr2.length; b++) {
                    arr2[b].status = false
                }
                for (let c = 0; c < arr3.length; c++) {
                    arr3[c].status = false
                }
                for (let d = 0; d < arr4.length; d++) {
                    arr4[d].status = false
                }
            }

        },

        setStatus(id, option, before, ins, after, question, statusindx, alldata,thiss) {
            let nowAddress;
            let JSalldata = alldata.toJS();
            let JSafter = after.toJS();
            let JSbefore = before.toJS();
            let JSin = ins.toJS();
            let JSquestion = question.toJS();
            let nowselect = JSalldata[option][0].list[statusindx].text;
            if (id == '001') {
                nowAddress = '品智常见问答'
            } else if (id == '002') {
                nowAddress = '装修常见疑问'
            } else if (id == '003') {
                nowAddress = '家居风水'
            } else {
                nowAddress = '装修流程'
            }
            thiss.props.Judgefunc(thiss,option,JSbefore,JSafter,JSin,JSquestion,statusindx);
            thiss.props.switchfunc(nowselect,nowselect)
            dispatch(actionsCreators.setStatusCreators(id, option, nowAddress, statusindx, JSafter, JSbefore, JSin, JSquestion))

        }
    }
}

export default connect(mapStateProps, mapDispathToProps)(Process)