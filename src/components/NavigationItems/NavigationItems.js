import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>About</NavigationItem>
        <NavigationItem link="/">Contact</NavigationItem>
    </ul>
);

export default navigationItems;
