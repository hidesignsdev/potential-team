import React, {Component} from 'react';
import {connect} from 'react-redux';
import {newQuote} from './actions';
import quotes from './quotes.json';
import "./styles.css";
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";



  class RandomQuote extends Component {
  // use componentDidMount to get data
  componentDidMount(){
      this.props.dispatch(newQuote(this.getQuote()))
  }
  //get random quote
  getQuote(){
    return quotes[Math.floor(Math.random()*quotes.length)]
  } 
  //get new quote funtion to click button
  getNewQuote=()=>{
    this.props.dispatch(newQuote(this.getQuote()))
  }

  render() {
    return (
      <div id='wrapper'>
        <div id="quote-box">
          <div id="text"><FaQuoteLeft /> {this.props.quote.quote}</div>
          <div id="author"><p>{this.props.quote.author}</p></div>
              <a id="tweet-quote"  href={`https://twitter.com/intent/tweet?text=${this.props.quote.quote || ''}`} title="Tweet this quote!" >
                <FaTwitter />
              </a>
              <div>
                <button id='new-quote' className='buttons' onClick={this.getNewQuote}>New Quote</button>
            </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps =(state)=>{
  return {
    quote: state.quoteGenerate
  }
}
export default connect(mapStateToProps)(RandomQuote)
