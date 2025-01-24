import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo-01.png';
function Success() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])
  return (
    <div className="min-h-screen bg-[#1A1B2E] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Logo */}
      <div className=" flex justify-center">
        <img src={Logo} alt="inkimos" className='w-1/6 h-1/6'/>
      </div>

      <h2 className="text-white text-4xl sm:text-5xl font-bold mb-4 text-center">
        Thank you !!!
      </h2>
      
      <p className="text-gray-300 text-lg sm:text-xl text-center mb-12">
        For reaching out to us, our team will get back to you soon...
      </p>

      <Link
        to="/"
        className="bg-black hover:bg-blue text-white px-8 py-3 rounded-full transition-colors duration-300 text-lg"
      >
        Explore More
      </Link>
    </div>
  );
}

export default Success; 