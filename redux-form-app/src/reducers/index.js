import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import appData from './dataReducer';

const rootReducer = combineReducers({
    form: formReducer,
    appData
});
export default rootReducer;