import { BrowserRouter } from 'react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import './styles/main.css';
import './styles/motion.css';
import './styles/hero.css';

const container = document.getElementById('app');

if (!container) {
  throw new Error('No se encontró #app en index.html');
}

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
