import { useState } from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Career from './app/join/Career';
import Contact from './app/contact/Contact';
import About from './app/about/About';
import Partner from './components/Partner';
import Cards from './components/Cards';
import AiService from './app/service/AiService';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PrivacyPolicy from './app/privacy-policy/PrivacyPolicy';
import TermsAndConditions from './app/terms-and-conditions/TermsAndConditions';

function App() {
  return(<>

    
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/partner" element={<Partner/>}/>
            <Route path="/card" element={<Cards/>}/>
            <Route path="/artificial-intelligence" element={<AiService/>}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
            <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
          </Routes>
        <Footer/>  
      </Router>
  </>)
}

export default App
