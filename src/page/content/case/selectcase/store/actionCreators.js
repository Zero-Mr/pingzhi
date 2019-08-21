import * as actionTypes from './actionTypes'
import apiList from "@src/apiData.json"
import axios from 'axios'

const tyleclickAction = (value,newlist)=>({
    type:actionTypes.ITEMSELECT_STYLE,
    value,
    newlist
})
const typeClickAction = (value)=>({
    type:actionTypes.ITEMSELECT_TYPE,
    value 
})
const budgetClickAction = (begPrice,endPrice)=>({
    type:actionTypes.ITEMSELECT_PRICE,
    begPrice,
    endPrice
})
const opengetdataAction = (allnum,itemlist)=>({
    type:actionTypes.ITEMSELECT_OPENGETDATA,
    allnum,
    itemlist
})
const onChangeAction = (page,itemlist,allnum)=>({
    type:actionTypes.ITEMSELECT_CHANGEPAGE,
    page,
    itemlist,
    allnum
})

const selectopcitonAction = (data,allnum)=>({
    type:actionTypes.ITEMSELECT_SELECTOPCITON,
    data,
    allnum
})

const openreststyleCreatorsAction = (data)=>({
    type:actionTypes.OPENRESTSTYLEACTION,
    data
})


const openstyleclassAction = (data)=>({
    type:actionTypes.ITEMSELECT_OPENSETSTYLECLASS,
    data
})


const headerNavClickAcion = (data,allnum,navlist) =>({
    type:actionTypes.ITEMSELECT_HEADERNAVCLICK,
    data,
    allnum,
    navlist
})

function selectopcitonfunc(style,begPrice,endPrice,type,dispatch){
    axios.get(apiList.data[10].caselist,{
        params: {
            offset: 1,
            limit: 16,
            style,
            begPrice,
            endPrice,
            type
        }
    }).then((res)=>{
        let data = res.data.list;
        let allnum = res.data.total/16*10
        if(allnum<=0.1 && allnum>=0.9){
            allnum=1
        }
        dispatch(selectopcitonAction(data,allnum))
            let getdataArr = {
                offset: 1,
                limit: 16,
                style,
                type,
                begPrice,
                endPrice
            }
            sessionStorage.setItem("dataArr",JSON.stringify(getdataArr));
    })
}


export const openreststyleCreators = (data) => (dispatch) => {
    dispatch(openreststyleCreatorsAction(data))
}

export const styleclickCreators = (value,newlist,typestring,begPrice,endPrice) => (dispatch) => {
    dispatch(tyleclickAction(value,newlist))
    selectopcitonfunc(value,begPrice,endPrice,typestring,dispatch)
}
export const openstyleclassCreators = (data) => (dispatch) => {
    dispatch(openstyleclassAction(data))
}


export const typeClickCreators = (value,stylestring,begPrice,endPrice) => (dispatch) => {
    dispatch(typeClickAction(value))
    selectopcitonfunc(stylestring,begPrice,endPrice,value,dispatch)
}
export const budgetClickCreators = (begPrice,endPrice,stylestring,typestring) => (dispatch) => {
    dispatch(budgetClickAction(begPrice,endPrice))
    selectopcitonfunc(stylestring,begPrice,endPrice,typestring,dispatch)
}
export const opengetdataCreators = (allnum,itemlist) => (dispatch) => {
    dispatch(opengetdataAction(allnum,itemlist))
}


export const onChangeCreators = (page,stylestring,typetring,begPrice,endPrice) => (dispatch) => {
    axios.get(apiList.data[10].caselist, {
                params: {
                    offset: page,
                    limit: 16,
                    type:typetring,
                    style:stylestring,
                    begPrice,
                    endPrice
                }
            }).then((res) => {
                let itemlist = res.data.list;
                let allnum = res.data.total/16*10;
                dispatch( onChangeAction(page,itemlist,allnum))
            }).catch((error) => {
                console.log(error)
            })
}

export const headerInnerNavClickCreatore =(index,title,caselist) =>(dispatch) =>{
        let navlist = caselist.toJS();
        let classindex = index+1;
        for(let i=0;i<navlist.length;i++){
            if(i==classindex){
                navlist[i].status=true
            }else{
                navlist[i].status=false
            }
        }
        axios.get(apiList.data[10].caselist, {
            params: {
                offset: 1,
                limit: 16,
                style:title
            }
        }).then((res) => {
            let itemlist = res.data.list;
            let allnum = res.data.total/16*10;
            dispatch( headerNavClickAcion(itemlist,allnum,navlist))
        }).catch((error) => {
            console.log(error)
        })
}