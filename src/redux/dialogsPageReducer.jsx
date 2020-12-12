const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_MESSAGE_INPUT = 'CHANGE-MESSAGE-INPUT';

const dialogsPageReducer = (state, action) => {
    switch (true) {
        case action.type === SEND_MESSAGE:
            let newMessage = {
                id: 1,
                message: action.message,
            };
            state.messagesData.push(newMessage);
            state.inputValue = '';
            return state;
        case action.type === CHANGE_MESSAGE_INPUT:
            state.inputValue = action.letter;
            return state;
        default:
            return state;
    };
};

export const changeMessageInputActionCreator = (letter) => {
    return {
        type: CHANGE_MESSAGE_INPUT,
        letter: letter
    }
}

export const sendMessageActionCreator = (message) => {
    return {
        type: SEND_MESSAGE,
        message: message
    }
}

export default dialogsPageReducer;