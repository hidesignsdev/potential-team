import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/constants';

const initialState = {
    data: {},
    loading: false,
    success: false,
    error: ""
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, data: {}, loading: true };
        case LOGIN_SUCCESS:
            return { ...state, data: action.payload.data, loading: false };
        case LOGIN_FAILURE:
            return { ...state, error: action.payload.error, loading: false };
        default:
            return state
    }
}
export default loginReducer;