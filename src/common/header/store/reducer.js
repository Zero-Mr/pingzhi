import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    navlist:[],
    navshow:false
})

export default (state = defaultState , action) => {

    switch(action.type){
        case actionTypes.HEADER_GETLIST:
            return state.set('navlist',fromJS(action.data));
        case actionTypes.HEADER_CHANGEDNAV:
            return state.set('navshow',action.blomes)
        case actionTypes.HEADER_SETNAVCLASS:
            return state.set('navlist',fromJS(action.jsnavlist))
        case actionTypes.HEADER_NAVTOWCLICK:
            return state.set('navlist',fromJS(action.jsnavlist))
        default:
            return state
    }   


}