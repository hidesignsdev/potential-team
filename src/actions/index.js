export const NEW_QUOTE = 'NEW_QUOTE'

//create action
export const newQuote=(quote)=>({
    type: 'NEW_QUOTE',
    quote
})