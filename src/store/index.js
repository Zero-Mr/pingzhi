import {createStore , compose ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducre from './reducre';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducre,composeEnhancers(
    applyMiddleware(thunk)
));

export default store;