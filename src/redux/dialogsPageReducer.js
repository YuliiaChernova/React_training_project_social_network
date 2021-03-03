const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_MESSAGE_INPUT = 'CHANGE-MESSAGE-INPUT';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Mary' },
        { id: 4, name: 'Helga' },
    ],
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Hakuna Matata' },
        { id: 4, message: 'How are you?' },
    ],
    inputValue: '',
}

const dialogsPageReducer = (state = initialState, action) => {

    switch (true) {
        case action.type === SEND_MESSAGE:
            return {
                ...state,
                inputValue: '',
                messagesData: [...state.messagesData, {id: Math.random(),
                                                       message: action.message,}] 
            };

        case action.type === CHANGE_MESSAGE_INPUT:
            return {
                ...state,
                inputValue: action.letter,
            };
            
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