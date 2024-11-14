import React, { useState, useEffect, useRef } from 'react';
import AboutBg from '../../assets/Comp 2.mp4';
import BPO from '../../assets/BPO.png';
import AI from  '../../assets/AI.png';
import Digital from '../../assets/digital.png'; 
import Manage from '../../assets/Manage.png';
import Office from '../../assets/office.webp';
import Counter from '../../components/conuter/Counter';
import ImageGrid from '../../components/Imagegrid';
import Inkimos from '../../assets/IMG 5.png'


const About = React.memo(() => {

   const [isVisibleMission, setIsVisibleMission] = useState(false);
   const [isVisibleChallenges, setIsVisibleChallenges] = useState(false);
   const [isVisibleCount, setIsVisibleCount] = useState(false); 
   const imageSectionRef = useRef(null);

   useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[])
  
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
     const handleScroll = () => {
       const missionElement = document.getElementById("mission");
       const missionRect = missionElement.getBoundingClientRect();
       if (
         missionRect.top <= window.innerHeight * 0.5 && 
         missionRect.bottom >= 0
       ) {
         setIsVisibleMission(true);
       } else {
         setIsVisibleMission(false);
       }
 
       const challengesElement = document.getElementById("challenges");
       const challengesRect = challengesElement.getBoundingClientRect();
       if (
         challengesRect.top <= window.innerHeight * 0.5 && 
         challengesRect.bottom >= 0
       ) {
         setIsVisibleChallenges(true);
       } else {
         setIsVisibleChallenges(false);
       }
 
       const countElement = document.getElementById("count");
       const countRect = countElement.getBoundingClientRect();
       if (
         countRect.top <= window.innerHeight * 0.8 && // Trigger when 80% of the section is in view
         countRect.bottom >= 0
       ) {
         setIsVisibleCount(true);
       } else {
         setIsVisibleCount(false);
       }
     };
 
     window.addEventListener("scroll", handleScroll);
 
     // Clean up event listener on component unmount
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);

  return (
    <>
      <div className="relative w-full min-h-[400px] md:min-h-[500px] bg-dblack flex lg:items-end justify-center">
        <video
          src={AboutBg}
          autoPlay
          loop
          muted
          playsInline
          className="relative w-full md:w-[60%] max-h-[400px] "
          style={{
            height: 'auto',
          }}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-[26px] sm:text-[32px] md:text-[40px] text-white mb-2 font-semibold">
            Who We Are
          </h1>
          <h2 className="text-[16px] sm:text-[18px] md:text-[19px] text-white">
            Transformation isn’t just a phase—it’s a continuous strategy for success. At Inkimos, we help you<br className="hidden sm:inline"/> 
            harness change, turning challenges into opportunities.
          </h2>
        </div>
      </div>


      {/* Mission Section */}
      <section id="mission" className="max-w-[1440px] mx-auto px-5 sm:px-12 pt-8 lg:pt-24 hidden md:block">
        <div className="grid grid-cols-1 sm:grid-cols-[30%,70%] gap-4">   
          <div className="flex flex-col gap-32">
            <div className="">
              <h2
                className={`text-[40px] font-medium border-l-2 border-s-green text-dblue px-2
                transform transition-all duration-1000 ${isVisibleMission ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              >
                Our Vision.
              </h2>
            </div>
            <div className="">
              <h2
                className={`text-[40px] font-medium border-l-2 border-s-green text-dblue px-2
                transform transition-all duration-1000 ${isVisibleMission ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              >
                Our Mission.
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-32">
            <div className="">
              <p className='text-[24px] font-light text-aboutgrey'>
                To be the trusted partner that empowers organizations to thrive through transformative and future-ready solutions.
              </p>
            </div>
            <div className="">
              <p className='text-[24px] font-light text-aboutgrey'>
                To drive growth and operational excellence by delivering innovative, customized, and sustainable technology solutions, helping enterprises unlock their full potential in a digitally evolving world.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* {Mission Mobile section} */}

      <section id="mission" className="max-w-[1440px] mx-auto px-5 sm:px-12 pt-8 lg:pt-24 md:hidden">
  <div className="grid grid-cols-1 sm:grid-cols-[30%,70%] gap-8">
    {/* Vision and Mission Titles with Descriptions */}
    <div className="flex flex-col gap-8 sm:gap-16">
      <div className="flex flex-col gap-4">
        <h2
          className={`text-[30px] sm:text-[35px] md:text-[40px] font-medium border-l-2 border-s-green text-dblue px-2 transform transition-all duration-1000 ${
            isVisibleMission ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          Our Vision.
        </h2>
        <p className="text-[15px] sm:text-[20px] md:text-[24px] font-light text-aboutgrey">
          To be the trusted partner that empowers organizations to thrive through transformative and future-ready solutions.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2
          className={`text-[30px] sm:text-[35px] md:text-[40px] font-medium border-l-2 border-s-green text-dblue px-2 transform transition-all duration-1000 ${
            isVisibleMission ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          Our Mission.
        </h2>
        <p className="text-[15px] sm:text-[20px] md:text-[24px] font-light text-aboutgrey">
          To drive growth and operational excellence by delivering innovative, customized, and sustainable technology solutions, helping enterprises unlock their full potential in a digitally evolving world.
        </p>
      </div>
    </div>
  </div>
</section>

      

      {/* Challenges Section */}
      
      {/* Mobile Challenges Section */}
      <section id="challenges" className="max-w-[1440px] mx-auto px-5 sm:px-12 py-8 lg:py-24 ">
          <h2 className=" text-[29px] sm:text-[48px] text-dblue font-medium mb-8">
            Challenges we help to solve.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column - First row */}
            <div className={`flex flex-col md:flex-row border border-gray-200 p-4 rounded-2xl transform transition-all duration-1000 ${isVisibleChallenges ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="w-full md:w-1/4 p-4">
                <img src={AI} alt="Ai Image" className="w-[150px] h-[150px] sm:w-full sm:h-auto object-cover"/>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-[32px] font-medium text-dblue">Cloud Computing Services</h3>
                <p className='text-base text-black pt-3 font-light'>
                  Transform your infrastructure with secure, scalable cloud environments designed to evolve with your business.
                </p>
              </div>
            </div>

            {/* Left column - Second row */}
            <div className={`flex flex-col md:flex-row border border-gray-200 p-4 rounded-2xl transform transition-all duration-1000 ${isVisibleChallenges ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="w-full md:w-1/4 p-4">
                <img src={BPO} alt="BPO Image" className="w-[150px] h-[150px] sm:w-full sm:h-auto object-cover"/>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-[32px] font-medium text-dblue">AI & Machine Learning</h3>
                <p className='text-base text-black pt-3 font-light'>
                  Leverage AI to automate, innovate, and gain actionable insights that drive smarter decisions.
                </p>
              </div>
            </div>

            {/* Right column - First row */}
            <div className={`flex flex-col md:flex-row border border-gray-200 p-4 rounded-2xl transform transition-all duration-1000 ${isVisibleChallenges ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="w-full md:w-1/4 p-4">
                <img src={Digital} alt="Digital Image" className="w-[150px] h-[150px] sm:w-full sm:h-auto object-cover"/>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-[32px] font-medium text-dblue">Digital Transformation</h3>
                <p className='text-base text-black pt-3 font-light'>
                  Empower your business with cutting-edge digital solutions to stay competitive and relevant.
                </p>
              </div>
            </div>

            {/* Right column - Second row */}
            <div className={`flex flex-col md:flex-row border border-gray-200 p-4 rounded-2xl transform transition-all duration-1000 ${isVisibleChallenges ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="w-full md:w-1/4 p-4">
                <img src={Manage} alt="Manage Image" className="w-[150px] h-[150px] sm:w-full sm:h-auto object-cover"/>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-[32px] font-medium text-dblue">Business Process Optimization</h3>
                <p className='text-base text-black pt-3 font-light'>
                  Revolutionize your operations with streamlined processes that boost productivity and performance.
                </p>
              </div>
            </div>
          </div>
      </section>


      <section id='count' className='max-w-[1440px] mx-auto px-5 sm:px-12 pb-8 lg:pb-24'>
        <div  className="bg-black w-full min-h-[100px] sm:min-h-[291px] rounded-3xl sm:rounded-[35px]  bbg ">
          <div className='px-4 sm:px-16 pt-4 sm:pt-16  '>
              <h2 className='text-white text-[19px] sm:text-[40px] sm:font-normal px-6 md:px-0'>Impact Metrics.</h2>
              <div className=' p-3  px-6 sm:px-0'>
                <div className='flex space-x-10'>
                  <div>
                     {isVisibleCount &&  <Counter targetNumber={10} />}
                    <p className='text-white text-[19px] font-normal sm:ml-3'>Countries</p>
                  </div>
                  <div>
                    {isVisibleCount &&  <Counter targetNumber={3000} />}
                    <p className='text-white text-[19px] font-normal sm:ml-2'>Projects</p>
                  </div>
                  <div>
                      {isVisibleCount &&  <Counter targetNumber={1000} />}
                      <p className='text-white text-[19px] font-normal sm:ml-3'>Happy Clients</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="w-full mt-4 pb-4 sm:pb-8 ">
            <ImageGrid />
          </div>
        </div>
      </section>
      <section
        id="image"
        ref={imageSectionRef}
        className="relative h-[40vh] sm:h-[65vh] bg-cover bg-center opacity-0 transition-opacity duration-1000"
        style={{ backgroundImage: `url(${Office})` }}
      >
          <div className="max-w-[1440px] mx-auto h-full flex items-center  px-5 lg:px-12">
            <div className="bg-white w-[90%] sm:w-[450px] h-auto p-4 sm:p-6 rounded-3xl">
                <h2 className="text-[24px] sm:text-[40px] font-medium text-dblue">Global Impact</h2>
                <p className="text-base text-aboutgrey font-normal">
                    For 20+ years, we’ve been solving challenges at the intersection of business and technology to deliver value for businesses, people, and communities around the world.
                </p>
                <a href="/about" className="text-dblue flex items-center text-base font-medium pt-4">
                    Discover Inkimos
                    <img src={Inkimos} alt="Inkimos Logo" className="ml-2 inline-block w-8 h-1.5 mt-1" />
                </a>
            </div>
          </div>
      </section>

    </>
  );
});

export default About;
