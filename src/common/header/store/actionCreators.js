import * as actionTypes from './actionTypes'
import axios from 'axios'

const getNavListCreatorsAction = (data) =>({
    type:actionTypes.HEADER_GETLIST,
    data
})

export const getNavListCreators = ()=>{
    return(dispatch) =>{
        axios.get('/api/navlist.json').then((res)=>{
            console.log(res)
            let data = res.data.data;
            dispatch(getNavListCreatorsAction(data))
        }).catch((error)=>{
            console.log(error)
        })
    }
}