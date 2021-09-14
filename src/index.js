import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


const link = React.createElement("a", { href: "reactjs.org" }, "Ssylka");
console.log(link)
