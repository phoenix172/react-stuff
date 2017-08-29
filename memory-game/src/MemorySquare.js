import React, { Component } from "react";
import PropTypes from "prop-types";

export default class MemorySquare extends Component {
    //shouldMemorize
    //isSelected
  
    static propTypes={
        size: PropTypes.string.isRequired,
        row: PropTypes.number.isRequired,
        column: PropTypes.number.isRequired,
        isSelected: PropTypes.bool,
        isChosen: PropTypes.bool
    }

    getStyle() {
      var style = {
        width: this.props.size,
        height: this.props.size,
        border: "solid black 1px",
        display: "inline-block"
      };
      if(this.props.isChosen && this.props.isSelected)
        style.backgroundColor="green";
      else if(this.props.isSelected)
        style.backgroundColor="blue";
      else if(this.props.isChosen)
        style.backgroundColor="orange";
      return style;
    }

    handleClick(){
      this.props.onClick(this.props.row, this.props.column);
    }
  
    render() {
      return <span style={this.getStyle()} onClick={()=>this.handleClick()}/>;
    }
  }
  