import {combineReducers} from 'redux';
import newQuoteReducer from './newQuoteReducer';

const rootReducer = combineReducers({
    quoteGenerate: newQuoteReducer
})
export default rootReducer