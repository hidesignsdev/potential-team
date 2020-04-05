import { LOGIN, LOGOUT, SIGNUP } from "../actions/index";

const dataReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return state;
        case LOGOUT:
            return state;
        case SIGNUP:
            return state;
        default:
            return state;

    }
}
export default dataReducer;