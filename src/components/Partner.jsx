import React from 'react';
import Globe from '../assets/globe.mp4';
import { Link } from 'react-router-dom';
import Inkimos from '../assets/IMG 5.png';

const Partner = () => {
  return (
    <section className="bg-[#00011C]  mt-8"> {/* Added margin top to avoid overlap */}
      <div className="max-w-[1440px] mx-auto px-5 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center text-left py-8">
          <img src={Inkimos} alt="Inkimos icon" className="w-6 h-1 mb-3 md:mb-6" />
          <h2 className="text-3xl sm:text-[32px] font-medium text-white mb-3 md:mb-6">
            Partner With Us
          </h2>
          <p className="text-base sm:text-[22px] font-medium text-white mb-3 md:mb-6">
            At Inkimos, we’re more than just consultants – we’re your long-term partners.
          </p>
          <button className="bg-green text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full sm:font-medium text-[14px] sm:text-[16px] mt-4 self-start">
            <Link to="/contact">Connect</Link>
          </button>
        </div>

        {/* Right Section (Video + Buttons) */}
        <div className="flex justify-center items-center relative ">
          {/* Video */}
          <video
            className="w-full sm:w-[85%] lg:w-[800px] h-[250px] sm:h-[400px] md:h-[400px]  object-cover rounded-full   "
            autoPlay
            muted
            loop
             playsInline
             preload="auto"
             src={Globe}
          >
            <source src={Globe} type="video/mp4" />
            {/* Your browser does not support the video tag. */}
          </video>
          <div className="absolute inset-0 bg-service opacity-30 rounded-full  "></div>

          {/* Buttons on Video */}
          <div className="absolute top-12 left-4 sm:left-8 md:left-12 z-10"> {/* Adjusted button positioning */}
            <button className="bg-black border border-green text-white px-4 py-2 rounded-xl text-xs sm:text-base">
              <Link to="/contact">Expertise You Can Trust</Link>
            </button>
          </div>
          <div className="absolute center right-8 md:right-4 z-10"> {/* Adjusted button positioning */}
            <button className="bg-black border border-green text-white px-4 py-2 rounded-xl text-xs sm:text-base">
              <Link to="/contact">End-to-End Support</Link>
            </button>
          </div>
          <div className="absolute bottom-12 left-4 sm:left-8 md:left-12 z-10"> {/* Adjusted button positioning */}
            <button className="bg-black border border-green text-white px-4 py-2 rounded-xl text-xs sm:text-base">
              <Link to="/contact">Driving Innovation Together</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
