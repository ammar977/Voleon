import {LOGIN_TEST, REGISTER} from '../actions/constants';

export const loginReducer = (state = {success: false, pageType: "Login"}, {type, payload}) => {
    console.log('in login reducer', state, payload);
    switch (type) {
        case LOGIN_TEST:
            return {...state, ...payload};
            break;
        case REGISTER:
            return {...state, ...payload};
            break;
        default:
            return state;
    }
}
