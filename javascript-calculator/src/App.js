import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";

//some problem
/*
- can't reset input screen after get result and want do another calculation
- if enter more ---- will error
- enter number will made height of input screen change
- 
*/
const arrayOperation = ['+', '-', 'x', '/', '.'];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      valueTyping: ""
    }
  }
  calculate() {
    const { valueTyping } = this.state;
    let inputDisplay = valueTyping;
    if (inputDisplay.includes('--')) {
      inputDisplay = inputDisplay.replace('--', '+');
    }
    while (arrayOperation.includes(inputDisplay.slice(-1))) {
      inputDisplay = inputDisplay.slice(0, -1);
    }
    this.setState({ result: eval(inputDisplay) || 0 + "" })
  }
  reset() {
    this.setState({ valueTyping: "", result: 0 });
  }
  backspace() {
    const { valueTyping } = this.state;
    this.setState({ valueTyping: valueTyping.slice(0, -1) })
  }
  enterValue = (event) => {
    const { valueTyping, result } = this.state;
    if (result != 0) {
      this.reset();
    }
    // valueButton: current Value
    // valueTyping: previous Value
    let valueButton = event.target.value;
    switch (valueButton) {
      case "=":
        this.calculate();
        break;
      case "C":
        this.backspace();
        break;
      case "AC":
        this.reset();
        break;
      default:
        if (arrayOperation.includes(valueButton)) {
          if (valueButton == "-" || !arrayOperation.includes(valueTyping.slice(-1))) {

            this.setState({ valueTyping: valueTyping + valueButton });
          }
        }
        else{
          this.setState({ valueTyping: valueTyping + valueButton });

        }
  }

}
render() {
  const { valueTyping, result } = this.state;
  return (
    <div className="page">
      <div className="calculator">
        <div className="formulaScreen">{valueTyping}</div>
        <div id="display">{result}</div>
        <button id="allclear" value="AC" className="standardItem" onClick={this.enterValue}>AC</button>
        <button id="clear" value="C" className="standardItem" onClick={this.enterValue}>C</button>
        <button id="divide" value="/" className="operation standardItem" onClick={this.enterValue}>/</button>

        <button id="seven" value="7" className="number standardItem" onClick={this.enterValue}>7</button>
        <button id="eight" value="8" className="number standardItem" onClick={this.enterValue}>8</button>
        <button id="nine" value="9" className="number standardItem" onClick={this.enterValue}>9</button>
        <button id="multiply" value="*" className="operation standardItem" onClick={this.enterValue}>X</button>

        <button id="four" value="4" className="number standardItem" onClick={this.enterValue}>4</button>
        <button id="five" value="5" className="number standardItem" onClick={this.enterValue}>5</button>
        <button id="six" value="6" className="number standardItem" onClick={this.enterValue}>6</button>
        <button id="subtract" value="-" className="operation standardItem" onClick={this.enterValue}>-</button>
        <button id="one" value="1" className="number standardItem" onClick={this.enterValue}>1</button>
        <button id="two" value="2" className="number standardItem" onClick={this.enterValue}>2</button>
        <button id="three" value="3" className="number standardItem" onClick={this.enterValue}>3</button>
        <button id="add" value="+" className="operation standardItem" onClick={this.enterValue}>+</button>
        <button id="zero" value="0" className="number standardItem" style={{ width: "162px" }} onClick={this.enterValue}>0</button>
        <button id="decimal" value="." className="number standardItem" onClick={this.enterValue}>.</button>
        <button id="equals" value="=" className="standardItem" onClick={this.enterValue}>=</button>
      </div>
    </div>
  );
}
}
// const mapStateToProps = (state) => ({result: state.result});
// export default connect(mapStateToProps,"")(App);