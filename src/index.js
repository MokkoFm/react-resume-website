import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const myClients = [
  {id: 1, name: 'IboxCorp'},
  {id: 2, name: 'Helios Tour'},
  {id: 3, name: 'Formula Spa'},
]

const myTestimonials = [
{id: 1, message: 'It was cool to work with Sergei!'},
{id: 1, message: 'Amazing developer!'},
{id: 1, message: 'Thank you, Sergei!'},
]

ReactDOM.render(
  <React.StrictMode>
    <App myClients={myClients} myTestimonials={myTestimonials}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
