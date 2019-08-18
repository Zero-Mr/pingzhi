import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    uservalue:"",
    telvalue:"",
    homevalue:"",
    alltel:"",
    freebtn:"免费预约"
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
        case actionTypes.BRAND_SETBTNTEXT:
            return state.set('freebtn','免费预约')          
        default:
            return state
    }   


}