import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      valueTyping: ""
    }
  }
  add = () =>{
    // this.props.dispatch({type: 'ADD'})
  }
  subtract = () =>{
    // this.props.dispatch({type: 'SUB'})
  } 
  clear = () =>{
    // this.props.dispatch({type: 'CLEAR'})
  }
  divide = () =>{
    // this.props.dispatch({type: 'DIV'})
  }
  multiply = () =>{
    // this.props.dispatch({type: 'MUL'})
  }
  equal = ()=>{
    // this.props.dispatch({type: 'EQUAL'})
  }
  enterNumber = (event)=>{
    const {valueTyping} = this.state;
    this.setState({valueTyping: valueTyping+event.target.value})
  }
  render() {
    return (
      <div className="page">
        <div className="calculator">
    <div className="formulaScreen">{this.state.valueTyping}</div>
          <div id="display">{this.state.result}</div>
          <button id="clear" value ="AC" className="standardItem" onClick={this.clear}>AC</button>
          <button id="divide" value="/" className="operation standardItem" onClick={this.divide}>/</button>
          <button id="multiply" value="x" className="operation standardItem" onClick={this.multiply}>X</button>
          
          <button id="seven" value="7" className="number standardItem" onClick={this.enterNumber}>7</button>
          <button id="eight" value="8" className="number standardItem" onClick={this.enterNumber}>8</button>
          <button id="nine" value="9" className="number standardItem" onClick={this.enterNumber}>9</button>
          <button id="subtract" value="-" className="operation standardItem" onClick={this.subtract}>-</button>
          <button id="four" value="4" className="number standardItem" onClick={this.enterNumber}>4</button>
          <button id="five" value="5" className="number standardItem" onClick={this.enterNumber}>5</button>
          <button id="six" value="6" className="number standardItem" onClick={this.enterNumber}>6</button>
          <button id="add" value="+" className="operation standardItem" onClick={this.add}>+</button>
          <button id="one" value="1" className="number standardItem" onClick={this.enterNumber}>1</button>
          <button id="two" value="2" className="number standardItem" onClick={this.enterNumber}>2</button>
          <button id="three" value="3" className="number standardItem" onClick={this.enterNumber}>3</button>
          <button id="equals" value="=" className="standardItem" onClick={this.equal}>=</button>
          <button id="zero" value="0" className="number standardItem" style={{width: "162px"}} onClick={this.enterNumber}>0</button>
          <button id="decimal" value="." className="number standardItem" onClick={this.enterNumber}>.</button>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = (state) => ({result: state.result});
// export default connect(mapStateToProps,"")(App);