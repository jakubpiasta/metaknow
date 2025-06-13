import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Dodaj ten import
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Opakuj App w BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);