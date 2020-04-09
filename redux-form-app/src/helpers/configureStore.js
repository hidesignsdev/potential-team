import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "../reducers";

import createSagaMiddleware from "redux-saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const sagaMiddleware = createSagaMiddleware();
export const configureStore = () => {
    let store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
    return store;
}