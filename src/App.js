import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Nav from './components/Nav';
import ProfileContent from './components/ProfileContent';


function App() {
  return (
    <div className="app-wrapper">

      <Header />
      <Nav />
      <ProfileContent />

    </div>
  ); 
}

export default App;
