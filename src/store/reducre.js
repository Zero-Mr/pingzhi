import {combineReducers} from 'redux-immutable'
import {reducer as hedaderReducer} from '../common/header/store';
import {reducer as footerReducer} from '../common/footer/store';
import {reducer as JDcaseReducer} from '../page/content/Home/jdcase/store';

const reducer= combineReducers({
    header:hedaderReducer,
    footer:footerReducer,
    jdcase:JDcaseReducer
})
export default reducer;