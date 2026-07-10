import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/header/index'
import'./App.css'
import Footer from './components/footer';
import OurProducts from './pages/OurProducts';
import Certificates from './pages/Certificates';
import ScrollToTop from './components/scrollToTop';


function App() {
  return (
    <React.Fragment>
       <Router>
        <ScrollToTop /> 
      <Header />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/our-products" element = {<OurProducts />}/>
        <Route path="/certification" element={<Certificates />} />
      </Routes>
      <Footer />
      <a
  href="https://wa.me/9779851423263?text=Hello%20I%20am%20interested%20in%20your%20products"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
>
  <i className="fa-brands fa-whatsapp"></i>
  <span>WhatsApp</span>
</a>

      </Router>
    </React.Fragment>
  );
}

export default App;
