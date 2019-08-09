import React, { PureComponent } from 'react';
import { Layout, Collapse, Row, Col } from 'antd';
import { connect } from 'react-redux'
import { actionsCreators } from './store'
import { Link } from 'react-router-dom';
import wxcode from '../../statics/dingyuehao.jpg'
const { Panel } = Collapse;
const { Footer } = Layout;





class FooterWrap extends PureComponent {

    render() {
        const { footerList ,footertel} = this.props;
        return (
            <Footer className="footerbox">
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        {
                            footerList.map((item,index) => {
                                
                                return (
                                    <Col className={(index%2 ===0) ? "footeritem":"footeritem telfloatr"} xs={10} sm={6} md={6} lg={5} xl={4} key={item.get('id')}>
                                        <Collapse defaultActiveKey={['1']}>
                                            <Panel header={item.get('title')} key="1">
                                                <ul className="footerlist">
                                                    {item.get('list').map((inneritem)=>{
                                                        return(
                                                            <li key={inneritem.get('id')}>
                                                                <Link to={inneritem.get('link')}>
                                                                   {inneritem.get('title')}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}
 
                                                </ul>
                                            </Panel>
                                        </Collapse>
                                    </Col>
                                )
                            })
                        }
                        <Col className="footeritem telfloatr" xs={10} sm={6} md={6} lg={5} xl={4}>
                            <ul className="telul">
                                {
                                    footertel.map((item) =>{
                                        return (
                                            <li key={item}>联系电话：{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        </Col>
                        <Col className="footeritem footer-wxcode" xs={24} sm={24} md={4} lg={2} xl={2}>
                                <img src={wxcode} alt="" className="imgres"/>
                        </Col>
                    </Col>
                </Row>
            </Footer>
        )
    }
    componentDidMount() {
        this.props.getFooterList();
    }
}


const mapState = (state) => {
    return {
        footerList: state.getIn(['footer', 'footerdata']),
        footertel: state.getIn(['footer','tel'])
    }
}

const mapDispath = (dispatch) => {
    return {
        getFooterList() {
            dispatch(actionsCreators.getFooterListCreators())
        }
    }
}



export default connect(mapState, mapDispath)(FooterWrap)
