import {LOGIN_TEST, REGISTER} from '../actions/constants';

export const loginReducer = (state = {success: null, pageType: "Feed"}, {type, payload}) => {
    console.log('in login reducer', state, payload);
    switch (type) {
        case LOGIN_TEST:
            return {...state, ...payload};
        case REGISTER:
            return {...state, ...payload};
        default:
            return state;
    }
}
