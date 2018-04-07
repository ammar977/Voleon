import {combineReducers} from 'redux';
import {customerReducer} from './customer';
import {loginReducer} from './login';
// import {cardTypeReducer} from './cardType';

export default combineReducers({
    logged: loginReducer,
    // cardtype: cardTypeReducer
})
