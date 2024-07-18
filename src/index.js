import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// 개발 환경에서만 MSW 시작
 if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser');
    worker.start().then(() => {
      console.log('MSW has started!');
  });
  } 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <App />
);

reportWebVitals();
