import { Link } from 'react-router-dom';
import InkimosBg from '../../assets/InkimosBg.jpg';
import BpoGreen from '../../assets/bpogreen.png';
import Erp from '../../assets/erp.png';
import Cloud from '../../assets/cloud.png';
import BlueBg from '../../assets/Frame-3-mins.png';
import Ring from '../../assets/Group-41-min.png';
import Ais from '../../assets/aiser.png';
import { FaArrowCircleRight } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import './service.css';
import PartnerService from '../../components/PartnerService';
import {React,useEffect} from 'react';



const Service = () => {
 
  
    useEffect(()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },[])
    
  return (
        <>
   <section
  id="head"
  className="relative h-[400px] flex items-center justify-center text-center bg-cover bg-bottom"
  style={{
    backgroundImage: `url(${InkimosBg})`,
  }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="relative z-10 text-white px-6">
    <h1 className="text-2xl md:text-[48px] font-medium mb-6">
      Our Services
    </h1>
    <p className="text-base font-light max-w-2xl mx-auto">
    Transformation isn’t just a phase—it’s a continuous strategy for success. At Inkimos, we help you harness change, turning challenges into opportunities.
    </p>
  </div>
</section>

<section id='services' className='max-w-[1440px] mx-auto px-5 sm:px-12 py-8 lg:py-24 space-y-10 hidden md:block'>

<section className="flex justify-between px-6 overflow-hidden space-x-6">
      {/* Left Card */}
      <div
        className="relative bg-cover bg-center w-[627px] h-[300px] flex rounded-3xl p-6 translate-x-[-60%] transition-transform duration-500 ease-in-out animate-slide-in-left"
        style={{
          backgroundImage: `url(${BlueBg})`,
        }}
      >
        <h2 className="text-[25px] font-normal text-white">Artificial Intelligence</h2>
        <h3 className="text-[16px] font-light text-white absolute bottom-0 max-w-[60%] pb-6">
          Unlock the potential of data with cutting-edge AI and machine learning solutions that enhance
          decision-making, automate processes, and create new opportunities for growth.
        </h3>
        <Link to="/artificial-intelligence">
          <FaArrowCircleRight className="absolute right-6 bottom-6 w-8 h-8 text-arrowBlue cursor-pointer" />
        </Link>
      </div>

      {/* Right Card */}
      <div
        className="relative bg-cover bg-center w-[627px] h-[300px] flex rounded-3xl p-6 translate-x-[60%] transition-transform duration-500 ease-in-out animate-slide-in-right"
        style={{
          backgroundImage: `url(${Cloud})`,
        }}
      >
        <h2 className="text-[25px] font-normal text-white">Business Process Outsourcing</h2>
        <h3 className="text-[16px] font-light text-white absolute bottom-0 max-w-[60%] pb-6">
        Achieve greater efficiency and growth with a combination of expert consulting and tailored BPO services.
        </h3>
        <Link to="/business-process-outsourcing">
          <FaArrowCircleRight className="absolute right-6 bottom-6 w-8 h-8 text-arrowBlue cursor-pointer" />
        </Link>
      </div>
</section>

        <section className='flex justify-between px-6 overflow-hidden space-x-6'>
        <div
                className="relative bg-cover bg-center w-[413px] h-[300px] flex rounded-3xl p-6 translate-x-[-60%] transition-transform duration-500 ease-in-out animate-slide-in-left border border-green"
                style={{
                backgroundImage: `url(${Erp})`,
                }}
            >
                <h2 className="text-[25px] font-medium text-black">Cloud Computing</h2>
                <h3 className="text-[16px] font-normal text-black absolute bottom-0 max-w-[60%] pb-6">
                Empower your business with secure, flexible, and future-ready cloud environments.        </h3>
                <Link to="/cloud-computing">
                <FaArrowCircleRight className="absolute right-6 top-6 w-8 h-8 text-arrowBlue cursor-pointer" />
                </Link>

                </div>


                <div
                className="relative bg-cover bg-center w-[413px] h-[300px] flex rounded-3xl p-6  transition-transform duration-1000 ease-in-out animate-fade-out animate-fade-in"
                style={{
                backgroundImage: `url(${BpoGreen})`,
                }}
            >
                <h2 className="text-[25px] font-medium text-black">Digital Transformation</h2>
                <h3 className="text-[16px] font-normal text-black absolute bottom-0 max-w-[80%] pb-6">
                Accelerate your digital journey with innovative product engineering, customer-centric experiences, and future-ready strategies.                </h3>
                <Link to="/digital-transformation">
                <FaArrowCircleRight className="absolute right-6 top-6 w-8 h-8 text-arrowBlue cursor-pointer" />
                </Link>

                </div>

                <div
                className="relative bg-cover bg-center w-[413px] h-[300px] flex rounded-3xl p-6 translate-x-[-60%] transition-transform duration-500 ease-in-out animate-slide-in-right border border-green"
                style={{
                    backgroundImage: `url(${Ring})`,
                    }}
                >
                <h2 className="text-[25px] font-medium text-black">Custom Software</h2>
                        <h3 className="text-[16px] font-normal text-black absolute bottom-0 max-w-[70%] pb-6">
                        Empower your business with tailor-made software solutions that streamline operations and drive growth.                             </h3>
                        <Link to="/custom-software">
                        <FaArrowCircleRight className="absolute right-6 top-6 w-8 h-8 text-arrowBlue cursor-pointer" />
                        </Link>
      </div>
      
                
        </section>
        <section id='footer' className='px-8'>
        <div
                className="relative bg-cover bg-center w-[1280px] h-[300px] flex rounded-3xl p-6 translate-y-[60%] transition-transform duration-500 ease-in-out animate-slide-in-top "
                style={{
                    backgroundImage: `url(${Ais})`,
                    }}
                >
                <h2 className="text-[25px] font-medium text-white absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-14">
                Managed Services & IT Support
                </h2>
                <h3 className='text-[16px] text-white font-normal absolute  max-w-[50%] top-24 left-[36%]'>From 24/7 support to network management and cybersecurity, we provide end-to-end managed services that keep your operations secure, efficient, and always running smoothly.</h3>
                <Link to="/managed-services-it-support">
                        <FaArrowCircleRight className="absolute right-16 top-10 w-8 h-8 text-arrowBlue cursor-pointer" />
                </Link>
                </div>
        </section>


</section>

<section id='services' className='max-w-[1440px] mx-auto px-5 sm:px-12 py-8 lg:py-24 space-y-10 md:hidden'>
  {/* First Card Row */}
  <section className="flex flex-col md:flex-row justify-between  overflow-hidden space-y-6 md:space-x-6">
    {/* Left Card */}
    <div
      className="relative bg-cover bg-center w-full md:w-[627px] h-[300px] flex rounded-3xl p-6 translate-x-[-60%] transition-transform duration-500 ease-in-out animate-slide-in-left"
      style={{ backgroundImage: `url(${BlueBg})` }}
    >
      <h2 className="text-[25px] font-normal text-white">Artificial Intelligence</h2>
      <h3 className="text-[16px] font-light text-white absolute bottom-0 max-w-[60%] pb-6">
        Unlock the potential of data with cutting-edge AI and machine learning solutions that enhance decision-making, automate processes, and create new opportunities for growth.
      </h3>
      <Link to="/artificial-intelligence">
      <FaArrowCircleRight className="absolute right-6 top-7 w-8 h-8 text-white cursor-pointer" />
      </Link>
    </div>

    {/* Right Card */}
    <div
      className="relative bg-cover bg-center w-full md:w-[627px] h-[300px] flex rounded-3xl p-6 translate-x-[60%] transition-transform duration-500 ease-in-out animate-slide-in-right"
      style={{ backgroundImage: `url(${Cloud})` }}
    >
      <h2 className="text-[25px] font-normal text-white max-w-[70%]">
        Business Process Outsourcing</h2>
      <h3 className="text-[16px] font-light text-white absolute bottom-0 max-w-[60%] pb-6">
        Achieve greater efficiency and growth with a combination of expert consulting and tailored BPO services.
      </h3>
      <Link to="/business-process-outsourcing">
      <FaArrowCircleRight className="absolute right-6 top-7 w-8 h-8 text-arrowBlue cursor-pointer" />
      </Link>
    </div>
  </section>

  {/* Second Card Row */}
  <section className="flex flex-col md:flex-row justify-between overflow-hidden space-y-6 md:space-x-6">
    <div
      className="relative bg-cover bg-center w-full md:w-[413px] h-[300px] flex rounded-3xl p-6 translate-x-[-60%] transition-transform duration-500 ease-in-out animate-slide-in-left border border-green"
      style={{ backgroundImage: `url(${Erp})` }}
    >
      <h2 className="text-[25px] font-medium text-black">Cloud Computing</h2>
      <h3 className="text-[16px] font-normal text-black absolute bottom-0 max-w-[60%] pb-6">
        Empower your business with secure, flexible, and future-ready cloud environments.
      </h3>
      <Link to="/cloud-computing">
        <FaArrowCircleRight className="absolute right-6 top-7 w-8 h-8 text-arrowBlue cursor-pointer" />
      </Link>
    </div>

    <div
      className="relative bg-cover bg-center w-full md:w-[413px] h-[300px] flex rounded-3xl p-6 transition-transform duration-1000 ease-in-out animate-fade-out animate-fade-in"
      style={{ backgroundImage: `url(${BpoGreen})` }}
    >
      <h2 className="text-[25px] font-medium text-black">Digital Transformation</h2>
      <h3 className="text-[16px] font-normal text-black absolute bottom-0 max-w-[80%] pb-6">
        Accelerate your digital journey with innovative product engineering, customer-centric experiences, and future-ready strategies.
      </h3>
      <Link to="/digital-transformation">
        <FaArrowCircleRight className="absolute right-6 top-7 w-8 h-8 text-arrowBlue cursor-pointer" />
      </Link>
    </div>

    <div
      className="relative bg-cover bg-center w-full md:w-[413px] h-[300px] flex rounded-3xl p-6 translate-x-[-60%] transition-transform duration-500 ease-in-out animate-slide-in-right border border-green"
      style={{ backgroundImage: `url(${Ring})` }}
    >
      <h2 className="text-[25px] font-medium text-black">
        Custom Software</h2>
      <h3 className="text-[16px] font-normal text-black absolute bottom-0 max-w-[70%] pb-6">
        Empower your business with tailor-made software solutions that streamline operations and drive growth.
      </h3>
      <Link to="/custom-software">
        <FaArrowCircleRight className="absolute right-6 top-7 w-8 h-8 text-arrowBlue cursor-pointer" />
      </Link>
    </div>
  </section>

  {/* Footer Section */}
  <section id="footer" className="">
    <div
      className="relative bg-cover bg-center w-full h-[300px] flex rounded-3xl p-6 translate-y-[60%] transition-transform duration-500 ease-in-out animate-slide-in-top"
      style={{ backgroundImage: `url(${Ais})` }}
    >
      <h2 className="text-[25px] font-normal text-white max-w-[70%]">
      Managed Services & IT Support
      </h2>
      <h3 className="text-[16px] font-light text-white absolute bottom-0 max-w-[60%] pb-6">
        From 24/7 support to network management and cybersecurity, we provide end-to-end managed services that keep your operations secure, efficient, and always running smoothly.
      </h3>
      <Link to="/managed-services-it-support">
      <FaArrowCircleRight className="absolute right-6 top-7 w-8 h-8 text-arrowBlue cursor-pointer" />
      </Link>
    </div>
  </section>
</section>

<PartnerService/>

        </>  )
 }

export default Service;