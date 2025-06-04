import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import About from './About';
import Contact from './Contact';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

export default App; 