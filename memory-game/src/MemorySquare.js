import React, { Component } from "react";
import PropTypes from "prop-types";

export default class MemorySquare extends Component {
    //shouldMemorize
    //isSelected
  
    static propTypes={
        size: PropTypes.string.isRequired
    }

    getStyle() {
      return {
        width: this.props.size,
        height: this.props.size,
        border: "solid black 1px",
        display: "inline-block"
      };
    }
  
    render() {
      return <span style={this.getStyle()} />;
    }
  }
  