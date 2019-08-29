import * as actionTypes from './actionTypes'
import axios from 'axios'
import apiList from '@src/apiData.json'

const setStatusAction = (id, option, nowAddress, statusindx, JSafter, JSbefore, JSin, JSquestion) => ({
    type: actionTypes.PROESS_SETSTATUS,
    id,
    option,
    nowAddress,
    statusindx,
    JSafter,
    JSbefore,
    JSin,
    JSquestion
})

const changepageAction = (page) => ({
    type: actionTypes.PROESS_CHANGEPAGE,
    page
})
const setArrDataAction = (data, total) => ({
    type: actionTypes.PROESS_SETARRDATA,
    data,
    total
})
const ChangepageDataAction = (data, page) => ({
    type: actionTypes.PROESS_CHANGEPAGEDATA,
    data,
    page
})
const changeselectAction = (beforedata, indata, afterdata, questiondata) => ({
    type: actionTypes.PROESS_CHANGESELECT,
    beforedata,
    indata,
    afterdata,
    questiondata
})

const NavClickOneAction = (axiosarr, allnum, urlID,arr1,arr2,arr3,arr4) => ({
    type: actionTypes.PROESS_NavClickOneAction,
    axiosarr, allnum, urlID,arr1,arr2,arr3,arr4
})


function axiosfunc(categorystr, dispatch, urlIDstr,arr1,arr2,arr3,arr4) {
    axios.get(apiList.data[4].knowledge, {
        params: {
            limit: 6,
            offset: 1,
            category: categorystr

        }
    }).then((res) => {
        let axiosarr = res.data.list;
        let allnum = res.data.total / 6 * 10;
        let urlID = urlIDstr;
        dispatch(NavClickOneAction(axiosarr, allnum, urlID,arr1,arr2,arr3,arr4))
    }).catch((error)=>{
        console.log(error)
    })
}


export const setStatusCreators = (id, option, nowAddress, statusindx, JSafter, JSbefore, JSin, JSquestion) => (dispatch) => {
    dispatch(setStatusAction(id, option, nowAddress, statusindx, JSafter, JSbefore, JSin, JSquestion))
}

export const changepageCreators = (page) => (dispatch) => {
    dispatch(changepageAction(page))
}
export const setArrDataCreators = (data, total) => (dispatch) => {
    dispatch(setArrDataAction(data, total))
}
export const changesehect = (beforedata, indata, afterdata, questiondata) => (dispatch) => {
    dispatch(changeselectAction(beforedata, indata, afterdata, questiondata))
}
export const ChangepageDataCreators = (data, page) => (dispatch) => {
    dispatch(ChangepageDataAction(data, page))
}

export const Navtypesof = (index,arr1,arr2,arr3,arr4) => (dispatch) => {
    switch (index) {
        case 0:
            axiosfunc('pz_proble', dispatch, '001',arr1,arr2,arr3,arr4)
            break;
        case 1:
            axios.get(apiList.data[4].knowledge, {
                params: {
                    limit: 6,
                    offset: 1,
                    type: 2

                }
            }).then((res) => {
                let axiosarr = res.data.list;
                let allnum = res.data.total / 6 * 10;
                let urlID = '00';
                dispatch(NavClickOneAction(axiosarr, allnum, urlID,arr1,arr2,arr3,arr4))
            }).catch((error)=>{
                console.log(error)
            })
            break;
        case 2:
            axiosfunc('dc_question', dispatch, '001',arr1,arr2,arr3,arr4)
            break;
        case 3:
            axiosfunc('q_sf', dispatch, '00',arr1,arr2,arr3,arr4)
            break;
        case 4:
            axiosfunc('z_cg', dispatch, '00',arr1,arr2,arr3,arr4)
            break;
        case 5:
            axiosfunc('h_rzh', dispatch, '00',arr1,arr2,arr3,arr4)
            break;
        default:
            break;
    }
}
