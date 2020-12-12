const ADD_POST = 'ADD-POST';
const CHANGE_POST_INPUT = 'CHANGE-POST-INPUT';

const profilePageReducer = (state, action) => {
    switch (true) {
        case action.type === ADD_POST:
            let newPost = {
                id: 6,
                text: action.postMessage,
                likesCount: 0,
            };
            state.postsData.push(newPost);
            state.inputValue = '';
            return state;
        case action.type === CHANGE_POST_INPUT:
            state.inputValue = action.letter;
            return state;
        default:
            return state;
    };
};

export const addPostActionCreator = (postMessage) => {
    return {
        type: ADD_POST,
        postMessage: postMessage,
    }
};

export const changePostInputActionCreator = (letter) => {
    return {
        type: CHANGE_POST_INPUT,
        letter: letter,
    }
};

export default profilePageReducer;