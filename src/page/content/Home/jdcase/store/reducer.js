import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    jdcaselist:[]
})

export default (state = defaultState , action) => {

    switch(action.type){ 
        case actionTypes.JDCASEGETDATA:
            return state.set('jdcaselist',fromJS(action.data))
        default:
            return state
    }   


}