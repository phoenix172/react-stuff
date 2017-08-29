import React, { Component } from "react";
import MemoryGrid from "./MemoryGrid.js";

const phases = {
    getReady: "getReady",
    memorize: "memorize",
    recall: "recall",
    gameOver: "gameOver"
  };

const wait = ms=>new Promise(resolve=>setTimeout(resolve, ms));
const memorizeTimeMs = 2000;
const getReadyTimeMs = 2000;


export default class Game extends Component {

  state = {
    currentPhase: phases.getReady,
    selectedSquares: [
      {row:1, column:2},
      {row:2, column:3},
      {row:1, column:3}
    ],
    chosenSquares: [
      {row:1, column:2},
      {row:3, column:3},
      {row:1, column:3}
    ]
  };

  static defaultProps = {
    squareSize: "50px",
    gridSize: 5
  };

  render() {
    return (
      <div>
        <MemoryGrid
          squareSize={this.props.squareSize}
          gridSize={this.props.gridSize}
          squareClicked={(row, column)=>this.onSquareClicked(row, column)}
          selectedSquares={this.state.selectedSquares}
          chosenSquares={this.state.chosenSquares}
        />
        <span className="message">{this.state.currentPhase}</span>
        {/* <GameControls /> */}
      </div>
    );
  }

  onSquareClicked(row, column){
    console.log(row, column);
    var currentState = this.state;
    currentState.selectedSquares.push({row, column});
    this.setState(currentState);
  }

  changePhase(newPhase){
    return this.promiseState({currentPhase: newPhase});
  }

  promiseState(newState){
    return new Promise(resolve=>this.setState(newState, resolve));
  }

  componentDidMount(){
    //this.getReadyPhase();
  }

  getReadyPhase(){
    this.changePhase(phases.getReady)
    .then(()=>wait(getReadyTimeMs))
    .then(()=>this.memorizePhase());
  }

  memorizePhase(){
    this.changePhase(phases.memorize)
    .then(()=>wait(memorizeTimeMs))
    .then(()=>this.recallPhase());
  }

  recallPhase(){
    this.changePhase(phases.recall)
    .then(()=>wait(getReadyTimeMs))
    .then(()=>this.gameOverPhase());
  }

  gameOverPhase(){
    this.changePhase(phases.gameOver);
  }
}
