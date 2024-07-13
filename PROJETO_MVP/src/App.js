// App.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import AboutMe from './pages/AboutMe'; // Importe o componente AboutMe

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id/:title' element={<ProductDetails />} />
          <Route path='/about' element={<AboutMe />} /> {/* Nova rota para AboutMe */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
