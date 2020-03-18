import { NUMBER_INPUT, OPERATOR_INPUT, DECIMAL_INPUT, CALCULATE, CLEAR } from '../actions';

const initState = {
    display: [],
    result: '',
};

const calculateReducer = (prevState = initState, action) => {
    switch (action.type) {
        case NUMBER_INPUT:
            return
        case OPERATOR_INPUT:
            return
        case DECIMAL_INPUT:
            return
        case CALCULATE:
            return
        default:
            return prevState;
    }

};