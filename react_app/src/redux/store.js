import { applyMiddleware, combineReducers, createStore } from 'redux';
import userReducer from './userReducer'
import { middlewareFunctions } from './middlewares';

const reducer = combineReducers({ userReducer });

const store = createStore(reducer , applyMiddleware(middlewareFunctions));
// store.dispatch(getEpisodesBySeasons())
window.store = store;
export default store;