// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
// Components
import Index from './Components/Index/Index';
import Crear from './Components/Crear/Crear.tsx';
// CSS 
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* paguina de inicio */}
        <Route path="/" element={<Index/>} />
        <Route path="/home" element={<Index/>} />

        <Route path="/crear" element={<Crear/>} />

      </Routes>
    </BrowserRouter> 
  </React.StrictMode>
);
