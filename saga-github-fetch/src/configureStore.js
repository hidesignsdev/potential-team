import {createStore, applyMiddleware} from 'redux';
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();
export const configureStore = () =>{
    let store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
    return store;
}
