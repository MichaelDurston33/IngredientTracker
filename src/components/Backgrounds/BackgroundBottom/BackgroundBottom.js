import React from 'react';

import classes from './BackgroundBottom.css';

const backgroundBottom = (props) => {
  return (
    <div className={classes.goo}>
    {props.children}
    </div>
  )
}

export default backgroundBottom;
