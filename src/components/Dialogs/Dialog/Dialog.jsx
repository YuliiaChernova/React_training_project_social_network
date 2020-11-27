import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

function Dialog(props) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}> {props.userName} </NavLink>
        </div>
    )
}

export default Dialog;