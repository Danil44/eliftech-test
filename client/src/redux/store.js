import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const reducers = combineReducers({});

const middleware = applyMiddleware(logger);

const store = createStore(reducers, composeWithDevTools(middleware));

export default store;
