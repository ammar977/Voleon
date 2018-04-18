import {LOGIN_TEST, VIEW_CHANGE, SIGNUP,UPLOAD} from '../actions/constants';

export const loginReducer = (state = {success: null, pageType: "Login"}, {type, payload}) => {
    console.log('in login reducer', state, payload);
    switch (type) {
        case LOGIN_TEST:
            return {...state, ...payload};
        case VIEW_CHANGE:
            return {...state, ...payload};
        case SIGNUP:
            return {...state, ...payload};          
        default:
            return state;
    }
}
