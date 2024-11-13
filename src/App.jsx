import { useState } from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Career from './app/join/Career';
import Contact from './app/contact/Contact';
import About from './app/about/About';
import Partner from './components/Partner';
import Cards from './components/Cards';
import AiService from './app/service/AiService';
function App() {


return(<>
    <Router>
      <Routes>
      <Route path="/" element={<Career />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/partner" element={<Partner/>}/>
      <Route path="/card" element={<Cards/>}/>
      <Route path="/artificial-intelligence" element={<AiService/>}/>



      </Routes>
    </Router>
</>)
}

export default App
