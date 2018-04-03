import {combineReducers} from 'redux';
import {customerReducer} from './customer';
import {loginReducer} from './login';

export default combineReducers({
    customers: customerReducer,
    logged: loginReducer
})
