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
        } = this.props;

        

        return (
            <JdcaseWrap className="JdcaseWrap">
                <h1 className="jdtitle">经典案例</h1>
                <div className="jdinnerWrap">
                    <ul>
                        {
                            navlistcopy && navlistcopy.map((item, index) => (
                                <li key={index}>{ item.get('title') }</li>
                            ))
                        }
                    </ul>
                    <Row className="jdcaseWrap">
                        {
                            jslist.map((item,index) => {
                                let telindexclass = index == 1 ? 8 : 7;
                                let towindexclass = index == 4 ? 24 : 11;
                                let className_jd = `jcdcaseitem jditem-${index}`;

                                return (
                                    <Col key={item.get('id')} xs={towindexclass } sm={towindexclass} md={telindexclass} lg={telindexclass} xl={telindexclass} className={
                                        className_jd
                                    }>
                                        <Link to="/">
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
        }
    }
}

export default connect(mapState, mapDispathToProps)(Jdcase)