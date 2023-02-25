import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import '@/styles/main.module.css';
import '@/styles/main.css';
import App from '@/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App message="안녕!!!!" />
  </StrictMode>
);
