import React, { Component } from "react";
import PropTypes from "prop-types";
import MemorySquare from "./MemorySquare.js";

export default class MemoryRow extends Component {
  static propTypes = {
    rowNumber: PropTypes.number.isRequired,
    squareSize: PropTypes.string.isRequired,
    rowSize: PropTypes.number.isRequired,
    selectedSquares: PropTypes.arrayOf(PropTypes.number),
    chosenSquares: PropTypes.arrayOf(PropTypes.number)
  };

  generateSquare(column) {
    let square = {
      row: this.props.rowNumber,
      column: column,
      size: this.props.squareSize,
      onClick: this.props.squareClicked
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

  getSquareState(stateArray, column){
    if(stateArray===undefined)return;
    return stateArray.includes(column);
  }

  isSquareSelected(column) {
    return this.getSquareState(this.props.selectedSquares, column);
  }

  isSquareChosen(column) {
    return this.getSquareState(this.props.chosenSquares, column);
  }

  renderSquare(squareObject) {
    let isSelected = this.isSquareSelected(squareObject.column);
    let isChosen = this.isSquareChosen(squareObject.column);
    return (
      <MemorySquare
        isSelected={isSelected}
        isChosen={isChosen}
        {...squareObject}
      />
    );
  }

  render() {
    return (
      <div className="squareRow" style={{ height: this.props.squareSize }}>
        {this.squares.map(s => this.renderSquare(s))}
      </div>
    );
  }

  componentWillMount() {
    this.generateSquares();
  }
}
