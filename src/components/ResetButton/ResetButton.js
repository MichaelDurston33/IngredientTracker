import React, { Component } from 'react';

import classes from './ResetButton.css';
import Aux from '../../hoc/Aux'

class resetButton extends Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }

  render() {

    return (
      <Aux>
          <button className={this.state.isTop ? classes.ResetButton : classes.ghostResetButton} onClick={this.props.resFunc}>RESET</button>
        </Aux>
    );
  }
}

export default resetButton;
