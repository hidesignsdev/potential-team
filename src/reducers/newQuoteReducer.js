import {NEW_QUOTE} from '../actions';

// initial state
const initState ={
    quote:'',
    author:''
}
// create reducer
const newQuoteReducer=(preState=initState,action)=>{
    switch(action.type){
        case NEW_QUOTE:
            console.log(action)
            const {quote ,author} = action.quote
            return { quote,author }
        default:
            return preState;
    }
}
export default newQuoteReducer;