import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import './styles/main.css';

const container = document.getElementById('app');

if (!container) {
  throw new Error('No se encontró #app en index.html');
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
