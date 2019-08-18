import * as actionTypes from './actionTypes'


const UserinputBlurAction = (value)=>({
    type:actionTypes.BRAND_SETUSETVAL,
    value 
})

const TelinputBlurAction = (value)=>({
    type:actionTypes.BRAND_TELINPUTSET,
    value 
})

const UserhomesetvalAction = (value) => ({
    type:actionTypes.BRAND_HOMESETVAL,
    value 
})

const resultuserdataAction = () => ({
    type:actionTypes.BRAND_resultdata
})

const getallnumAction = (num) => ({
    type:actionTypes.BRAND_GETALLTELS,
    num
})

const setfreebtntextAction = () => ({
    type:actionTypes.BRAND_SETBTNTEXT
})

export const UserinputBlurCreators = (value) => (dispatch) => {
    dispatch(UserinputBlurAction(value))
}

export const TelinputBlurCreators = (value) => (dispatch) => {
    dispatch(TelinputBlurAction(value))
}

export const UserhomesetvalCreators = (value) => (dispatch) =>{
    dispatch(UserhomesetvalAction(value))
}
export const resultuserdataCreators =() => (dispatch) => {
    dispatch(resultuserdataAction())
}

export const getallnumCreators = (num) =>(dispatch) => {
    dispatch(getallnumAction(num))
}

export const setfreebtntextCreators =() => (dispatch) => {
    dispatch(setfreebtntextAction())
}