// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
// Components
import Index from './Components/Index/Index';
import CrearTexto from './Components/Crear/CrearTexto/CrearTexto.tsx';
import CrearRutas from './Components/Crear/CrearRutas/CrearRutas.jsx';
import Documents from './Components/documents/documents.jsx';
// CSS 
import './index.css';
import './Components/Generals/Inputs/Input.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* paguina de inicio */}
        <Route path="/" element={<Index/>} />
        <Route path="/home" element={<Index/>} />

        <Route path="/documents" element={<Documents/>} />

        <Route path="/crear/texto" element={<CrearTexto/>} />
        <Route path="/crear/rutas" element={<CrearRutas/>} />

        <Route path="/view/:id_documento" element={<CrearTexto/>} />

      </Routes>
    </BrowserRouter> 
  </React.StrictMode>
);
