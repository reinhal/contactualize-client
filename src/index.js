import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

console.log('store', store.getState());

ReactDOM.render(
  <Provider key={this.index} store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
