import {combineReducers} from 'redux';
import {loginReducer} from './login';
// import {cardTypeReducer} from './cardType';

export default combineReducers({
    logged: loginReducer,
    // cardtype: cardTypeReducer
})
