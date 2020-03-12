import React, { Component } from "react";
import "./styles.css";
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";

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
        <div id="quote-box">
          <div id="text"><FaQuoteLeft /> {this.state.quote}</div>
          <div id="author">-{this.state.author}</div>
              <a id="tweet-quote"  href="https://twitter.com/intent/tweet" title="Tweet this quote!" target="_blank">
                <FaTwitter />
              </a>
            <button id="new-quote">New quote</button>
        </div>
      </div>
    );
  }
}

export default RandomQuote;
