import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import { List, Row, Col } from 'antd';
import { KnowledgeWrap } from './style';
import { connect } from 'react-redux';
import { actionsCreators } from './store'


class Knowledge extends PureComponent {
    render() {
        return (
            <KnowledgeWrap>
                <Row className="KnowledgeWrap-inner">
                <h1>装修知识</h1>
                    {
                        this.props.knowledgeData.map((item,index)=>{
                            return(
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} key={index}>
                                    <List
                                        className="strategy_list"
                                        size="small"
                                        header={<div>{item.get('strategy_title')}</div>}
                                        bordered
                                        dataSource={item.get('data')}
                                        renderItem={item => <List.Item><Link to={'/Question-and-answer/'+item.get('id')}>{item.get('title')}<span className="floatRight">{item.get('time')}</span></Link></List.Item>}
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>

            </KnowledgeWrap>
        )
    }
    componentDidMount(){
        this.props.getknowledgelist();
    }
}
const mapState = (state) => {
    return {
        knowledgeData: state.getIn(['knowledgelist', 'knowledgeList'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        getknowledgelist(){
            dispatch(actionsCreators.knowledgeCreators())
        }
    }
}

export default connect(mapState, mapDispathToProps)(Knowledge)
