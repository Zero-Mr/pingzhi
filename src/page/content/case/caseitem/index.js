import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {
    CaseItemWrap
} from './style'
import {
    Row, Col, Pagination
} from 'antd'
import { actionsCreators } from '../selectcase/store'



class CaseItem extends PureComponent {

    render() {
        const { total, current, itemlist } = this.props
        return (
            <CaseItemWrap>
                <div className="itemwrap">
                    <Row gutter={16}>
                        {
                            itemlist.map((item, index) => {
                                return (
                                    <Col key={index} className="gutter-row" xs={12} sm={6} md={6} lg={6} className="item">
                                        <div>
                                            <Link to={ "/Details/" + item.get('id') }>
                                                <img src={item.get("image")} alt="" className="imgres" />
                                                <h3>
                                                    {item.get("title")}
                                                </h3>
                                                <p>
                                                    <span className="floatLeft">{item.get('style')} { item.get('area') ? item.get('area')+"㎡" : "" } </span>
                                                    <span className="floatRight">{item.get("type")}</span>
                                                </p>
                                            </Link>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Pagination className="text-center" current={current} onChange={(page) => this.props.onChange(page,this)} total={total} />
                </div>

            </CaseItemWrap>
        )
    }
}

const mapState = (state) => {
    return {
        current: state.getIn(['ItemSelect', 'current']),
        total: state.getIn(['ItemSelect', 'total']),
        itemlist: state.getIn(['ItemSelect', 'itemlist']),
        stylestring: state.getIn(['ItemSelect', 'style']),
        typetring: state.getIn(['ItemSelect', 'type']),
        begPrice: state.getIn(['ItemSelect', 'begPrice'])
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        onChange(page,thiss){
            const { stylestring,typetring,begPrice,endPrice } = thiss.props;
            dispatch(actionsCreators.onChangeCreators(page,stylestring,typetring,begPrice,endPrice))
         }
    }
}  

export default connect(mapState, mapDispathToProps)(CaseItem)