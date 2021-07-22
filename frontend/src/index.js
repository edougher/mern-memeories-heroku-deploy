import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'

import App from './App';
import './index.css'

const middlewareEnhancer = compose(applyMiddleware(thunk),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducers, compose(applyMiddleware(thunk)), window.devToolsExtension ? window.devToolsExtension() : f => f)
const store = createStore(reducers, middlewareEnhancer)


ReactDom.render(
<Provider store={store}>
<App /> 
</Provider>,    
document.getElementById('root')
)