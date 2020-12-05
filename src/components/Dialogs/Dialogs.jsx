import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

function Dialogs(props) {

    let dialogsData = props.state.dialogsData;
    let messagesData = props.state.messagesData;
    let messageInput = props.state.inputValue;

    let dialogsElements = dialogsData.map((dialog) => <Dialog id={dialog.id} userName={dialog.name} />);
    let messagesElements = messagesData.map((message) => <Message message={message.message} />);

    let newMessageElement = React.createRef();

    let changeMessageInput = () => {
        let letter = newMessageElement.current.value;
        props.changeMessageInput(letter);
    };

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        props.sendMessage(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.textarea}>
                    <div><textarea ref={newMessageElement} value={messageInput} onChange={changeMessageInput}></textarea></div>
                    <div><button onClick={sendMessage}>New message</button></div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;