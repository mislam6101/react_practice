import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Bootstrap5 from './Bootstrap5';
import About from './pages/About';
// import Car from './pages/Car';
import Home from './pages/Home';
import Form from './pages/Form';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
// let carinfo = {brand : "Ferrari", year : 2132, color : "Red"};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Bootstrap5 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/car" element={<Car carinfo={carinfo} />} /> */}
        {/* <Route path="/car" element={<Car brand="Ford" model="M19" year="1995" color="Black" />} /> */}
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
