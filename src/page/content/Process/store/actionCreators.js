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

export const setStatusCreators = (id,option,nowAddress,statusindx,JSafter,JSbefore,JSin,JSquestion) => (dispatch) => {
    dispatch(setStatusAction(id,option,nowAddress,statusindx,JSafter,JSbefore,JSin,JSquestion))
}