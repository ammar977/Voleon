import {LOGIN_TEST, REGISTER} from '../actions/constants';

export const loginReducer = (state = {success: false, pageType: "Login"}, {type, payload}) => {
    console.log('in login reducer', state, payload);
    switch (type) {
        case LOGIN_TEST:
            // return Object.assign({}, state, payload);
            return {...state, ...payload};
            break;
        case REGISTER:
            // return Object.assign({}, state, payload);
            return {...state, ...payload};
            break;
        default:
            return state;
    }
}

// export default loginReducer;
