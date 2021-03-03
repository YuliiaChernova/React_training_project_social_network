import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <div className={classes.header}>
            <img src="https://bower.io/img/bower-logo.png" />
            <NavLink to="/users">Users &#128269;</NavLink>
        </div>
    )
}

export default Header;