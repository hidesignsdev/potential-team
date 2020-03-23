import { NUMBER_INPUT, OPERATOR_INPUT, DECIMAL_INPUT, CALCULATE, CLEAR } from '../actions';
//import { Caption } from 'react-bootstrap/lib/Carousel';

const initState = {
    display: "0",
    equation: "",
};

const calculateReducer = (prevState = initState, action) => {
    console.log(prevState)
    switch (action.type) {
        case NUMBER_INPUT:
            if (prevState.display === "0" || prevState.equation.includes("=")) {
                return {
                    display: action.payload,
                    equation: action.payload
                };
            } else if (prevState.equation.match(/[+\-*/]$/)) {
                const value = prevState.equation + action.payload;
                return {
                    display: action.payload,
                    equation: value
                };
            } else if (prevState.equation.match(/[0-9.]$/)) {
                if (prevState.equation.match(/[+\-*/]/) == null && !prevState.equation.includes("=")) {
                    const value = prevState.equation + action.payload;
                    return {
                        display: value,
                        equation: value
                    };
                } else {
                    return {
                        display: prevState.display + action.payload,
                        equation: prevState.equation + action.payload
                    };
                }
            };
            break;
        case OPERATOR_INPUT:
            if (prevState.equation.includes("=")) {
                let value = prevState.display;
                value += action.payload;
                return {
                    equation: value
                }
            } else if (prevState.equation !== "" && prevState.equation.match(/[ *\- +/]$/) === null) {
                let value = prevState.equation;
                value += action.payload;
                return {
                    equation: value
                }
            } else if (prevState.equation.match(/[+\- */]$/) !== null) {
                if (prevState.equation.includes("+-") === true && action.payload !== "-") {
                    let value = prevState.equation;
                    value = value.substring(0, value.length - 2)
                    value += action.payload;
                    return {
                        equation: value
                    }
                }
                else if (prevState.equation.includes("/-") === true && action.payload !== "-") {
                    let value = prevState.equation;
                    value = value.substring(0, value.length - 2)
                    value += action.payload
                    return {
                        equation: value
                    }
                } else if (prevState.equation.includes("*-") === true && action.payload !== "-") {
                    let value = prevState.equation;
                    value = value.substring(0, value.length - 2)
                    value += action.payload
                    return {
                        equation: value
                    }
                }
                else if (prevState.equation.match(/[+/ *]$/) !== null && action.payload === "-") {
                    let value = prevState.equation + action.payload
                    return {
                        equation: value
                    }
                } else if (prevState.equation.match(/[+]/) !== null && action.payload !== "-") {
                    let value = prevState.equation;
                    value = value.substring(0, value.length - 1)
                    value += action.payload
                    return {
                        equation: value
                    }
                } else if (prevState.equation.match(/-/) !== null && action.payload !== "-") {
                    let value = prevState.equation;
                    value = value.substring(0, value.length - 1)
                    value += action.payload
                    return {
                        equation: value
                    }
                }
            }
            return prevState;
        case DECIMAL_INPUT:
            if (prevState.equation === "" || prevState.equation.includes("=")) {
                let value = "0."
                return {
                    equation: value,
                    display: value
                }
            } else if (prevState.equation.match(/[+\- */]$/)) {
                let value = "0."
                return {
                    display: value,
                    equation: prevState.equation + value
                }
            } else if (!prevState.display.includes(".")) {
                return {
                    equation: prevState.equation + action.payload,
                    display: prevState.display + action.payload
                }
            }
            else {
                return prevState;
            }
        case CALCULATE:
            if (prevState.equation.includes("=")) {
                const value = `${prevState.display} = ${prevState.display}`;
                return { equation: value };
            } else if (prevState.equation !== ""
                && prevState.equation.match(/[+\-*/]/) != null
                && prevState.equation.match(/[+\-*/]$/) == null) {
                const display = Number.isInteger(eval(prevState.equation)) ? eval(prevState.equation)
                    : parseFloat(eval(prevState.equation).toFixed(5));
                let value = prevState.equation;
                value += ` = ${display}`;
                return {
                    display: String(display),
                    equation: value
                };
            }
            break;
        case CLEAR:
            return {
                display: '0',
                equation: ""
            }
        default:
            return prevState;
    }

};
export default calculateReducer;