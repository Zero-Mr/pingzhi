import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { actionsCreators } from './store'
import logo from '../../statics/logo.png'

import {
    HeaderWrapdom,
    ConstHeaderNav,
    NavWrap
} from './style'
import { Layout, Row, Col, Input, Icon, Menu } from 'antd';
const { Search } = Input;
const { Header } = Layout;


const { SubMenu } = Menu;

function handleClick(e) {
    console.log('click', e);
}

class HeaderWrap extends Component {
    render() {
        const { navlist } = this.props;
        console.log(navlist)
        return (
            <Header>
                <Icon type="menu" className="menu-btn visible-xs" />
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
                        <Menu onClick={handleClick} style={{ width: 100+'%' }} mode="vertical" className="list-inline">
                            
                            {
                                navlist.map((item) => {
                                    return (
                                        <SubMenu
                                        key={item.get('id')}
                                        title={
                                            <span>
                                                <span>{item.get("title")}</span>
                                            </span>
                                        }
                                    >
                                        {
                                            this.getNavInnerItem(item)
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
    componentDidMount(){
        this.props.getNavList()
    }

    getNavInnerItem(item){
        if(item.get('innerdata')){
            let innerdata = item.get('innerdata');
            console.log(innerdata.toJS(innerdata))
            innerdata.map((items)=>{
                return(
                   <Menu.Item key={items.get('id')}>{items.get('title')}</Menu.Item>
                )
           })
        }
        
    }
}


const mapStateToProps = (state) => {
    return {
        navlist: state.getIn(['header','navlist']),
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        getNavList(){
            dispatch(actionsCreators.getNavListCreators())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(HeaderWrap);