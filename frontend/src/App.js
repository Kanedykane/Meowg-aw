import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/main.css';
import './assets/css/gallery.css';
import './assets/css/shop.css';
import { useEffect, useState } from 'react';

// Favicons
import faviconPng from './assets/img/favicon.png';
import appleTouchIconPng from './assets/img/apple-touch-icon.png';

// Font Awesome
import 'font-awesome/css/font-awesome.min.css';

// Additional Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// Icons dependencies
import 'boxicons/css/boxicons.min.css';
import 'remixicon/fonts/remixicon.css';
import 'font-awesome/css/font-awesome.min.css';
import WebFont from 'webfontloader';

// pages & components
import Home from './pages/Home';
import Shop from './pages/Shop';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className="pages"></div>
      <Routes>
        <Route 
          path="/" 
          element={<Home />}
        />
        <Route 
          path="/shop" 
          element={<Shop />}
        />
        <Route 
          path="/gallery" 
          element={<Gallery />}
        />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
