import React, {useState, useEffect} from 'react'
import CarrerBg from '../../assets/carrer-bg.jpg'
import JobBg from '../../assets/IMG 2.svg'
import Inkimos from '../../assets/IMG 5.png'
import SectionHeading from '../../components/heading/Heading'
import './carrer.css'
import FormModel from './FormModel'

const Career = React.memo(() => {
    useEffect(()=>{
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },[])
  const [open, setOpen] = useState(false);

  const openModal=()=>{
    setOpen(true);
  }
  return (<>
        <div className="w-full min-h-[400px] md:min-h-[580px] flex items-center justify-center relative">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                backgroundImage: `url(${CarrerBg})`,
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="absolute">
                <h1 className='text-[25.6px] sm:text-[40px] text-white font-semibold text-center'>
                    Join Inkimos
                </h1>
                <h2 className='text-white text-base sm:text-lg text-center px-1 sm:px-0' >Join Inkimos for an exciting journey. Collaborate with talented individuals and contribute to innovative <br/>solutions. Unlock your potential with us.

                </h2>
            </div>
        </div>
        <section className="max-w-[1440px] mx-auto px-5  sm:px-12  py-8 lg:py-24  ">
            <section id="job">
                <SectionHeading mainTitle="Job Openings."/>
                <div className="flex flex-col md:flex-row gap-4 sm:gap-9">
                <div
                    className="w-full md:w-1/2 h-[250px] md:h-[350px] bg-cover bg-center bg-white border border-green rounded-3xl "
                    style={{ backgroundImage: `url(${JobBg})`}}
                >
                    
                    <div className="w-full h-full relative items-center p-4 sm:p-8">
                    <button className="bg-green p-2 sm:p-3 rounded-full text-black font-medium text-[11.2px] sm:text-[14.4px]">
                        AI Engineer
                    </button>
                        <h3 className='text-black text-[22px] sm:text-[32px] font-medium'>AI Developer</h3>
                        <p className='text-black text-[10px]  sm:text-base mb-5 py-1 sm:py-0'>Seeking a driven Junior AI Developer to join our innovative team. Responsibilities include developing and optimizing machine learning models, collaborating with cross-functional teams, and contributing to the advancement of our AI solutions. Ideal candidate possesses strong programming skills, analytical mindset, and a passion for emerging technologies.</p>
                        <button className="bg-darkBlue py-2 px-3 sm:py-3 sm:px-6 rounded-full text-white text-base md:text-[19.2px] flex" onClick={openModal}>
                            Apply Now 
                            <img src={Inkimos} className='w-4 h-1 sm:w-6 sm:h-1.5 mt-3 sm:mt-2.5 sm:ml-3 ml-2' alt='Inkimos I'/>
                        </button>
                    </div>
                </div>

                {/* Column 2 */}
                <div
                    className="w-full md:w-1/2 h-[250px] md:h-[350px] bg-cover bg-center bg-white border border-green rounded-3xl "
                    style={{ backgroundImage: `url(${JobBg})`}}
                >
                    
                    <div className="w-full h-full relative items-center p-4 sm:p-8">
                    <button className="bg-green p-2 sm:p-3 rounded-full text-black font-medium text-[11.2px] sm:text-[14.4px]">
                        AI Engineer
                    </button>
                        <h3 className='text-black text-[22px] sm:text-[32px] font-medium'>Junior AI Developer</h3>
                        <p className='text-black text-[10px]  sm:text-base mb-5 py-1 sm:py-0'>Seeking a driven Junior AI Developer to join our innovative team. Responsibilities include developing and optimizing machine learning models, collaborating with cross-functional teams, and contributing to the advancement of our AI solutions. Ideal candidate possesses strong programming skills, analytical mindset, and a passion for emerging technologies.</p>
                        <button className="bg-darkBlue py-2 px-3 sm:py-3 sm:px-6 rounded-full text-white text-base md:text-[19.2px] flex" onClick={openModal}>
                            Apply Now 
                            <img src={Inkimos} className='w-4 h-1 sm:w-6 sm:h-1.5 mt-3 sm:mt-2.5 sm:ml-3 ml-2' alt='Inkimos I'/>  
                        </button>
                    </div>
                </div>
                </div>
            </section>
            <section id='enquiry' className=' pt-8 lg:pt-12  '>
                <div className="bg-black w-full min-h-[100px] sm:min-h-[291px] rounded-3xl sm:rounded-[35px] p-4 sm:p-16 bbg ">
                    <h2 className='text-white text-[19px] sm:text-[40px] sm:font-normal px-6 md:px-0'>Explore New Opportunities Beyond Our Current Openings</h2>
                    <div className=' p-3 sm:pt-10 px-6 sm:px-0'>
                        <button className='bg-green text-black px-[15px] py-[8px] sm:px-[30px] sm:py-[15px] rounded-full sm:font-medium text-[12px] sm:text-[19px] ' onClick={openModal}>Send Enquiry</button>
                    </div>
                </div>
            </section>
        </section>
        <FormModel open={open} setOpen={setOpen}/>
  </>
  )
});

export default Career