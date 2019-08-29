import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    SearchWrap
} from './style'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiList from '@src/apiData.json'
import { Breadcrumb, Pagination, Card,Row,Col } from 'antd';
class Search extends PureComponent {


    constructor(props) {
        super(props)
        this.state = {
            list: [],
            total: 0,
            text: '',
            current:1,
            pagetotal:0
        }
        this.pagechange = this.pagechange.bind(this)
    }

    render() {
        const { list, total, text,pagetotal,current} = this.state;
        return (
            <SearchWrap>
                <div className="content">
                    <Breadcrumb>
                        <Breadcrumb.Item>当前位置</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to="/">首页</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            搜索装修案例
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="seach-result">
                        当前搜索“<span>{text}</span>”，共找到 <span>{total}</span> 个装修案例。 <Link to="/Decorate-a-case/00">返回浏览全部案例</Link>
                    </div>

                    <div className="seach-itemb-box">
                        <Row gutter={16}>
                            {
                                list.map((item,index) => {
                                    return (
                                        <Col key={index} xs={12} sm={6} md={6} lg={6} className="item">
                                            <Card
                                                hoverable
                                                cover={<img alt="" src={item.image} className="imgres" />}
                                            >
                                                <h1>{item.title}</h1>
                                                <div>
                                                     <span className="floatLeft"> {item.style+ ' ' + item.area + '㎡' }</span>        <span className="floatRight">{item.type}</span>
                                                </div>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }

                        </Row>
                        
                    </div>
                    <Pagination onChange={ (page) =>this.pagechange(page) } className="text-center" current={current}  total={pagetotal} />
                </div>
            </SearchWrap>
        )
    }

    componentDidMount() {
        let text = this.props.match.params.text;
        let thiss = this;
        axios.get(apiList.data[13].search, {
            params: {
                filter: text,
                offset: 1,
                limit: 16
            }
        }).then((res) => {
            let list = res.data.list;
            let total = res.data.total;
            let pagetotal = Math.ceil(res.data.total/16*10)
            thiss.setState({
                list,
                total,
                text,
                pagetotal
            })
        document.title= this.state.text+"的搜索结果"
        }).catch((error)=>{
            console.log(error)
        })
    }

    pagechange(page){
        let thiss = this;
        let text = thiss.state.text;

        axios.get(apiList.data[13].search, {
            params: {
                filter: text,
                offset: page,
                limit: 16
            }
        }).then((res) => {
            let list = res.data.list;
            let total = res.data.total;
            let pagetotal = Math.ceil(res.data.total/16*10)
            thiss.setState({
                list,
                total,
                text,
                pagetotal,
                current:page
            })
        }).catch((error)=>{
            console.log(error)
        })
    }
}


export default connect(null, null)(Search)