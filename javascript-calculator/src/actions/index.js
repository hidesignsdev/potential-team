export const NUMBER_INPUT ='NUMBER_INPUT';
export const OPERATOR_INPUT = 'OPERATOR_INPUT';
export const DECIMAL_INPUT = 'DECIMAL_INPUT';
export const CALCULATE = 'CALCULATE';
export const CLEAR = 'CLEAR';

export const numberInput=(number)=>({
    type:'NUMBER_INPUT',
    number
});

export const operatorInput=(operator)=>({
    type:'OPERATOR_INPUT',
    operator
});

export const decimalInput=(decimal)=>({
    type:'DECIMAL_INPUT',
    decimal
});

export const calculate =()=>({
    type:'CACULATE',
});

export const clear =()=>({
    type:'CLEAR',
});



