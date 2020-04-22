import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT } from '../actions/constants';

const initialState = {
    data: {},
    loading: false,
    success: false,
    error: ""
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, data: action.payload.data, loading: true };
        case LOGIN_SUCCESS:
            return { ...state, data: action.payload.data, loading: false, success: true };
        case LOGIN_FAILURE:
            return { ...state, error: action.payload.error, loading: false, success: false };
        case LOG_OUT:
            return { ...state, data: {}, loading: false, success: false, error: "" }
        default:
            return state
    }
}
export default loginReducer;