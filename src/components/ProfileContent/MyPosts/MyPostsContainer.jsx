import React from 'react';
import { addPostActionCreator, changePostInputActionCreator } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        inputValue: state.profilePage.inputValue,
        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postMessage) => {
            let action = addPostActionCreator(postMessage);
            dispatch(action);
        },
        changePostInput: (letter) => {
            let action = changePostInputActionCreator(letter);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;