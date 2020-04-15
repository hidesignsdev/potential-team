import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import logInReducer from './loginReducer';
import signUpReducer from './signupReducer';

const rootReducer = combineReducers({
    form: formReducer,
    logInReducer,
    signUpReducer
});
export default rootReducer;