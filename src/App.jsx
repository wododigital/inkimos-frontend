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
import BpoService from './app/service/BpoService';
import CloudService from './app/service/CloudSevice';
import DigitalService from './app/service/DigitalService';
import CustomService from './app/service/CustomService';
import ItService from './app/service/ItService';
import Service from './app/Servicehome/Service';
import Home from './app/home/Home';
import IndustryExperts from './app/industry-experts/IndustryExperts';
import JobApplication from './app/join/JobApplication';
import NotFound from './app/notfound/NotFound';
function App() {
 

return(<>
    <Router>
      <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/our-services' element={<Service/>}/>
        <Route path="/careers" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/our-services/artificial-intelligence" element={<AiService/>}/>
        <Route path='/our-services/business-process-outsourcing' element={<BpoService/>}/>
        <Route path='/our-services/cloud-computing' element={<CloudService/>}/>
        <Route path='/our-services/digital-transformation' element={<DigitalService/>}/>
        <Route path='/our-services/custom-software' element={<CustomService/>}/>
        <Route path='/our-services/managed-services-it-support' element={<ItService/>}/>
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/industry-expertise" element={<IndustryExperts/>}/>
        <Route path="/job-application/:id" element={<JobApplication/>}/>
        <Route path="*" element={<NotFound/>}/>

        </Routes>
      <Footer/> 
    </Router>
</>)
}

export default App
