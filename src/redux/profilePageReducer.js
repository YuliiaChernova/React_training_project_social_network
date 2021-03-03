const ADD_POST = 'ADD-POST';
const CHANGE_POST_INPUT = 'CHANGE-POST-INPUT';
const LIKE = 'LIKE';

let initialState = {
    postsData: [
        { id: 1, text: 'It is my first post', likesCount: 15 },
        { id: 2, text: 'Lets chatting', likesCount: 6 },
    ],
    inputValue: '',
}

const profilePageReducer = (state = initialState, action) => {

    switch (true) {
        case action.type === ADD_POST:
            return {
                ...state,
                inputValue: '',
                postsData: [...state.postsData, {id: Math.random(),
                                                 text: action.postMessage,
                                                 likesCount: 0,}]
                };
            
        case action.type === CHANGE_POST_INPUT:
            return {
                ...state,
                inputValue: action.letter,
            };
            
        /*case action.type === LIKE:
            stateCopy.postsData[0].likesCount += 1;
            return stateCopy;*/
            
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

export const likeClickActionCreator = () => {
    return {
        type: LIKE
    }
};

export default profilePageReducer;