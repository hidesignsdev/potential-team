import {combineReducers} from 'redux';
import newQuoteReducer from './newQuoteReducer';

//create rootReducer
const rootReducer = combineReducers({
    newQuoteReducer
})
export default rootReducer