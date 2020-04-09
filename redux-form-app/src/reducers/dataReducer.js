import { SIGNUP_FAILURE, SIGNUP_SUCCESS } from "../actions/index";




const dataReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {};
        default: return state
    }
}
export default dataReducer;