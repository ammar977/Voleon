import {combineReducers} from 'redux';
import {customerReducer} from './customer';
import {loginReducer} from './login';
import {cardTypeReducer} from './cardType';
import Card from 'react-materialize/lib/Card';

export default combineReducers({
    customers: customerReducer,
    lun: loginReducer,
    // test: loginReducer,
    cardtype: cardTypeReducer
})
