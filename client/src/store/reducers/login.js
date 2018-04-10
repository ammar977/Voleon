import {LOGIN_TEST, REGISTER, SIGNUP} from '../actions/constants';

export const loginReducer = (state = {success: null, pageType: "Signup"}, {type, payload}) => {
    console.log('in login reducer', state, payload);
    switch (type) {
        case LOGIN_TEST:
            return {...state, ...payload};
        case REGISTER:
            return {...state, ...payload};
        case SIGNUP:
            return {...state, ...payload};
            
        default:
            return state;
    }
}
