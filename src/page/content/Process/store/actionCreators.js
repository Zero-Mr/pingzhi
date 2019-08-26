import * as actionTypes from './actionTypes'


const setStatusAction = (id,option,nowAddress,statusindx,JSafter,JSbefore,JSin,JSquestion) => ({
    type:actionTypes.PROESS_SETSTATUS,
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
    type:actionTypes.PROESS_CHANGEPAGE,
    page
})
const setArrDataAction = (data,total) => ({
    type:actionTypes.PROESS_SETARRDATA,
    data,
    total
})
const ChangepageDataAction = (data,page) => ({
    type:actionTypes.PROESS_CHANGEPAGEDATA,
    data,
    page
})
const changeselectAction = (beforedata,indata,afterdata,questiondata) => ({
    type:actionTypes.PROESS_CHANGESELECT,
    beforedata,
    indata,
    afterdata,
    questiondata
})

const NavClickOneAction = () =>({
    type:actionTypes.PROESS_NavClickOneAction,
})
const NavClickTwoAction = () =>({
    type:actionTypes.PROESS_NavClickTwoAction,
})


export const setStatusCreators = (id,option,nowAddress,statusindx,JSafter,JSbefore,JSin,JSquestion) => (dispatch) => {
    dispatch(setStatusAction(id,option,nowAddress,statusindx,JSafter,JSbefore,JSin,JSquestion))
}

export const changepageCreators = (page) => (dispatch) => {
    dispatch(changepageAction(page))
}
export const setArrDataCreators = (data,total) => (dispatch) => {
    dispatch(setArrDataAction(data,total))
}
export const changesehect = (beforedata,indata,afterdata,questiondata) => (dispatch) => {
    dispatch(changeselectAction(beforedata,indata,afterdata,questiondata))
}
export const ChangepageDataCreators = (data,page) => (dispatch) => {
    dispatch(ChangepageDataAction(data,page))
}

export const Navtypesof = (index) => (dispatch) => {
    switch(index){
        case 0:
            dispatch(NavClickOneAction())
            break;
        case 1:
            dispatch(NavClickTwoAction())  
        default:
            break;
    }
}
