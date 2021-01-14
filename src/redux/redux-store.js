import {combineReducers, createStore} from 'redux';
import commentReducer from './reducers/commentReducer';
import clientsReducer from './reducers/clientsReducer';

let reducers = combineReducers({
    blog: commentReducer,
    clients: clientsReducer,
});

let store = createStore(reducers);

export default store;