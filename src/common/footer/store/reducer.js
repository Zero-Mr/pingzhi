import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    footerdata:[],
    tel:[]
})

export default (state = defaultState , action) => {

    switch(action.type){
        case actionTypes.FOOTER_GETLIST:
            return state.merge({
                footerdata:fromJS(action.data.data),
                tel:fromJS(action.data.tel)
            })
        default:
            return state
    }   


}