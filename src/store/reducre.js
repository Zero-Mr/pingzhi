import {combineReducers} from 'redux-immutable'
import {reducer as hedaderReducer} from '../common/header/store';
import {reducer as footerReducer} from '../common/footer/store';
import {reducer as JDcaseReducer} from '../page/content/Home/jdcase/store';
import {reducer as knowledge} from '../page/content/Home/Decorate_a_knowledge/store';

const reducer= combineReducers({
    header:hedaderReducer,
    footer:footerReducer,
    jdcase:JDcaseReducer,
    knowledgelist:knowledge
})
export default reducer;