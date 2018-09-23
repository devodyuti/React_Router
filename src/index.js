import 'babel-polyfill';
import App from './App.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import {createStore,applyMiddleware} from'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer'
//import thunk from 'redux-thunk';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//const loggerMiddleware = createLogger();
const middleWare = applyMiddleware(thunk,logger);
 const store  = createStore(rootReducer,{},middleWare);
ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('Root'));
