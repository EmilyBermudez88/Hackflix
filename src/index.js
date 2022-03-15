import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//in order to use routing logic, you need to import the web app router into the project
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* in order to enable React Router to control and manage all the URLs inside the single-page application, we need to wrap <Router> around the application */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
