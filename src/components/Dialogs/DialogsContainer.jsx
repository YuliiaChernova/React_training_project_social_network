import React from 'react';
import { changeMessageInputActionCreator, sendMessageActionCreator } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        inputValue: state.dialogsPage.inputValue,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => {
            let action = sendMessageActionCreator(message);
            dispatch(action);
        },
        changeMessageInput: (letter) => {
            let action = changeMessageInputActionCreator(letter);
            dispatch(action);
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;