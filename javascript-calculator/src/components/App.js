import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from "react-redux";
import { numberInput, operatorInput, decimalInput, calculate, clear } from '../actions'


class App extends Component {

  render() {
    return (
      <div className="page">
        <div className="calculator">
          <div className="formulaScreen">{this.props.calculator.equation}</div>
          <div className="outputScreen" id="display">{this.props.calculator.display}</div>
          <button id="clear" data-value="AC" onClick={this.props.onClear}>AC</button>
          <button id="divide" data-value="/" className="operation" onClick={this.props.onOperatorInput}>/</button>
          <button id="seven" data-value="7" className="number" onClick={this.props.onNumberInput}>7</button>
          <button id="eight" data-value="8" className="number" onClick={this.props.onNumberInput}>8</button>
          <button id="nine" data-value="9" className="number" onClick={this.props.onNumberInput}>9</button>
          <button id="multiply" data-value="*" className="operation" onClick={this.props.onOperatorInput}>X</button>
          <button id="four" data-value="4" className="number" onClick={this.props.onNumberInput}>4</button>
          <button id="five" data-value="5" className="number" onClick={this.props.onNumberInput}>5</button>
          <button id="six" data-value="6" className="number" onClick={this.props.onNumberInput}>6</button>
          <button id="subtract" data-value="-" className="operation" onClick={this.props.onOperatorInput}>-</button>
          <button id="one" data-value="1" className="number" onClick={this.props.onNumberInput}>1</button>
          <button id="two" data-value="2" className="number" onClick={this.props.onNumberInput}>2</button>
          <button id="three" data-value="3" className="number" onClick={this.props.onNumberInput}>3</button>
          <button id="add" data-value="+" className="operation" onClick={this.props.onOperatorInput}>+</button>
          <button id="zero" data-value="0" className="number" onClick={this.props.onNumberInput}>0</button>
          <button id="decimal" data-value="." className="number" onClick={this.props.onDecimalInput}>.</button>
          <button id="equals" data-value="=" className="operation" onClick={this.props.onCalculate}>=</button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onNumberInput: (e) => dispatch(numberInput(e.target.dataset.value)),
    onOperatorInput: (e) => dispatch(operatorInput(e.target.dataset.value)),  
    onDecimalInput: (e) => dispatch(decimalInput(e.target.dataset.value)),
    onCalculate: () => dispatch(calculate()),
    onClear: () => dispatch(clear())
  }
}
const mapStateToProps = (state) => {
  return {
    calculator: state.calculateReducer
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)