import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga';

const tagManagerArgs = {
  gtmId: 'GTM-N63P4XV',
};

TagManager.initialize(tagManagerArgs);

const TRACKING_ID = 'G-M5LBQH3GBT';
ReactGA.initialize(TRACKING_ID);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
