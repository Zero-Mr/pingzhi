import React, { Component } from 'react';
import {
    CaseSelectWrap
} from './style'
import { connect } from 'react-redux';
import casebg from '@src/statics/index/cases_banner.png'
import {Icon,Tag } from 'antd'
import { actionsCreators } from './store'
import axios from 'axios'
import apiList from "@src/apiData.json"

class CaseSelect extends Component {

    constructor(props){
        super(props)
        this.state = {
            type:[
                {"type":"全部","status":false},
                {"type":"平层","status":false},
                {"type":"复式","status":false},
                {"type":"别墅","status":false},
                {"type":"公装","status":false}
            ],
            budget:[
                {"num":"全部","begPrice":"","endPrice":"","status":false},
                {"num":"10-20万","begPrice":"10","endPrice":"20","status":false},
                {"num":"20-30万","begPrice":"20","endPrice":"30","status":false},
                {"num":"50万以上","begPrice":"50","endPrice":"","status":false},
            ]
        }
    }

    render() {
        const {  type , budget } = this.state;
        const { styleList ,stylestring,typestring,begPrice,endPrice } = this.props;
        return (
            <CaseSelectWrap>
               <div className="casebg">
                    <img src={casebg} alt="" className="imgres"/>
                    <div className="domselect">
                        <div className="jdcase">
                            <Icon type="hdd" className="jdcaseicon"/>
                            经典案例
                        </div>
                    </div>
               </div>
               <div className="case-select">
                    <div className="case-select-item">
                        <ul className="list-inline">
                        <Tag color="#108ee9">风格</Tag>
                             { styleList && styleList.map((item,index)=>{
                                 return (
                                     <li 
                                        className={ item.get('status') ? "active" : "" } 
                                        key={index} 
                                        onClick={ (dom) => this.props.styleclick(index, dom, styleList,typestring,begPrice,endPrice) }
                                        >
                                            {item.get('style')}
                                     </li>
                                 )
                             }) }
                        </ul>

                        <ul className="list-inline">
                            <Tag color="#108ee9">户型</Tag>
                            {
                                type.map((item,index) => {
                                    return (
                                        <li onClick={ (e) => this.props.typeClick(index,e,type,this,stylestring,begPrice,endPrice) } className={item.status ? "active" : ""} key={index}>
                                            {item.type}
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <ul className="list-inline">
                            <Tag color="#108ee9">预算</Tag>
                            {
                                budget.map( (item,index) =>{
                                    return (
                                        <li onClick={ () => this.props.budgetClick(index,budget,this,stylestring,typestring) } className={item.status ? "active" : ""}  key={index}>{item.num}</li>
                                    )
                                } )
                            }
                        </ul>
                    </div>
               </div>
            </CaseSelectWrap>
        )
    }

    componentDidMount() {
        this.props.opengetdata(this.props.styleList,this,this.state.type,this.state.budget);
        let thiss = this
        setTimeout(function(){
            let styleindex = sessionStorage.getItem("styleindex");
            let typeindex = sessionStorage.getItem("typeindex");
            let budgetindex = sessionStorage.getItem("budgetindex");
            if(styleindex=='null'){
                let newstyle= thiss.props.styleList.toJS()
                for(let i=0;i<newstyle.length;i++){
                    newstyle[i].status = false
                }
                thiss.props.openreststyle(newstyle)
            }

            if(typeindex=='null'){
                let newtype= thiss.state.type
                for(let i=0;i<newtype.length;i++){
                    newtype[i].status = false
                }
                thiss.setState({
                    type:newtype
                })
            }
            
            if(budgetindex=='null'){
                let newbudget= thiss.state.budget
                for(let i=0;i<newbudget.length;i++){
                    newbudget[i].status = false
                }
                thiss.setState({
                    budget:newbudget
                })
            }
        },50)
    
    }

}

const mapState = (state) => {
    return {
        stylestring: state.getIn(['ItemSelect', 'style']),
        typestring: state.getIn(['ItemSelect', 'type']),
        begPrice: state.getIn(['ItemSelect', 'begPrice']),
        endPrice: state.getIn(['ItemSelect', 'endPrice']),
        styleList: state.getIn(['ItemSelect', 'styleList'])
    }
}


const mapDispathToProps = (dispatch) => {
    return {

        setdata(index,data,thiss){
            let newList = data;
            for(let i =0;i<newList.length;i++){
                if(i==index){
                    newList[i].status = true
                }else{
                    newList[i].status = false
                }
            }
            thiss.setState({
                data:newList
            })
        },
        openreststyle(data){
            dispatch(actionsCreators.openreststyleCreators(data))
        },
        opengetdata(styleList,thiss,typedata,budgetdata){

            let str = sessionStorage.getItem("dataArr");
            let obj = JSON.parse(str);
            let styleindex = sessionStorage.getItem("styleindex");
            let typeindex = sessionStorage.getItem("typeindex");
            let budgetindex = sessionStorage.getItem("budgetindex");
            let styleListJS = styleList.toJS();

            if(styleindex!="null"){
                for(let i = 0 ;i<styleListJS.length;i++){
                    if(i==styleindex){
                        styleListJS[i].status = true
                    }else{
                        styleListJS[i].status = false
                    }
                }
                dispatch(actionsCreators.openstyleclassCreators(styleListJS))
            }

            if(typeindex!="null"){
                for(let i = 0 ;i<typedata.length;i++){
                    if(i==typeindex){
                        typedata[i].status = true
                    }else{
                        typedata[i].status = false
                    }
                }
                thiss.setState({
                    type:typedata
                })
            }
            if(budgetindex!="null"){
                for(let i = 0 ;i<budgetdata.length;i++){
                    if(i==budgetindex){
                        budgetdata[i].status = true
                    }else{
                        budgetdata[i].status = false
                    }
                }
                thiss.setState({
                    budget:budgetdata
                })
            }

            if(obj==null){
                axios.get(apiList.data[10].caselist, {
                    params: {
                        offset: 1,
                        limit: 16
                    }
                }).then((res) => {
                    let allnum =Math.ceil( res.data.total / 16 * 10 );
                    let itemlist = res.data.list;
                    dispatch(actionsCreators.opengetdataCreators(allnum,itemlist))
                }).catch((error) => {
                    console.log(error)
                })
            }else{
                axios.get(apiList.data[10].caselist, {
                    params: {
                        offset: obj.offset,
                        limit: obj.limit,
                        style: obj.style,
                        type: obj.type,
                        begPrice: obj.begPrice,
                        endPrice: obj.endPrice
                    }
                }).then((res) => {

                    let allnum = Math.ceil(res.data.total / 16 * 10);
                    let itemlist = res.data.list;
                    dispatch(actionsCreators.opengetdataCreators(allnum,itemlist))

                }).catch((error) => {
                    console.log(error)

                })
            }
        },


        styleclick(index, clickdom, data,typestring,begPrice,endPrice){
            let newlist = data.toJS();
            for(let i =0;i<newlist.length;i++){
                if(i==index){
                    newlist[i].status = true
                }else{
                    newlist[i].status = false
                }
            }
            let style =clickdom.target.innerText;
            dispatch(actionsCreators.styleclickCreators(style,newlist,typestring,begPrice,endPrice))
            sessionStorage.setItem("styleindex",index);
         },

         typeClick(index,e,data,thiss,stylestring,begPrice,endPrice){
            this.setdata(index,data,thiss)
            let typetext = e.target.innerText;
            dispatch(actionsCreators.typeClickCreators(typetext,stylestring,begPrice,endPrice))
            sessionStorage.setItem("typeindex",index);
         },

         budgetClick(index,data,thiss,stylestring,typestring){
            this.setdata(index,data,thiss)
            let begPrice = data[index].begPrice;
            let endPrice = data[index].endPrice;
            dispatch(actionsCreators.budgetClickCreators(begPrice,endPrice,stylestring,typestring))
            sessionStorage.setItem("budgetindex",index);
         }

    }
}  

export default connect(mapState, mapDispathToProps)(CaseSelect)