import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

function Dialogs(props) {
    
    let dialogsData = props.state.dialogsData;
    let messagesData = props.state.messagesData;

    let dialogsElements = dialogsData.map((dialog) => <Dialog id={dialog.id} userName={dialog.name} />);
    let messagesElements = messagesData.map((message) => <Message message={message.message} />);
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements} 
            </div>
            <div className={classes.messages}>
               {messagesElements}
            </div>        
        </div>
    )
}

export default Dialogs;