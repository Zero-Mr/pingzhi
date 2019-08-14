import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    uservalue:"",
    telvalue:"",
    homevalue:"",
    alltel:""
})

export default (state = defaultState , action) => {

    switch(action.type){ 
        case actionTypes.BRAND_SETUSETVAL:
            return state.set('uservalue',fromJS(action.value))
        case actionTypes.BRAND_TELINPUTSET:
            return state.set('telvalue',fromJS(action.value)) 
        case actionTypes.BRAND_HOMESETVAL:
            return state.set('homevalue',fromJS(action.value))   
        case actionTypes.BRAND_resultdata:
            return state.merge({
                uservalue:"",
                telvalue:"",
                homevalue:"",
                alltel:state.get('alltel')+1
            }) 
        case actionTypes.BRAND_GETALLTELS:
            return state.set('alltel',fromJS(action.num))          
        default:
            return state
    }   


}