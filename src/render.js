import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addComment, updateComment } from './redux/state';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addComment={addComment} updateComment={updateComment}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};