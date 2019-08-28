import React, { PureComponent } from 'react';
import { JdcaseWrap } from './style'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { actionsCreators } from './store'

class Jdcase extends PureComponent {

    render() {
        const {
            navlistcopy,
            jslist,
            setlocoltion
        } = this.props;

        

        return (
            <JdcaseWrap className="JdcaseWrap">
                <h1 className="jdtitle">经典案例</h1>
                <div className="jdinnerWrap">
                    <ul className="list-inline jdTopnav">
                        {
                            navlistcopy && navlistcopy.map((item, index) => (
                                <li key={index}>
                                    <Link onClick={() => setlocoltion(index) } to={item.get('link')}>
                                          { item.get('title') }
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <Row className="jdcaseWrap">
                        {
                            jslist.map((item,index) => {
                                let telindexclass = index == 1 ? 8 : 7;
                                let towindexclass = index == 4 ? 24 : 11;
                                let className_jd;
                                if(index == 0){
                                    className_jd = 'jdcaseitem jditem-'+index
                                }else if(index == 1){
                                    className_jd = 'jdcaseitem jditem-'+index
                                }else if(index == 2){
                                    className_jd = 'jdcaseitem jditem-'+index
                                }else if(index == 3){
                                    className_jd = 'jdcaseitem jditem-'+index
                                }else if(index == 4){
                                    className_jd = 'jdcaseitem jditem-'+index
                                }
                                return (
                                    <Col key={item.get('id')} xs={towindexclass } sm={towindexclass} md={telindexclass} lg={telindexclass} xl={telindexclass} className={
                                        className_jd
                                    }>
                                        <Link to={'/Details/'+item.get('id')}>
                                            <img src={item.get('image')} alt="" className="imgresclass" />
                                            <p>
                                                <span className="floatLeft">{item.get('title')}</span>
                                                <span className='floatRight'>{item.get('style')}   {item.get('type')} </span>
                                            </p>
                                        </Link>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </JdcaseWrap>
        )
    }

    componentDidMount() {
        this.props.getjdcase();
    }
}

const mapState = (state) => {
    return {
        navlistcopy: state.getIn(['header', 'navlist', 2, 'innerdata']),
        jslist: state.getIn(['jdcase', 'jdcaselist'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        getjdcase() {
            dispatch(actionsCreators.getjdcaseCreators())
        },
        setlocoltion(index){
            function setlocalfunc(style,index){
                let getdataArr = {
                    offset: 1,
                    limit: 16,
                    style:style,
                    type: "",
                    begPrice: "",
                    endPrice: ""
            }
            sessionStorage.setItem("dataArr", JSON.stringify(getdataArr));
            sessionStorage.setItem("styleindex", index+1);
            sessionStorage.removeItem('typeindex')
            sessionStorage.removeItem('budgetindex')
            
            }

            switch(index){
                case 0:
                        setlocalfunc('现代简约',index);
                        
                        break;
                case 1:
                        setlocalfunc('中式',index)
                        break;
                case 2:
                        setlocalfunc('欧式',index)
                        break;

                case 3:
                        setlocalfunc('北欧',index)
                        break;

                case 4:
                        setlocalfunc('田园',index)
                        break;

                case 5:
                        setlocalfunc('混搭',index)
                        break;

                case 6:
                        setlocalfunc('新古典',index)
                        break;

                case 7:
                        setlocalfunc('其他',index)
                        break;
                default:
                    break;
            }
        }
    }
}

export default connect(mapState, mapDispathToProps)(Jdcase)