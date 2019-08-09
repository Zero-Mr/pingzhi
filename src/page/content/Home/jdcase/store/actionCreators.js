import * as actionTypes from './actionTypes'
import axios from 'axios'
import apidata from '../../../../../apiData.json'

const getjdcaseAction = (data)=>({
    type:actionTypes.JDCASEGETDATA,
    data
})
export const getjdcaseCreators = ()=>{
    return (dispatch)=>{
        axios.get(apidata.data[3].jscase,{
            params:{ 
                target: "index",
                limit: 5
             }
        }).then((res)=>{
            let data = res.data.list
            dispatch(getjdcaseAction(data))
        }).catch((error)=>{
            console.log(error)
        })
    }
}
