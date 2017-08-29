import React, { Component } from "react";

export default class Quote extends Component {
  get quoteText() {
    return this.props.quote.text;
  }
  get quoteAuthor() {
    return this.props.quote.author;
  }
  render() {
    return (
      <div className="quote">
        <div>
          Quote: {this.quoteText}
        </div>
        <div>
          Author: {this.quoteAuthor}
        </div>
      </div>
    );
  }

  componentWillReceiveProps(){
    console.log("componentWillReceiveProps");
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
    return true;
  }
  componentWillUpdate(){
    console.log("componentWillUpdate");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
      console.log("component will unmount for "+this.quoteText);
  }
}
