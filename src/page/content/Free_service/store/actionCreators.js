import * as actionTypes from './actionTypes'


const setFreetextAction = (text) => ({
    type:actionTypes.FREESERVERSETBTNTEXT,
    text
})

export const setFreetext = (text) => (dispatch) => {
    dispatch(setFreetextAction(text))
}