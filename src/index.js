import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const rootElement = document.getElementById('root');
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
