import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { reducers } from './store/reducers';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const middleware = [thunk];
if(process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

const store = createStore(
  reducers,
  compose (
    applyMiddleware(...middleware),
    // This line is needed to see the Redux internal details in the browser debugger such as chrome-developer. 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

ReactDOM.render(
  // Wrap it with Provider to make the redux store available to the whole application. 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
