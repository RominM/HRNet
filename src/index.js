import React from 'react';
import ReactDOM from 'react-dom';
// import reportWebVitals from './utils/perf/reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/reset.css';
import './styles/app.css';
import './styles/sass/main.scss';

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <App />
      </Router>
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
