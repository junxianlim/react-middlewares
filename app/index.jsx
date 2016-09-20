import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Async from './middlewares/async';
import Main from './components/main.jsx';
import reducers from './reducers';
import styles from './styles/app.styl';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)} >
    <Main />
  </Provider>
  , document.getElementById('app')
)
