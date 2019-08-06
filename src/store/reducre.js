import {combineReducers} from 'redux-immutable'
import {reducer as hedaderReducer} from '../common/header/store';

const reducer= combineReducers({
    header:hedaderReducer,
})
export default reducer;