import React, { Component } from "react";
import PropTypes from "prop-types";
import MemorySquare from "./MemorySquare.js";

export default class MemoryRow extends Component {
  static propTypes = {
    rowNumber: PropTypes.number.isRequired,
    squareSize: PropTypes.string.isRequired,
    rowSize: PropTypes.number.isRequired
  };

  generateSquare(column) {
    let square = {
      row: this.props.rowNumber,
      column: column,
      size: this.props.squareSize
    };
    square.key = "sq-R" + square.row + "xC" + square.column;
    return square;
  }

  generateSquares() {
    this.squares = [];
    for (let i = 0; i < this.props.rowSize; i++) {
      this.squares.push(this.generateSquare(i));
    }
  }

  renderSquare(squareObject) {
    return <MemorySquare size={this.props.squareSize} {...squareObject} />;
  }

  render() {
    return (
      <div className="squareRow" style={{ height: this.props.squareSize }}>
        {this.squares.map(s => this.renderSquare(s))}
      </div>
    );
  }

  havePropsChanged(oldProps, newProps){
      return (oldProps.rowNumber !== newProps.rowNumber) ||
      (oldProps.squareSize !== newProps.squareSize) ||
      (oldProps.rowSize !== newProps.rowSize);
  }

  shouldComponentUpdate(newProps, newState){
    console.log("row will update");
    return this.havePropsChanged(this.props, newProps);
  }

  componentWillUpdate() {
    this.generateSquares();
  }

  componentWillMount() {
    this.generateSquares();
  }
}
