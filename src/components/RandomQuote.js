import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newQuote } from '../actions';
import quotes from '../data/quotes.json';
import '../styles/RandomQuote.css';
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";

class RandomQuote extends Component {
  // use componentDidMount to get data
  componentDidMount() {
    this.props.onGetNewQuote(this.getQuote());
  }
  //get random quote
  getQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)]
  }
  //get new quote funtion when click button
  getNewQuote = () => {
    this.props.onGetNewQuote(this.getQuote());
  }

  render() {
    return (
      <div id='wrapper'>
        <div id="quote-box">
          <div id="text"><FaQuoteLeft /> {this.props.quote.quote}</div>
          <div id="author"><p>{this.props.quote.author}</p></div>
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${this.props.quote.quote || ''}`} title="Tweet this quote!" >
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

// get state from to and assign to quote
const mapStateToProps = (state) => {
  return {
    quote: state.newQuoteReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onGetNewQuote: (getQuote) => dispatch(newQuote(getQuote))
  }
}
// create link to store
export default connect(mapStateToProps, mapDispatchToProps)(RandomQuote)
