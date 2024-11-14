import { useState } from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Career from './app/join/Career';
import Contact from './app/contact/Contact';
import About from './app/about/About';
import Partner from './components/Partner';
import Cards from './components/Cards';
import AiService from './app/service/AiService';
import BpoService from './app/service/BpoService';
import CloudService from './app/service/CloudSevice';
import DigitalService from './app/service/DigitalService';
import CustomService from './app/service/CustomService';
import ItService from './app/service/ItService';
import TermsConditions from './app/policy/TermsConditions';
import PrivacyPolicy from './app/policy/PrivacyPolicy';
import Service from './app/Servicehome/Service';
import Home from './app/home/Home';
function App() {


return(<>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/service' element={<Service/>}/>
      <Route path="/career" element={<Career />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/partner" element={<Partner/>}/>
      <Route path="/card" element={<Cards/>}/>
      <Route path="/artificial-intelligence" element={<AiService/>}/>
      <Route path='/business-process-outsourcing' element={<BpoService/>}/>
      <Route path='/cloud-computing' element={<CloudService/>}/>
      <Route path='/digital-transformation' element={<DigitalService/>}/>
      <Route path='/custom-software' element={<CustomService/>}/>
      <Route path='/managed-services-it-support' element={<ItService/>}/>
      <Route path='/terms-and-conditions' element={<TermsConditions/>}/>
      <Route path='/privacy-policy/' element={<PrivacyPolicy/>}/>
      </Routes>
    </Router>
</>)
}

export default App
