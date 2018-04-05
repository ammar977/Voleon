import {LOGIN_TEST} from '../actions/constants';

export const loginReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case LOGIN_TEST:
        return payload
        default:
        return state
    }
}

// export default loginReducer;
