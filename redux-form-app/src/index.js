import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./App.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import rootSaga from './sagas/index';
import { configureStore, sagaMiddleware } from "./helpers/configureStore";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
sagaMiddleware.run(rootSaga);
//sagaMiddleware.run(rootSaga);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
