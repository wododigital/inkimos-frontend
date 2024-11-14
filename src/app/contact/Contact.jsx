import {React,useEffect} from 'react';
import ContactBg from '../../assets/contactbg.png';
import Inkimos from '../../assets/IMG 5.png';
import Arrow from '../../assets/IMG 3.svg';
import { FaMailBulk, FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import DubaiBg from '../../assets/dubai.jpg';
import CaliforniaBg from '../../assets/california.png';
import InvengerBg from '../../assets/Invenger.png';
import SectionHeading from '../../components/heading/Heading';

const Contact = () => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[])
  return (
    <>
      <div
        className="w-full min-h-[400px] md:min-h-[777px] flex items-center justify-center relative bg-black"
        style={{
          backgroundImage: `url(${ContactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img src={Arrow} alt='arrow' className='absolute bottom-[-48px] md:bottom-[-160px] right-0 w-[50px] h-[100px] md:w-[154px] md:h-[344px] z-10' />
        <section className="max-w-[1440px] mx-auto px-5 sm:px-12 py-8 lg:py-24">
          <div className="z-10 text-white flex flex-col md:flex-row gap-4">
            {/* Column 1 - Text */}
            <div className="flex-1 flex flex-col items-start space-y-4 md:space-y-8">
              <div>
                <img src={Inkimos} alt="inkimos icon" className="w-12 h-2" />
              </div>

              <div>
                <h1 className="text-[28px] md:text-[40px] text-white font-semibold">
                  Implement Your Ultimate Technological Solutions!
                </h1>
              </div>

              <div>
                <h2 className="text-sm md:text-base text-white">
                  You are one step away from taking a leap of growth, with Inkimos’ range of services across various domains. Reach out to us for more information!
                </h2>
              </div>
              
              <div>
                <span className="flex items-center">
                  <FaMailBulk className='text-xl md:text-2xl hover:text-green' />
                  <a href="mailto:info@inkimos.com" className="ml-3 md:ml-5 text-sm md:text-[14px]">info@inkimos.com</a>
                </span>
              </div>

              <div>
                <span className="flex items-center">
                  <FaPhone className='text-xl md:text-2xl hover:text-green' />
                  <a href="tel:+971566391819" className="ml-3 md:ml-5 text-sm md:text-[14px]">+971 566391819</a>
                </span>
              </div>

              <div className='flex space-x-4 md:space-x-10 text-xl md:text-2xl'>
                <BsTwitterX className='hover:text-green' />
                <FaInstagram className='hover:text-green' />
                <FaLinkedin className='hover:text-green' />
              </div>
            </div>

            {/* Column 2 - Form */}
            <div className="flex-1 flex flex-col bg-grey bg-opacity-55 backdrop-blur-lg p-6 md:p-12 rounded-xl">
              <form className="space-y-4 md:space-y-6">
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border-b border-white py-2 bg-transparent text-white focus:outline-none placeholder:text-white"
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="border-b border-white py-2 bg-transparent text-white focus:outline-none placeholder:text-white"
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-b border-white py-2 bg-transparent text-white focus:outline-none placeholder:text-white"
                  />
                </div>

                <div className="flex flex-col">
                  <select className="border-b border-white py-2 bg-transparent text-white focus:outline-none placeholder:text-white">
                    <option value="" disabled selected className='text-black'>Select Industry Type</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <textarea
                    placeholder="Message"
                    className="border-b border-white py-2 bg-transparent text-white focus:outline-none placeholder:text-white"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <label htmlFor="agree" className="text-white text-sm md:text-base">
                  <input type="checkbox" id="agree" className="mr-2" />
                    I give consent to the processing of my personal data given in the contact form above as well as receiving commercial and marketing communications under the terms and conditions of Inkimos' Privacy Policy.
                  </label>
                </div>

                <div className="flex justify-center">
                  <button type="submit" className="bg-black text-white py-3 px-6 rounded-full hover:bg-green hover:text-black text-base md:text-[19px]">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Map Section */}
      <section className="map-container max-w-[1440px] mx-auto px-5 sm:px-12 py-8 lg:py-24">
        <iframe
          title="Google Map"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d134012.71287225228!2d55.168353323538355!3d25.23672374738399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f432958555551%3A0x19d59190950ee7aa!2sUnique%20World%20Business%20Center%20LLC!5e0!3m2!1sen!2sus!4v1731326681559!5m2!1sen!2sus"
          allowFullScreen
          className="rounded-2xl"
        ></iframe>
      </section>

      {/* Global Operations Section */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-12 pb-8 lg:pb-24">
        <SectionHeading mainTitle="Our Global Operations" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {/* Card 1 */}
          <div className="bg-white border border-green rounded-lg overflow-hidden">
            <img src={DubaiBg} alt="Dubai" className="w-full h-[200px] md:h-[279px] object-cover" />
            <div className="p-4 md:px-5 md:pb-5">
              <h3 className="text-lg md:text-[32px] font-normal md:mb-4">Dubai <span className='text-lightGrey font-medium'>, UAE</span></h3>
              <p className="text-black mt-1 text-sm md:text-[19px]">Block A, office no 803 A- 32 Unique World Business centre Business Village, Near clock tower Deira, Dubai, UAE</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-green rounded-lg overflow-hidden">
            <img src={InvengerBg} alt="Mangalore" className="w-full h-[200px] md:h-[279px] object-cover" />
            <div className="p-4 md:px-5 md:pb-5">
              <h3 className="text-lg md:text-[32px] font-normal md:mb-4">Mangalore <span className='text-lightGrey font-medium'>, India</span></h3>
              <p className="text-black mt-1 text-sm md:text-[19px]">Invenger Towers, Kottara, Mangaluru, Karnataka 575006</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-green rounded-lg overflow-hidden">
            <img src={CaliforniaBg} alt="California" className="w-full h-[200px] md:h-[279px] object-cover" />
            <div className="p-4 md:px-5 md:pb-5">
              <h3 className="text-lg md:text-[32px] font-normal md:mb-4">California <span className='text-lightGrey font-medium'>, USA</span></h3>
              <p className="text-black mt-1 text-sm md:text-[19px]">2775 Tapo St STE 204, Simi Valley, CA 93063</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
