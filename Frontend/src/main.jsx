import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Services from './components/Services';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/logout" element={<Logout />} /> */}

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
