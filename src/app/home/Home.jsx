import React, { useEffect, useRef } from 'react';
import HomeBg from '../../assets/homepage.gif';
import { Link } from 'react-router-dom';
import Lottie from "lottie-web";
import Office from '../../assets/office.webp';
import Animation from '../../assets/Animation.json';
import Inkimos from '../../assets/IMG 5.png'
import CardsHome from '../../components/CardsHome';
import Home1 from '../../assets/Group 65.png';
import Home2 from '../../assets/Group 64.png';
import Home3 from '../../assets/AppWindow.png';
import Home4 from '../../assets/Group 73.png';
import Home5 from '../../assets/Group 74.png';
import Home6 from '../../assets/ChalkboardTeacher.png';
import Home7 from '../../assets/Frame 133.png';
import { FaArrowCircleRight } from "react-icons/fa";
import Service1 from '../../assets/Frame 131.png';
import Service2 from '../../assets/Frame 132.png';
import Service3 from '../../assets/Layer 1.png'
import Counterhome from '../../components/conuter/Counterhome';
import SectionHeading from '../../components/heading/Heading';
import BlogCards from '../blog/Blogcards';
import './home.css'

const Home = React.memo(() => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])
  const scrollIcon = useRef(null); 
  const animationInstance = useRef(null); 
  const imageSectionRef = useRef(null);

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.2, // Trigger when 20% of the section is visible
    });

    if (imageSectionRef.current) {
      observer.observe(imageSectionRef.current);
    }

    return () => {
      if (imageSectionRef.current) {
        observer.unobserve(imageSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (scrollIcon.current && !animationInstance.current) {
      // Only load the animation if there's no existing instance
      animationInstance.current = Lottie.loadAnimation({
        container: scrollIcon.current,
        animationData: Animation,
        renderer: "svg",
        loop: true,
        autoplay: true,
      });
    }

    // Cleanup function to destroy animation on unmount
    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
        animationInstance.current = null; // Reset the instance
      }
    };
  }, []);
  const cardData = [
    {
      title: 'Cloud Computing Services',
      description:
        'Transform your infrastructure with secure, flexible cloud environments.',
      mainImage: Home1,
      secondaryImage: Inkimos,
      link: '/our-services/cloud-computing',
    },
    {
      title: 'AI & Machine Learning',
      description:
        'Leverage AI to automate processes and unlock new insights for your business.',
      mainImage: Home2,
      secondaryImage: Inkimos,
      link: '/our-services/artificial-intelligence',

    },
    {
      title: 'Software Development',
      description:
        'Developing tailored solutions that streamline operations and enhance productivity.',
      mainImage: Home3,
      secondaryImage: Inkimos,
      link: '/our-services/custom-software',

    },
    {
      title: 'Business Consulting & BPO',
      description:
        'Drive efficiency and cost-effectiveness through strategic outsourcing and consulting.',
      mainImage: Home4,
      secondaryImage: Inkimos,
      link: '/our-services/business-process-outsourcing',
    },
    {
      title: 'Digital Transformation',
      description:
        'Empowering your business with innovative digital solutions for sustainable growth.',
      mainImage: Home5,
      secondaryImage: Inkimos,
      link: '/our-services/digital-transformation',
    },
    {
      title: 'Managed Services & IT Support',
      description:
        "Round-the-clock support to ensure business continuity and IT excellence",
      mainImage: Home6,
      secondaryImage: Inkimos,
      link: '/our-services/managed-services-it-support'
    },
  ];

  return (
    <>
      <section
        id="head"
        className="relative w-full h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${HomeBg})` }}
      >
        <div className="absolute inset-0 flex items-end justify-center ">
          <div className="text-white text-center px-4 pb-32 sm:pb-0 4xl:pb-28">
            <h1 className="text-[25px] md:text-[38px] font-medium animate-slide-in-top">
              Don’t Let Change Happen to You. Make It Work for You<br />—With Inkimos
            </h1>
            <div className="p-3 sm:pt-10 px-6 sm:px-0 mt-6 btn animate-fade-out">
              <Link to="/contact">
                <button className="bg-green text-black px-[15px] py-[8px] sm:px-[30px] sm:py-[15px] rounded-full sm:font-medium text-[12px] sm:text-[19px]">
                  Connect with us
                </button>
              </Link>
            </div>
            <div
              id="scroll-icon"
              ref={scrollIcon}
              style={{ width: "150px", height: "150px" }}
              className="mx-auto mt-10 md:mt-20 animate-fade-out"
            ></div>
          </div>
        </div>
      </section>


      <section id="service" className="bg-black">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-12 pt-8 lg:py-24 relative bg-black flex flex-col items-center space-y-6">
          <img src={Inkimos} alt="Inkimos icon" className="w-12 h-2" />
          <h2 className="text-[16px] md:text-[24px] text-white text-center  md:px-20">
            Transformation isn’t just a phase—it’s a continuous strategy for success. At Inkimos, we help you harness change, turning challenges into opportunities.
          </h2>
          <CardsHome cardData={cardData} />
        </div>
      </section>

      <section id='solution' className='max-w-[1440px] mx-auto px-5 lg:px-12 pt-8 lg:pt-24 pb-[66px] md:pb-[0px] space-y-10 hidden md:block'>

        <section className="flex justify-between overflow-hidden space-x-6">
          {/* Left Card */}
          <div
            className="relative bg-cover bg-center w-[441px] h-[300px] flex rounded-3xl p-6 translate-x-[-60%] transition-transform duration-500 ease-in-out animate-slide-in-left bg-green"

          >
            <img src={Service1} alt='Service I' className=' absolute right-0 w-60 h-60 bottom-0 ' />
            <h2 className="text-[40px] font-normal text-white bottom-0 absolute p-4">Our Expertise
            </h2>
            <h3 className="text-[16px] font-light text-white absolute top-4  p-4">
              Unlock the potential of data with cutting-edge AI and machine learning solutions that enhance
              decision-making, automate processes, and create new opportunities for growth.
            </h3>
            <Link to="/industry-expertise">
            <FaArrowCircleRight className="absolute right-7 bottom-7 w-8 h-8 text-arrowBlue cursor-pointer" />
            </Link>
          </div>

          {/* Right Card */}
          <div
            className="relative bg-cover bg-center w-[881px] h-[300px] flex rounded-3xl p-6 translate-x-[60%] transition-transform duration-500 ease-in-out animate-slide-in-right bg-dblue"
          >
            <h2 className="text-[40px] font-normal text-white">Solution</h2>
            <h3 className="text-[16px] font-light text-white absolute bottom-0 max-w-[60%] pb-6">
              See how we craft tailored solutions that transform your business from the inside out        </h3>
            <img src={Service2} alt='service 2' className='absolute right-0' />

            
            <img src={Inkimos} alt='Inkimos' className='w-12 h-2 absolute right-10 bottom-10' />
          </div>
        </section>

        <section className='flex justify-between overflow-hidden space-x-0'>
          <div className=' className="relative bg-cover bg-center w-[372px] h-[250px] flex rounded-3xl p-6  translate-x-[-60%] transition-transform duration-500 ease-in-out animate-slide-in-left bg-dblue' >
            <div className="flex items-center space-x-2 mt-16 absolute left-24 text-medium">
              <h2 className="font-medium text-[48px] text-arrowBlue">$</h2>
              <h2 className="font-medium text-[48px] text-arrowBlue ">
                <Counterhome targetNumber={450} />
              </h2>
              <h2 className="font-medium text-[48px] text-arrowBlue">M</h2>
            </div>
            <h3 className="text-[19px] font-normal text-white absolute max-w-[60%] pb-6 mt-32 left-28">
              Revenue Uplift    </h3>
          </div>


          <div
            className="relative bg-contain bg-no-repeat bg-bottom w-[496px] h-[250px] flex rounded-3xl p-6 transition-transform duration-1000 ease-in-out animate-fade-out border border-green"
            style={{ backgroundImage: `url(${Service3})` }}
          >

            <h2 className="text-[16px] font-normal text-black absolute top-6 max-w-[90%] text-center pb-6">
              "Empowering organizations with strategic technology and seamless digital integration, enabling innovation and operational excellence for sustainable success."</h2>
            <h3 className='font-bold text-[16px] absolute left-40 bottom-28'>Inkimos by Invenger </h3>

          </div>




          <div className=' className="relative bg-cover bg-center w-[372px] h-[250px] flex rounded-3xl p-6  translate-x-[60%] transition-transform duration-500 ease-in-out animate-slide-in-right bg-arrowBlue' >
            <div className="flex items-center space-x-2 absolute left-24 top-20"> 
              <h2>
                <Counterhome targetNumber={25} color="text-white" />
              </h2>
              <h2 className="text-white text-[29px] sm:text-[48px]">Years</h2>
            </div>
            <h3 className="text-[19px] font-normal text-white absolute max-w-[60%] pb-6 mt-32 left-24">
              of Industry Expertise                </h3>


          </div>


        </section>



      </section>

      <section id='solution' className='max-w-[1440px] mx-auto px-[10px] lg:px-12  lg:py-24 space-y-5 md:hidden'>
        <SectionHeading mainTitle="Why Choose Inkimos."/>

        <section className="flex flex-col lg:flex-row justify-between  overflow-hidden space-y-5 lg:space-y-0 lg:space-x-6">

          {/* Left Card */}
          <div
            className="relative bg-cover bg-center w-full lg:w-[441px] h-[250px] flex rounded-3xl p-[10px] translate-x-[-60%] transition-transform duration-500 ease-in-out animate-slide-in-left bg-green"
          >
            <img src={Service1} alt='Service I' className='absolute right-0 w-48 h-48 bottom-0' />
            <h2 className="text-[25px]  font-normal text-white bottom-0 absolute p-4">Our Expertise</h2>
            <h3 className="text-[16px] font-light text-white absolute top-4 p-4">
              Unlock the potential of data with cutting-edge AI and machine learning solutions that enhance
              decision-making, automate processes, and create new opportunities for growth.
            </h3>
            <Link to="/industry-expertise">
            <FaArrowCircleRight className="absolute right-7 bottom-5 md:bottom-7 w-8 h-8 text-arrowBlue cursor-pointer" />
            </Link>
          </div>

          {/* Right Card */}
          <div
            className="relative bg-cover bg-center w-full lg:w-[881px] h-[250px] flex rounded-3xl p-[10px] translate-x-[60%] transition-transform duration-500 ease-in-out animate-slide-in-right bg-dblue"
          >
            <h2 className="text-[25.6px] font-normal text-white p-4">Solution</h2>
            <h3 className="text-[16px] font-light text-white absolute bottom-0 max-w-[70%] p-4 z-10">
              See how we craft tailored solutions that transform your business from the inside out
            </h3>
            <img src={Service2} alt='service 2' className='absolute right-0 top-20 w-40 h-40' />
            <Link to="/our-services">
            <img src={Inkimos} alt='Inkimos' className='w-12 h-2 absolute right-5 md:right-10 bottom-5 md:bottom-10' />
            </Link>
          </div>
        </section>

        <section className='flex flex-col lg:flex-row justify-between  overflow-hidden space-y-10 lg:space-y-0'>
          {/* Left Card with Counter */}
          <div className="relative bg-cover bg-center w-full lg:w-[372px] h-[100px] flex items-center justify-center rounded-3xl p-6 translate-x-[-60%] transition-transform duration-500 ease-in-out animate-slide-in-left bg-dblue">
          <div className="relative bg-cover bg-center w-full lg:w-[372px] h-[100px] flex flex-col items-center justify-center rounded-3xl p-6 translate-x-[-60%] transition-transform duration-500 ease-in-out animate-slide-in-left bg-dblue">
            <div className="flex items-center mt-1">
              <h2 className="font-medium text-[32px] text-arrowBlue">$</h2>
              <h2 className="font-medium text-[20px] text-arrowBlue">
                <Counterhome targetNumber={450} />
              </h2>
              <h2 className="font-medium text-[32px] text-arrowBlue">M</h2>
            </div>
            <h3 className="text-[16px] font-normal text-white  text-center mb-2">
              Revenue Uplift
            </h3>
          </div>

        </div>


          {/* Right Card with Image */}
          <div
          className="relative bg-contain bg-no-repeat bg-bottom w-full lg:w-[496px] h-[250px] flex flex-col items-center justify-start rounded-3xl pt-[10px] px-4 transition-transform duration-1000 ease-in-out animate-fade-out border border-green"
          style={{ backgroundImage: `url(${Service3})` }}
        >
          <h2 className="text-[16px] font-normal text-black max-w-[85%] text-center  mb-2">
            "Empowering organizations with strategic technology and seamless digital integration, enabling innovation and operational excellence for sustainable success."
          </h2>
          <h3 className="font-bold text-[16px] text-center">
            Inkimos by Invenger
          </h3>
        </div>



          {/* Left Card with Counter */}
          <div className="relative bg-cover bg-center w-full lg:w-[372px] h-[100px] flex flex-col items-center justify-center rounded-3xl translate-x-[60%] transition-transform duration-500 ease-in-out animate-slide-in-right bg-arrowBlue p-4">
          <div className="flex items-center space-x-2">
            <h2 className="text-white text-[32px] sm:text-[48px]">
              <Counterhome targetNumber={25} color='text-white' />
            </h2>
            <h2 className="text-white text-[32px] sm:text-[48px]">Years</h2>
          </div>
          <h3 className="text-[16px] font-normal text-white text-center ">
            of Industry Expertise
          </h3>
        </div>


        </section>

      </section>

      <section id='Insights' className='max-w-[1440px] mx-auto px-5 sm:px-12 pb-8 lg:pb-24 space-y-[15px]'>
        <SectionHeading mainTitle="Navigating change. Our insights" />
        <BlogCards />
      </section>

      <section
        id="image"
        ref={imageSectionRef}
        className="relative h-[75vh] sm:h-[65vh] bg-cover bg-center opacity-0 transition-opacity duration-1000"
        style={{ backgroundImage: `url(${Office})` }}
      >
        <div className="max-w-[1440px] mx-auto h-full flex   items-center  px-5 lg:px-12">
          <div className="bg-white w-[90%] sm:w-[450px] h-auto p-[20px] sm:p-6 rounded-3xl absolute top-52 md:top-auto">
            <h2 className="text-[25.6px] sm:text-[40px] font-medium text-dblue">Global Impact</h2>
            <p className="text-base text-aboutgrey font-normal">
              For 20+ years, we’ve been solving challenges at the intersection of business and technology to deliver value for businesses, people, and communities around the world.
            </p>
            <a href="/about" className="text-dblue flex items-center text-base font-medium py-4">
              Discover Inkimos
              <img src={Inkimos} alt="Inkimos Logo" className="ml-2 inline-block w-8 h-1.5 mt-1" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
});

export default Home;
