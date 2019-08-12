import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    knowledgeList:[
    ]
})

export default (state = defaultState , action) => {

    switch(action.type){ 
        case actionTypes.KNOW_START_GETDATA:
            return state.set('knowledgeList',fromJS(action.data))
        default:
            return state
    }   


}