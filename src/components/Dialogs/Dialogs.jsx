import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1" activeClassName={classes.active}> Alex </NavLink>
                </div> 
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={classes.active}> Bob </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={classes.active}> Mary </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={classes.active}> Helga </NavLink>
                </div>
                
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>Anybody home?</div>
            </div>        
        </div>
    )
}

export default Dialogs;