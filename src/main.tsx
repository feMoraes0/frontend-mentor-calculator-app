import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppController from './controller/App.controller.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppController />
  </StrictMode>,
);
