import {GET_CUSTOMERS, ADD_CUSTOMER, LOGIN_TEST} from '../actions/constants';

export const customerReducer = (state = [], {type, payload}) => {
    switch (type) {
        case GET_CUSTOMERS:
            return payload;
            break;
        case LOGIN_TEST:
            return payload;
            break;
        default:
            return state;
    }
}

// export default customerReducer;
