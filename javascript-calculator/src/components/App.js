import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from "react-redux";
import { numberInput, operatorInput, decimalInput, calculate, clear } from '../actions'


//some problem
/*
- enter number will made height of input screen change
*/

class App extends Component {

  handleNumberInput = (e) => {
    this.props.dispatch(numberInput(e.target.dataset.value))
    //this.props.onNumberInput(e.target.dataset.value);
  };
  handleOperatorInput = (e) => {
    this.props.dispatch(operatorInput(e.target.dataset.value))
    //this.props.onOperatorInput(e.target.dataset.value);
  };
  handleDecimalInput = (e) => {
    this.props.dispatch(decimalInput(e.target.dataset.value))
    //this.props.onOperatorInput(e.target.dataset.value);
  };
  handleCalculate = () => {
    this.props.dispatch(calculate())
    //this.props.onCalculator();
  };
  handleClear = () => {
    this.props.dispatch(clear())
    //this.props.onClear();
  };

  render() {
    return (
      <div className="page">
        <div className="calculator">
          <div className="formulaScreen">{this.props.calculator.equation}</div>
          <div className="outputScreen" id="display">{this.props.calculator.display}</div>
          <button id="clear" data-value="AC" onClick={this.handleClear}>AC</button>
          <button id="divide" data-value="/" className="operation" onClick={this.handleOperatorInput}>/</button>
          <button id="seven" data-value="7" className="number" onClick={this.handleNumberInput}>7</button>
          <button id="eight" data-value="8" className="number" onClick={this.handleNumberInput}>8</button>
          <button id="nine" data-value="9" className="number" onClick={this.handleNumberInput}>9</button>
          <button id="multiply" data-value="*" className="operation" onClick={this.handleOperatorInput}>X</button>
          <button id="four" data-value="4" className="number" onClick={this.handleNumberInput}>4</button>
          <button id="five" data-value="5" className="number" onClick={this.handleNumberInput}>5</button>
          <button id="six" data-value="6" className="number" onClick={this.handleNumberInput}>6</button>
          <button id="subtract" data-value="-" className="operation" onClick={this.handleOperatorInput}>-</button>
          <button id="one" data-value="1" className="number" onClick={this.handleNumberInput}>1</button>
          <button id="two" data-value="2" className="number" onClick={this.handleNumberInput}>2</button>
          <button id="three" data-value="3" className="number" onClick={this.handleNumberInput}>3</button>
          <button id="add" data-value="+" className="operation" onClick={this.handleOperatorInput}>+</button>
          <button id="zero" data-value="0" className="number" onClick={this.handleNumberInput}>0</button>
          <button id="decimal" data-value="." className="number" onClick={this.handleDecimalInput}>.</button>
          <button id="equals" data-value="=" className="operation" onClick={this.handleCalculate}>=</button>
        </div>
      </div>
    );
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onNumberInput: (number) => dispatch(numberInput(number)),
//     onOperatorInput: (operator) => dispatch(operatorInput(operator)),
//     onDecimalInput: (decimal) => dispatch(decimalInput(decimal)),
//     onCalculator: () => dispatch(calculate()),
//     onClear: () => dispatch(clear())
//   }
// }
const mapStateToProps = (state) => {
  return {
    calculator: state.calculateReducer
  }
}

export default connect(mapStateToProps)(App)