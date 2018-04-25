import {LOGIN_TEST, VIEW_CHANGE, SIGNUP, NEW_ELECTION, CHANGE_NAVBAR_PAGE, ADD_CANDIDATE_PROFILES, GET_RESULTS, VOTE_CAST} from '../actions/constants';

export const loginReducer = (state={success: null, pageType: 'Login'}, {type, payload}) => {
    console.log('in login reducer', type, state, payload);
    switch (type) {
        case LOGIN_TEST:
            return {...state, ...payload};
        case VIEW_CHANGE:
            return {...state, ...payload};
        case SIGNUP:
            return {...state, ...payload}; 
        case NEW_ELECTION:
            return {...state, ...payload};  
        case CHANGE_NAVBAR_PAGE:
            return {...state, ...payload};      
        case ADD_CANDIDATE_PROFILES:
            return {...state, ...payload};
        case GET_RESULTS:
            return {...state, ...payload};        
        case VOTE_CAST:
            return {...state, ...payload};       
        default:
            return state;
    }
}
