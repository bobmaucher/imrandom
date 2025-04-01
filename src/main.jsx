import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/random-number" element={<App defaultCategory="number" />} />
          <Route path="/random-word" element={<App defaultCategory="word" />} />
          <Route path="/random-name" element={<App defaultCategory="name" />} />
          <Route path="/random-password" element={<App defaultCategory="password" />} />
          <Route path="/random-color" element={<App defaultCategory="color" />} />
          <Route path="/random-animal" element={<App defaultCategory="animal" />} />
          <Route path="/random-bible" element={<App defaultCategory="bible" />} />
          <Route path="/random-fact" element={<App defaultCategory="fact" />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
