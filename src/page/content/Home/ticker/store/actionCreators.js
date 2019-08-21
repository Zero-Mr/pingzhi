import * as actionTypes from './actionTypes'
import axios from 'axios'
import apiList from '@src/apiData.json'

const getalltelAction = (value)=>({
    type:actionTypes.TICKER_SETUSETVAL,
    value
})

const successteladdAction = () =>({
    type:actionTypes.TICKER_SUCCESSADD
})

export const getalltelnumCreators = (value) => (dispatch) => {
      axios.get(apiList.data[6].alltelnum).then((res)=>{
        value=res.data;
        dispatch(getalltelAction(value))
      })
}


export const successteladdCreators = () => (dispatch) => {
    dispatch(successteladdAction())
}