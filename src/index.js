import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from './redux/state.js';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        changePostInput={store.changePostInput.bind(store)}
        sendMessage={store.sendMessage.bind(store)}
        changeMessageInput={store.changeMessageInput.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
