import React, { Component } from 'react';

import classes from './RememberBlocks.css';

class resetButton extends Component {
  state = {
    toggleOn: true,
  };

  changeToggleOn = () => {
    this.setState({toggleOn: false})
  }

  render() {

    var addGeneratedColor = {
      backgroundColor: "rgba("+this.props.generatedColor()+", 0.90)",
    }

    return (
         <div style={addGeneratedColor} onClick={this.changeToggleOn} className={this.state.toggleOn ? classes.RememberBlock : classes.clickedRememberBlock} >{this.props.ingredient}</div>
    );
  }
}

export default resetButton;
