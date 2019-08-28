import * as actionTypes from './actionTypes'
import axios from 'axios'
import apidata from '../../../apiData.json'

const getNavListCreatorsAction = (data) =>({
    type:actionTypes.HEADER_GETLIST,
    data
})

const setNavShowCreatorsAction = (blomes) =>({
    type:actionTypes.HEADER_CHANGEDNAV,
    blomes
})

const setNavClassAction = (jsnavlist) => ({
    type:actionTypes.HEADER_SETNAVCLASS,
    jsnavlist
})

const navInnerClickAction = (jsnavlist) =>({
    type:actionTypes.HEADER_NAVTOWCLICK,
    jsnavlist
})

export const getNavListCreators = ()=>{
    return(dispatch) =>{
        axios.get(`${apidata.data[0].navlist}`).then((res)=>{
            let data = res.data.data;
            dispatch(getNavListCreatorsAction(data))
        }).catch((error)=>{
            console.log(error)
        })
    }
}

export const setNavShowCreators = (blomes) =>{
    return (dispatch) =>{
        dispatch(setNavShowCreatorsAction(blomes))
    }
}

export const setNavClassCreators = (jsnavlist) =>{
    return (dispatch) =>{
        dispatch(setNavClassAction(jsnavlist))
    }
}

export const navInnerClickCreators = (jsnavlist) =>{
    return (dispatch) =>{
        dispatch(navInnerClickAction(jsnavlist))
    }
}
