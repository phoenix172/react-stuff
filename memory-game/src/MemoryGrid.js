import React, { Component } from "react";
import PropTypes from "prop-types";
import MemoryRow from "./MemoryRow.js";

export default class MemoryGrid extends Component {
  static propTypes = {
    gridSize: PropTypes.number.isRequired,
    squareSize: PropTypes.string.isRequired,
    selectedSquares: PropTypes.arrayOf(
      PropTypes.shape({
        row: PropTypes.number,
        column: PropTypes.number
      })
    ),
    chosenSquares: PropTypes.arrayOf(
      PropTypes.shape({
        row: PropTypes.number,
        column: PropTypes.number
      })
    )
  };

  createRow(rowNumber) {
    return {
      rowNumber: rowNumber,
      rowSize: this.props.gridSize,
      key: "row" + rowNumber,
      squareSize: this.props.squareSize,
      squareClicked: this.props.squareClicked
    };
  }

  generateRows() {
    this.rows = [];
    for (let i = 0; i < this.props.gridSize; i++) {
      this.rows.push(this.createRow(i));
    }
  }

  getForRow(squareStateArray, row) {
    if(squareStateArray === undefined)return;
    return squareStateArray.filter(x => x.row === row.rowNumber).map(x => x.column);
  }

  getSelectedSquares(row){
    return this.getForRow(this.props.selectedSquares, row);
  }

  getChosenSquares(row){
    return this.getForRow(this.props.chosenSquares, row);
  }

  renderRow(row) {
    let selectedSquares = this.getSelectedSquares(row);
    let chosenSquares = this.getChosenSquares(row);
    return (
      <MemoryRow
        selectedSquares={selectedSquares}
        chosenSquares={chosenSquares}
        {...row}
      />
    );
  }

  render() {
    return (
      <div className="memoryBoard">
        {this.rows.map((row)=>this.renderRow(row))}
      </div>
    );
  }

  componentWillMount() {
    this.generateRows();
  }
}
