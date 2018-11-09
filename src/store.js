import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {contactualizeReducer} from './reducers/index.js';
export default createStore(contactualizeReducer, applyMiddleware(thunk));

// redux thunk for async
// react is doing too many jobs, get it working with redux
// thunk = a function return by a function 
// the data will be in store, and read it properly to put it together
// possible data in the mapStateToProps object
