import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

function Dialogs() {

    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Mary'},
        {id: 4, name: 'Helga'},
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Hakuna Matata'},
        {id: 4, message: 'How are you?'},
    ];

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