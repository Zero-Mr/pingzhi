import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { actionsCreators } from './store'
import { CaseactionsCreators } from '../../page/content/case/selectcase/store'
import logo from '../../statics/logo.png'

import {
    HeaderWrapdom,
    ConstHeaderNav,
    NavWrap
} from './style'
import { Layout, Row, Col, Input, Icon, Menu } from 'antd';
import axios from 'axios'
import apiList from '@src/apiData.json'
const { Search } = Input;
const { Header } = Layout;


const { SubMenu } = Menu;


class HeaderWrap extends Component {
    render() {
        const { navlist, navshow, setNavShow, setNavClass, navInnerClick,caselist } = this.props;
        return (
            <Header>
                <Icon type="menu" onClick={() => setNavShow(navshow)} className="menu-btn visible-xs" />

                <HeaderWrapdom>
                    <Row>
                        <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                            <Link to='/' className="logolink">
                                <img src={logo} alt="" className="imgres logoimg" />
                            </Link>
                        </Col>
                        <Col className="floatRight hidden-xs" span={6}> <Search placeholder="请输入搜索关键词" onSearch={value => console.log(value)} /> </Col>
                    </Row>
                </HeaderWrapdom>

                <ConstHeaderNav>
                    <NavWrap>
                        <Menu style={{ width: 100 + '%' }} mode="vertical" className={navshow ? "nav-ul list-inline isshow" : "nav-ul list-inline"}>

                            {
                                navlist.map((item, index) => {
                                    let content;
      
                                    if (item.get("innerdata")) {
     
                                        content = item.get("innerdata").map((innerItem,innerindex) => (
                                            <Menu.Item className={innerItem.get('status') ? 'dis-inline active' : 'dis-inline'} key={innerItem.get('id')}>
                                                <Link
                                                    to={innerItem.get('link') }        
                                                    onClick={() => navInnerClick(navlist, index,innerindex,innerItem.get('title'),caselist)}
                                                >
                                                    {innerItem.get('title')}
                                                </Link>
                                            </Menu.Item>
                                        ))
                                    }

                                    return (
                                        <SubMenu
                                            key={item.get('id')}
                                            className={item.get("innerdata") ? 'hasinner' : ''}
                                            title={
                                                <span>
                                                    <span>
                                                        <Link
                                                            className={item.get('status') ? 'active' : ''}
                                                            to={item.get("link")}
                                                            onClick={() => setNavClass(navlist, index)}>
                                                            {item.get("title")}
                                                        </Link>
                                                    </span>
                                                </span>
                                            }
                                        >
                                            {
                                                content
                                            }

                                        </SubMenu>
                                    )
                                })
                            }
                        </Menu>
                    </NavWrap>
                </ConstHeaderNav>
            </Header>
        )
    }
    componentDidMount() {
        this.props.getNavList()
    }


}


const mapStateToProps = (state) => {
    return {
        navlist: state.getIn(['header', 'navlist']),
        navshow: state.getIn(['header', 'navshow']),
        caselist: state.getIn(['ItemSelect', 'styleList']),
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        getNavList() {
            dispatch(actionsCreators.getNavListCreators())
        },
        setNavShow(navshow) {
            let blomes = !navshow
            dispatch(actionsCreators.setNavShowCreators(blomes))
        },
        setNavClass(navlist, index) {
            let jsnavlist = navlist.toJS();
            for (let i = 0; i < jsnavlist.length; i++) {
                if (i == index) {
                    jsnavlist[i].status = true
                } else {
                    jsnavlist[i].status = false
                }
            }
            dispatch(actionsCreators.setNavClassCreators(jsnavlist))

                if(index==2){
                    axios.get(apiList.data[10].caselist, {
                        params: {
                            offset: 1,
                            limit: 16
                        }
                    }).then((res) => {
                        sessionStorage.setItem("styleindex",null);
                        sessionStorage.setItem("typeindex",null);
                        sessionStorage.setItem("budgetindex",null);
                        let getdataArr = {
                            offset: 1,
                            limit: 16,
                            style:"",
                            type:"",
                            begPrice:"",
                            endPrice:""
                        }
                        sessionStorage.setItem("dataArr",JSON.stringify(getdataArr));
                        let allnum = res.data.total / 16 * 10;
                        let itemlist = res.data.list;
                        dispatch(CaseactionsCreators.opengetdataCreators(allnum,itemlist))

                    }).catch((error) => {
                        console.log(error)
                    })
                }
        },
        navInnerClick(navlist, index,innerindex,title,caselist) {
            sessionStorage.setItem("typeindex",null);
            sessionStorage.setItem("budgetindex",null);
            let jsnavlist = navlist.toJS();
            for (let i = 0; i < jsnavlist.length; i++) {
                if (i == index) {
                    jsnavlist[i].status = true
                } else {
                    jsnavlist[i].status = false;
                }
                if(jsnavlist[i].innerdata){
                    for(let c =0;c<jsnavlist[i].innerdata.length;c++){
                        jsnavlist[i].innerdata[c].status=false
                    }
                }
            }
            for(let b=0;b<jsnavlist[index].innerdata.length;b++){
                if(b==innerindex){
                    jsnavlist[index].innerdata[b].status=true
                }else{
                    jsnavlist[index].innerdata[b].status=false
                }
            }
            dispatch(actionsCreators.navInnerClickCreators(jsnavlist))
            if(index==2){
                dispatch(CaseactionsCreators.headerInnerNavClickCreatore(innerindex,title,caselist))
            }

        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(HeaderWrap);