if (import.meta.env.DEV && new URLSearchParams(window.location.search).has('debug')) {
  void import('react-grab');
  void import('react-scan');
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!(rootElement instanceof HTMLDivElement)) {
  throw new Error('Root element #root was not found.');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
