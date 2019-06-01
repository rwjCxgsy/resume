import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers/index'
import {createStore, applyMiddleware} from "redux"
import logger from 'redux-logger'
import {Provider} from 'react-redux';
import App from './App'

const Store = createStore(reducers, {}, applyMiddleware(logger))

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();