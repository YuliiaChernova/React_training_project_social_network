import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

function Dialogs(props) {
    let dialogsData = props.dialogsPage.dialogsData;
    let messagesData = props.dialogsPage.messagesData;
    let messageInput = props.dialogsPage.inputValue;

    let dialogsElements = dialogsData.map((dialog) => <Dialog id={dialog.id} userName={dialog.name} />);
    let messagesElements = messagesData.map((message) => <Message message={message.message} />);

    let newMessageElement = React.createRef();

    let onSendMessage = () => {
        let message = newMessageElement.current.value;
        props.sendMessage(message);
    };
 
    let onChangeMessageInput = (e) => {
        let letter = e.target.value;
        props.changeMessageInput(letter);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.textarea}>
                    <div><textarea ref={newMessageElement} value={messageInput} onChange={onChangeMessageInput}></textarea></div>
                    <div><button onClick={onSendMessage}>New message</button></div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;