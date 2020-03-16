import {NEW_QUOTE} from '../actions';

const initState ={
    quote:'',
    author:''
}

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