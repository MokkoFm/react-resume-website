import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addComment } from './redux/state';

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addComment={addComment}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};