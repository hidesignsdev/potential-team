import {combineReducers} from "redux";
// import dataReducer from "./dataReducer";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
    form: formReducer
});
export default rootReducer;