import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({

})

export default (state = defaultState , action) => {

    switch(action.type){ 
        case actionTypes.FREESERVERSETBTNTEXT:
            return state
        default:
            return state
    }   


}