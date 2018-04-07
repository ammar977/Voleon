import {GET_CUSTOMERS, LOGIN_TEST} from '../actions/constants';

export const customerReducer = (state = [], {type, payload}) => {
    switch (type) {
        case GET_CUSTOMERS:
            return payload;
        case LOGIN_TEST:
            return payload;
        default:
            return state;
    }
}

// export default customerReducer;
