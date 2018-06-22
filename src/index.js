import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './Reducers/index';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(appReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));