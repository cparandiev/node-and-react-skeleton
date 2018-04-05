import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

const appReducers = combineReducers({
    usersReducer
});


export default appReducers;