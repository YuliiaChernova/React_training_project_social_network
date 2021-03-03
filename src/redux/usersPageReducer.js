const FOLLOW_BTN_CLICK = 'FOLLOW-BTN-CLICK';
const UNFOLLOW_BTN_CLICK = 'UNFOLLOW-BTN-CLICK';
const SET_USERS = 'SET-USERS';

let initialState = {
    usersData: []
}

const usersPageReducer = (state = initialState, action) => {
    switch (true) {
        case action.type === FOLLOW_BTN_CLICK:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case action.type === UNFOLLOW_BTN_CLICK:
            return {
                ...state,
                usersData: state.usersData.map(u=> {
                    if(u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case action.type === SET_USERS: {
            return {...state, usersData: [...action.usersData]}
        }
            

        default:
            return state;
    }
};

export const followActionCreator = (id) => {
    return {
        type: FOLLOW_BTN_CLICK,
        id: id,
    }
};

export const unfollowActionCreator = (id) => {
    return {
        type: UNFOLLOW_BTN_CLICK,
        id: id,
    }
};

export const setUsersActionCreator = (usersData) => {
    return {
        type: SET_USERS,
        usersData: usersData
    }
}

export default usersPageReducer;