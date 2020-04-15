import { SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } 
from '../actions/index';

const initialState = {
    data: {}, 
    loading: false,
    success: false, 
    error: false
}
const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            console.log("sign up request", state)
            return { ...state, data: "action.payload.data", loading: true};
        case SIGNUP_SUCCESS:
            return { ...state, data: action.payload.data, loading: false,  error: false, success: true};
        case SIGNUP_FAILURE:
            console.log("sign up failed", state)

            return { ...state, data: {}, loading: false, error: true};
        case LOGIN_REQUEST:
            return { ...state,  data: {}, loading: true};
        case LOGIN_SUCCESS:
            return { ...state, data: action.payload.data, loading: false, };
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: true };
        default:
            return state
    }
}
export default dataReducer;