import {combineReducers} from 'redux-immutable'
import {reducer as hedaderReducer} from '../common/header/store';
import {reducer as footerReducer} from '../common/footer/store';
import {reducer as JDcaseReducer} from '../page/content/Home/jdcase/store';
import {reducer as knowledge} from '../page/content/Home/Decorate_a_knowledge/store';
import {reducer as Brand_strength} from '../page/content/Brand_strength/server_banner/store';
import {reducer as Ticker_reducre} from '../page/content/Home/ticker/store';
import {reducer as Freeserver_reducre} from '../page/content/Free_service/store';

const reducer= combineReducers({
    header:hedaderReducer,
    footer:footerReducer,
    jdcase:JDcaseReducer,
    knowledgelist:knowledge,
    Brand_strength,
    Ticker_reducre,
    Freeserver_reducre
    
})
export default reducer;