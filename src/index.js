import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import rootUsersReducer from './reducers';
import promiseMW  from "redux-promise";

const root = ReactDOM.createRoot(document.getElementById('root'));
let createStoreWithMiddleWare = applyMiddleware(promiseMW)(createStore);
root.render(
  <Provider store={createStoreWithMiddleWare(rootUsersReducer)}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
