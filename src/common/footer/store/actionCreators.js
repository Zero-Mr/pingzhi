import * as actionTypes from './actionTypes'
import axios from 'axios'
import apidata from '../../../apiData.json'

const getFooterListAction =(data)=>({
    type:actionTypes.FOOTER_GETLIST,
    data
})


export const getFooterListCreators =() =>{
    return(dispatch)=>{
        axios.get(`${apidata.data[1].footerlist}`).then((res)=>{
            let data=res.data
            dispatch(getFooterListAction(data))
        }).then((error)=>{
            // console.log(error)
        })
    }
}