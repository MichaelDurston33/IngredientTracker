import React from 'react';

import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems'

const resetButton = (props) => (
  <header className={classes.Toolbar}>
    <NavigationItems />
  </header>
)

export default resetButton;
