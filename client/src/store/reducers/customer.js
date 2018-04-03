import {GET_CUSTOMERS, ADD_CUSTOMER} from '../actions/constants';

export const customerReducer = (state = [], {type, payload}) => {
    switch (type) {
        case GET_CUSTOMERS:
            return payload
        case ADD_CUSTOMER:
            return [
                ...state,
                payload
            ]
        default:
            return state
    }
}

// export default customerReducer;
