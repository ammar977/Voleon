import {combineReducers} from 'redux';
import {customerReducer} from './customer';
import {loginReducer} from './login';
// import {cardTypeReducer} from './cardType';

export default combineReducers({
    customers: customerReducer,
    logged: loginReducer,
    // cardtype: cardTypeReducer
})
