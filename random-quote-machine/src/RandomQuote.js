import React, { Component } from "react";
import "./styles.css";
import {FaQuoteLeft} from "react-icons/fa";

const quoteDefault =
  "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.";
const authorDefault = "Oprah Winfrey";
  class RandomQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quoteDefault, //for quote
      author: authorDefault //for author
    };
  }

  render() {
    return (
      <div className="page">
        <h1 className="title">Random Quote App</h1>
        <div className="quote-box" id="quote-box">
          <div className="quote-text"><FaQuoteLeft/> {this.state.quote}</div>
          <div className="quote-author">-{this.state.author}</div>
          <button className="new-quote">New quote</button>
        </div>
      </div>
    );
  }
}

export default RandomQuote;
