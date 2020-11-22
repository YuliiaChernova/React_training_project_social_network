import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import ProfileContent from './components/ProfileContent/ProfileContent';
import Settings from './components/Settings/Settings';


function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/profile" component={ProfileContent} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
        </div>

      </div>
    </BrowserRouter>
  ); 
}

export default App;
