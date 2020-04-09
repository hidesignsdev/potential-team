import { combineReducers } from "redux";
// import dataReducer from "./dataReducer";
import { reducer as formReducer } from "redux-form";
import appData from './dataReducer';

const rootReducer = combineReducers({
    form: formReducer,
    appData
});
export default rootReducer;