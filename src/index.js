import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const myMessage = 'Something like that';

root.render(
  <React.StrictMode>
    <App message={myMessage} />
  </React.StrictMode>
);
