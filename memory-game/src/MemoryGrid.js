import React, { Component } from "react";
import PropTypes from "prop-types";
import MemoryRow from "./MemoryRow.js";

export default class MemoryGrid extends Component {
  static propTypes = {
    gridSize: PropTypes.number.isRequired,
    squareSize: PropTypes.string.isRequired
  };

  static defaultProps = {
    squareSize: "50px",
    gridSize: 5
  };

  createRow(rowNumber) {
    return {
      rowNumber: rowNumber,
      rowSize: this.props.gridSize,
      key: "row" + rowNumber,
      squareSize: this.props.squareSize
    };
  }

  generateRows() {
    this.rows = [];
    for (let i = 0; i < this.props.gridSize; i++) {
      this.rows.push(this.createRow(i));
    }
  }

  renderRow(row) {
    return <MemoryRow {...row} />;
  }

  render() {
    return (
      <div className="memoryBoard">
        {this.rows.map(this.renderRow)}
      </div>
    );
  }
  
  havePropsChanged(oldProps, newProps) {
    return (
      oldProps.gridSize !== newProps.gridSize ||
      oldProps.squareSize !== newProps.squareSize
    );
  }

  shouldComponentUpdate(newProps, newState) {
    debugger;
    return this.havePropsChanged(this.props, newProps);
  }

  componentWillUpdate() {
    console.log("grid will update");
    this.generateRows();
    console.log(this.rows);
  }

  componentWillMount() {
    this.generateRows();
  }
}
