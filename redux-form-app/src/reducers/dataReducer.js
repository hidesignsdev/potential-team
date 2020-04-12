import { SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } 
from '../actions/index';

const dataReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return { ...state, data: action.payload.data, loading: true};
        case SIGNUP_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case SIGNUP_FAILURE:
            return { ...state, loading: false, error: true};
        case LOGIN_REQUEST:
            return { ...state,  data: {}, loading: true};
        case LOGIN_SUCCESS:
            return { ...state, loading: false, data: action.payload};
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: true };
        default:
            return state
    }
}
export default dataReducer;