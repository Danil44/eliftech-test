import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import postsReducer from './Posts/reducer';

const reducers = combineReducers({ posts: postsReducer });

const middleware = applyMiddleware(thunk, logger);

const store = createStore(reducers, composeWithDevTools(middleware));

export default store;
