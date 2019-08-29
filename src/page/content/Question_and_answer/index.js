import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    QueKonwWrap
} from './style'
import { Breadcrumb ,Row,Col } from 'antd';
import {Link} from 'react-router-dom'
import axios from 'axios'
import apiList from '@src/apiData.json'
import UserName from '../Brand_strength/server_banner/usernameui'
import UserTel from '../Brand_strength/server_banner/telui'
import UserHome from '../Brand_strength/server_banner/userhome'
import FreeBtn from '../Brand_strength/server_banner/freebtn'
class Questionandanswer extends PureComponent {


    constructor(props){
        super(props)
        this.state = {
            data:[],
            next:[],
            prev:[]
        }
        this.nextAndprevClick =  this.nextAndprevClick.bind(this) 
    }

    render() {

        const { data,next,prev } = this.state;
        let linkcont;

        if( data.current && data.current.type == '装修流程' ){
            linkcont = <Breadcrumb.Item>
                            <Link to="/Know-how/12:7/in">
                                { data.current && data.current.type}
                            </Link>
                      </Breadcrumb.Item>
        }else if(data.current && data.current.type == '家居风水'){
            linkcont = <Breadcrumb.Item>
                            <Link to="/Know-how/003:0/fengshui">
                                { data.current && data.current.type}
                            </Link>
                      </Breadcrumb.Item>
        }else if(data.current && data.current.type == '装修问答'){
            linkcont = <Breadcrumb.Item>
                            <Link to="/Know-how/001:0/question">
                                { data.current && data.current.type}
                            </Link>
                      </Breadcrumb.Item>
        }
        


        return (
            <QueKonwWrap>
                <div className="conten">
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


                       {linkcont}

                        <Breadcrumb.Item>
                                { data.current && data.current.category}
                        </Breadcrumb.Item>

                        <Breadcrumb.Item>
                                { data.current && data.current.title}
                        </Breadcrumb.Item>

                    </Breadcrumb>
                <Row>
                    <Col xs={24} sm={24} md={18} lg={18} xl={18} className='text-wrap-box'>
                        <div className="text-box" id="text-box">
                            <div className="text-header">
                                <h3 className='text-center'>
                                       { data.current && data.current.title}
                                </h3>
                                <time className="text-center">
                                    发布日期：{ data.current && data.current.time}
                                </time>
                            </div>
                            <div className="text-body" dangerouslySetInnerHTML={{ __html: data.current && data.current.content}}>
                                  
                            </div>
                            <div className="text-footer">
 
                                <span  className="next-andlastclick" >
                                    <Link onClick={ () => this.nextAndprevClick(prev.id) } to={'/Question-and-answer/' + prev.id }>
                                       { prev && prev.title ? "上一篇：" :'' }  { prev && prev.title }
                                    </Link>
                                </span>
                                <span  className="next-andlastclick">
                                    
                                    { next && next.title ? <Link onClick={ () => this.nextAndprevClick(next.id) } to={'/Question-and-answer/' + next.id }>{ next && next.title ? " 下一篇：" : "" } { next && next.title }</Link> : "下一篇：没有了" }
                                </span>

                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
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
                </Row>
                </div>
            </QueKonwWrap>
        )
    }

    componentDidMount() {
        let pageID= this.props.match.params.id;
        let thiss = this;
        axios.get(apiList.data[12].Questionandanswer,{
            params:{
                cmsdk:pageID
            }
        }).then((res)=>{
            thiss.setState({
                data:res.data,
                next:res.data.next,
                prev:res.data.previous
            })    
            document.title = this.state.data.current.title;
        }).catch((error)=>{
            console.log(error)
        })
        window.scrollTo(0, -30)
    }

    nextAndprevClick(id){
        let thiss= this;
        axios.get(apiList.data[12].Questionandanswer,{
            params:{
                cmsdk:id
            }
        }).then((res)=>{
            thiss.setState({
                data:res.data,
                next:res.data.next,
                prev:res.data.previous
            })   
            document.title = this.state.data.current.title;
        }).catch((error)=>{
            console.log(error)
        })
        window.scrollTo(0, -30)
    }
}


export default connect(null, null)(Questionandanswer)