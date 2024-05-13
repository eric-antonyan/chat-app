import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnimatePresence mode={'wait'}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AnimatePresence>
  </React.StrictMode>
);