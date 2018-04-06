import {REGISTER} from '../actions/constants';

export const cardTypeReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case REGISTER:
            return payload
        default:
            return state
    }
}