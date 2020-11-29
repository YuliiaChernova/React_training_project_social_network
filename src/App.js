import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import ProfileContent from './components/ProfileContent/ProfileContent';
import Settings from './components/Settings/Settings';


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Header />
        <Nav state={props.state}/>
        <div className="app-wrapper-content">

          <Route path="/profile"
            render={() => <ProfileContent
              state={props.state.profilePage} />} />

          <Route path="/dialogs"
            render={() => <Dialogs
              state={props.state.dialogsPage} />} />

          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
          
          <Route path="/friends"
            render={() => <Friends
              state={props.state.sideBar} />} />

           
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
