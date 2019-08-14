import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    alltel:"",
})

export default (state = defaultState , action) => {

    switch(action.type){ 
        case actionTypes.TICKER_SETUSETVAL:
            return state.set('alltel',fromJS(action.value))  
        case actionTypes.TICKER_SUCCESSADD:
            return state.set('alltel',state.get('alltel')+1)        
        default:
            return state
    }   


}