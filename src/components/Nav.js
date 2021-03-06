import React from 'react';
import classes from './css/Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.nav}>

        <div className={classes.item}>
          <a href="#">Profile</a>
        </div>

        <div className={classes.item}>
          <a href="#">Messages</a>
        </div>

        <div className={classes.item}>
          <a href="#">News</a>
        </div>

        <div className={classes.item}>
          <a href="#">Music</a>
        </div>

        <div className={classes.item}>
          <a href="#">Settings</a>
        </div>

    </nav>);
}

export default Nav;