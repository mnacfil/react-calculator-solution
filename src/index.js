import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './Calculator';
import { AppProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Calculator />
    </AppProvider>
  </React.StrictMode>
);
