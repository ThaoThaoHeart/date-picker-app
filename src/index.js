import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import ContextWrapper from './ContextWrapper'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ContextWrapper>
        <App />
      </ContextWrapper>
    </React.StrictMode>
  </BrowserRouter>
);
