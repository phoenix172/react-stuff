import React, { Component } from "react";
import PropTypes from "prop-types";
import Quote from "./Quote.js"

export default class Quoter extends Component {
  static propTypes = {
    quotes: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        author: PropTypes.string
      }).isRequired
    ).isRequired
  };

  static operations = {
    "+": operand => operand + 1,
    "-": operand => operand - 1
  };

  state = {
    currentQuoteIndex: 0
  };

  getQuote(quoteIndex) {
    return this.props.quotes[quoteIndex];
  }

  get currentQuote() {
    return this.getQuote(this.state.currentQuoteIndex);
  }

  updateQuoteIndex(operation) {
    var newIndex = Quoter.operations[operation](this.state.currentQuoteIndex);
    if (!this.getQuote(newIndex)) return;
    this.setState({
      currentQuoteIndex: newIndex
    });
  }

  render() {
    return (
      <div className="quoter">
        <Quote quote={this.currentQuote} />
        <button onClick={() => this.updateQuoteIndex("-")}>Prev</button>
        <button onClick={() => this.updateQuoteIndex("+")}>Next</button>
      </div>
    );
  }
}
