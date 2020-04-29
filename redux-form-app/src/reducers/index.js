import { combineReducers } from "redux";
import logInReducer from './loginReducer';
import signUpReducer from './signupReducer';
import updateProfileReducer from './updateProfileReducer';

const rootReducer = combineReducers({
    logInReducer,
    signUpReducer,
    updateProfileReducer
});
export default rootReducer;