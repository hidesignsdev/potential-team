import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import logInReducer from './loginReducer';
import signUpReducer from './signupReducer';
import updateProfileReducer from './updateProfileReducer';

const rootReducer = combineReducers({
    form: formReducer,
    logInReducer,
    signUpReducer,
    updateProfileReducer
});
export default rootReducer;