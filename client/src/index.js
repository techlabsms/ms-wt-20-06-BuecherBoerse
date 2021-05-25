import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { AppProvider } from './context/OverallContext';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
