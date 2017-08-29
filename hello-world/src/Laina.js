import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HighTechButtonText extends Component{  
  state ={
    text: "pesho"
  };

  textChange(newText) { this.setState({ text: newText }) }

  handleClick() {
    alert(this.state.text);
  }

  render() {
    return (
      <div>
        <Button onClick={()=>this.handleClick()}/>
        <NekfoText onChange={(e)=>this.textChange(e.target.value)}
          value={this.state.text}/>
      </div>
    );
  }
}

class NekfoText extends Component{
  render(){
    return (
      <input type="text" value={this.props.text} 
       onChange={this.props.onChange}/>
    );
  }
}

class Button extends Component{
  constructor(){
    super();
    this.state = {
      position: 0
    };
  }

  static propTypes = {
    customText: PropTypes.string.isRequired
    
  }

  static defaultProps  = {
    customText: "pesho-defalta"
  }

  updateCounter() {
    this.setState({
      position: this.state.position + 1
    });
  }
  componentDidMount() {
    this.countTimer = setInterval(()=>{this.updateCounter()}, 1);
  }
  componentDidUpdate() {
    console.log(this.countTimer);
    if(this.state.position === 255) {
      clearInterval(this.countTimer);
    }
  }
  
  getStyle() {
    let newColor = (50+this.state.position);
    return {
      background: ("rgb(0,"+newColor+",0)")
    }
  }

  render() {
    return (
      <button style={this.getStyle()} onClick={this.props.onClick}>
          {this.props.customText}
      </button>
    )}
}