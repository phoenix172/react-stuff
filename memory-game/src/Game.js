import React, { Component } from "react";
import MemoryGrid from "./MemoryGrid.js"

export default class Game extends Component {
  state={
    gridSize: 5
  }
  incrementGridSize(){
    let newGridSize = this.state.gridSize+1;
    this.setState({
      gridSize: newGridSize
    });
  }
  render() {
      return (
        <div onClick={()=>this.incrementGridSize()}>
        <MemoryGrid gridSize={this.state.gridSize}/>
        {/* <GameControls /> */}
        </div>
      );
  }
}
