import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import ProfileContent from './components/ProfileContent/ProfileContent';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';


function App(props) {
  return (
    <div className="app-wrapper">

      <Header />

      <Nav state={props.state} />


      <div className="app-wrapper-content">
        <Route path="/profile"
          render={() => <ProfileContent/>} />

        <Route path="/dialogs"
          render={() => <DialogsContainer/>} />

        <Route path="/music" component={Music} />
        <Route path="/news" component={News} />
        <Route path="/settings" component={Settings} />

        <Route path="/friends"
          render={() => <Friends
            state={props.state.sideBar} />} />
        <Route path="/users"
          render={() => <UsersContainer/>} />
      </div>



    </div>
  );
}

export default App;
