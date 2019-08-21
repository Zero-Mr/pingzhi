import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    type:"",
    style:"",
    begPrice:"",
    endPrice:"",
    current: 1,
    total: 0,
    itemlist: [],
    styleList:[
        {"style":"全部","status":false},
        {"style":"现代简约","status":false},
        {"style":"中式","status":false},
        {"style":"欧式","status":false},
        {"style":"北欧","status":false},
        {"style":"田园","status":false},
        {"style":"混搭","status":false},
        {"style":"新古典","status":false},
        {"style":"其他","status":false}
        ] 
    
})

export default (state = defaultState , action) => {

    switch(action.type){ 
        case actionTypes.ITEMSELECT_STYLE:
             return state.merge({
                style:fromJS(action.value),
                styleList:fromJS(action.newlist)
            })   
        case actionTypes.ITEMSELECT_TYPE:
            return state.set('type',fromJS(action.value))  
        case actionTypes.ITEMSELECT_PRICE:
            return state.merge({
                begPrice:fromJS(action.begPrice),
                endPrice:fromJS(action.endPrice)
            })   
        case actionTypes.ITEMSELECT_OPENGETDATA:
            return state.merge({
                total:fromJS(action.allnum),
                itemlist:fromJS(action.itemlist)
            })  
        case actionTypes.ITEMSELECT_CHANGEPAGE:
            return state.merge({
                current:action.page,
                itemlist:fromJS(action.itemlist),
                total:fromJS(action.allnum)
            }) 
        case actionTypes.ITEMSELECT_SELECTOPCITON:
            return state.merge({
                itemlist:fromJS(action.data),
                total:fromJS(action.allnum),
                current:1
            })    
        case actionTypes.ITEMSELECT_HEADERNAVCLICK:
            return state.merge({
                itemlist:fromJS(action.data),
                total:fromJS(action.allnum),
                styleList:fromJS(action.navlist),
                current:1
            })  
        case actionTypes.ITEMSELECT_OPENSETSTYLECLASS:
            return state.set('styleList',fromJS(action.data))   
        case actionTypes.OPENRESTSTYLEACTION:
            return state.set('styleList',fromJS(action.data))   
                        
        default:
            return state
    }   


}