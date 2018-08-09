import React from 'react';

import classes from './BackgroundTop.css';
import Backdrop from '../../../src/assets/images/kiwi.jpg';
import Toolbar from '../Toolbar/Toolbar';
import Aux from '../../hoc/Aux';


const backgroundTop = (props) => {

  var imageBackground = {
    backgroundImage: `url(${Backdrop})`,
    opacity: 0.4
  }

  return (
    <Aux>
    <Toolbar />
    <div className={classes.imgbox}>
      <div className={classes.centerFit} style={imageBackground}>
      <p>{props.children}</p>
      </div>
    </div>
    </Aux>
  )
}

export default backgroundTop;
