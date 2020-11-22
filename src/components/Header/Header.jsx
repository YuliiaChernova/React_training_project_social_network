import React from 'react';
import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <img src="https://bower.io/img/bower-logo.png" />
        </header>
    )
}

export default Header;