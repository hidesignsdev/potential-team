import { SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS }
    from '../actions/index';

const initialState = {
    data: {},
    loading: false,
    success: false,
    error: ""
}
const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return { ...state, data: action.payload.data, loading: true };
        case SIGNUP_SUCCESS:
            return { ...state, data: action.payload.data, success: true, loading: false };
        case SIGNUP_FAILURE:
            return { ...state, data: {}, error: action.payload.error, loading: false };
        default:
            return state
    }
}
export default signupReducer;