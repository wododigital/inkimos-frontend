import {React, useEffect, useRef} from 'react';
import HomeBg from '../../assets/homepage.gif'; 
import { Link } from 'react-router-dom';
import Lottie from "lottie-web";
import Animation from '../../assets/Animation.json';


const Home = () => {
    const scrollIcon=useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
          container: scrollIcon.current,
          animationData: Animation, 
          renderer: "svg",
          loop: true, 
          autoplay: true, 
        });
      }, []);
    
  return (
    <>
      <section
        id="head"
        className="relative w-full h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${HomeBg})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center px-4">
            <h1 className="text-[48px] font-medium">
              Don’t Let Change Happen to You. Make It Work for You<br />—With Inkimos
            </h1>
            <Link to="/contact">
              <div className="p-3 sm:pt-10 px-6 sm:px-0 mt-6"> 
                <button className="bg-green text-black px-[15px] py-[8px] sm:px-[30px] sm:py-[15px] rounded-full sm:font-medium text-[12px] sm:text-[19px]">
                  Connect with us
                </button>
              </div>
            </Link>
            <div ref={scrollIcon} style={{ width: "100px", height: "100px" }}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
