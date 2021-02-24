import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-bootstrap';

//import 'chrome-extension://hiciebfpfojafpoijaknlninmnblaflo/static/js/2.05222e72.chunk.js.map';
//import 'chrome-extension://hiciebfpfojafpoijaknlninmnblaflo/static/js/main.005acace.chunk.js.map';
//import 'chrome-extension://hiciebfpfojafpoijaknlninmnblaflo/static/css/main.8c8b27cf.chunk.css.map';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
