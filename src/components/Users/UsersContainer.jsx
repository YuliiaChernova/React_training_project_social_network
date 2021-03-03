import React from 'react';
import {connect} from 'react-redux';
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/usersPageReducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (id) => {
            let action = followActionCreator(id);
            dispatch(action);
        },
        unfollowUser: (id) => {
            let action = unfollowActionCreator(id);
            dispatch(action);
        },
        setUsers: (users) => {
            let action = setUsersActionCreator(users);
            dispatch(action);
        }
    }
}

const usersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default usersContainer;