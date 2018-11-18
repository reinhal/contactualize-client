import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {contactualizeReducer} from './reducers/index.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(contactualizeReducer, composeEnhancers(applyMiddleware(thunk)));



// redux thunk for async
// react is doing too many jobs, get it working with redux
// thunk = a function return by a function 
// the data will be in store, and read it properly to put it together
// possible data in the mapStateToProps object
