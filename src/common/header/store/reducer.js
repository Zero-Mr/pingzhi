import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    navlist:[]
})

export default (state = defaultState , action) => {

    switch(action.type){
        case actionTypes.HEADER_GETLIST:
            return state.set('navlist',fromJS(action.data));
        default:
            return state
    }   


}