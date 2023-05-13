import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga'; //measurement ID...?
// https://medium.com/finnovate-io/integrating-google-tag-manager-with-a-react-app-5a8584ee2251
// ReactGA.initialize('G-M5LBQH3GBT');

const tagManagerArgs = {
  gtmId: 'GTM-N63P4XV',
};

TagManager.initialize(tagManagerArgs);

// const TRACKING_ID = 'G-M5LBQH3GBT'; //measurement ID...?
// ReactGA.initialize(TRACKING_ID); //measurement ID...?
// ReactGA.pageview(window.location.pathname + window.location.search); //measurement ID...?
// https://analyticahouse.com/blog/how-to-integrate-google-analytics-4-to-react
// https://blog.saeloun.com/2022/02/17/how-to-integrate-react-app-with-google-analytics/
// https://www.npmjs.com/package/react-ga

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
