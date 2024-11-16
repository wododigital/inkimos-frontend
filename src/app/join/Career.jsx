import React, { useState, useEffect } from 'react'
import CarrerBg from '../../assets/carrer-bg.jpg'
import JobBg from '../../assets/IMG 2.svg'
import Inkimos from '../../assets/IMG 5.png'
import SectionHeading from '../../components/heading/Heading'
import './carrer.css'
import FormModel from './FormModel'
import DescriptionModal from './DescriptionModel';
import axios from 'axios'
import config from '../../config'

const Career = React.memo(() => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    axios.get(`${config.baseUrl}/api/get-applications`,{
      withCredentials :true
    })
      .then((res) => {
        // console.log(res)
        if (res.data.status === 'success') {
          // console.log(res.data.data);
          setJobs(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err)
      })

  }, []);

  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({
     code:'',
     title:'',
  });
  const [description, setDescription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDescription = (data) => {
    setDescription(data);
    setIsModalOpen(true);
  };

  const closeModal = () =>{ 
    setIsModalOpen(false);
    setTimeout(() => {
      setDescription('');
    }, 500);
  };

  const openModal = (id, title) => {
    setDetails({
      code:id,
      title:title,
    });
    setOpen(true);
  }

  const applyBtn = () => {
    // alert('clicked');
    setIsModalOpen(false);
    setOpen(true);
  }

  return (<>
    <div className="w-full min-h-[370px] md:min-h-[500px] flex items-center justify-center relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${CarrerBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative mt-28 flex flex-col items-center justify-center mb-10 md:mb-20 px-4">
        <h1 className='text-[25.6px] sm:text-[40px] text-white font-semibold text-center'>
          Join Inkimos
        </h1>
        <h2 className='text-white text-base sm:text-lg text-center px-1 sm:px-0' >Join Inkimos for an exciting journey. Collaborate with talented individuals and contribute to innovative <br />solutions. Unlock your potential with us.
        </h2>
      </div>
    </div>
    <section className="max-w-[1440px] mx-auto px-5  sm:px-12  pb-[40px] lg:pb-24  ">
      <section id="job">
        <SectionHeading mainTitle="Job Openings."  />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-9 md:mt-2">
          {jobs && jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job.id}
                className="w-full bg-cover bg-center bg-white border border-green rounded-3xl relative  md:min-h-[400px]"
                style={{ backgroundImage: `url(${JobBg})` }}
              >
                <div className="w-full h-full relative items-center p-[20px] sm:p-8">
                  <button className="bg-green p-2 px-3 rounded-full text-black font-medium text-[11.2px] sm:text-[14.4px]">
                    {job.job_category}
                  </button>
                  <h3 className="text-black text-[22px] sm:text-[32px] font-medium">{job.job_title}</h3>
                  <p className="text-black text-[10px] sm:text-base mb-5 py-1 sm:py-0" dangerouslySetInnerHTML={{ __html: job.overview }}>
                   
                  </p>
                  <div className="flex items-center gap-x-14 md:absolute bottom-8">
                    <button
                      onClick={()=>{openDescription(job.description) ; setDetails({ code: job.job_code, title:job.job_title })}}
                      className="text-darkBlue font-medium underline text-[10px] md:text-base"
                    >
                      View Job Description
                    </button>

                    <button
                      className="bg-darkBlue py-2 px-3 sm:py-3 sm:px-6 rounded-full text-white text-base md:text-[19.2px] flex items-center -mt-4"
                      onClick={() => openModal(job.job_code, job.job_title)}
                    >
                      Apply Now
                      <img
                        src={Inkimos}
                        className="w-4 h-1 sm:w-6 sm:h-1.5 sm:ml-3 ml-2"
                        alt="Inkimos I"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center min-h-[5vh] md:min-h-[20vh] mt-6 ">
            <h2 className="text-green text-center text-base sm:text-3xl font-bold whitespace-nowrap ">
            Thanks for reaching out!
            We currrently have no job openings.</h2>          </div>
          
          
          
          )}

        </div>
      </section>
      <section id='enquiry' className=' pt-[40px] lg:pt-24  '>
        <div className="bg-black w-full min-h-[100px] sm:min-h-[291px] rounded-3xl sm:rounded-[35px] p-[17px] sm:p-16 bbg ">
          <h2 className='text-white text-[19px] sm:text-[40px] sm:font-normal '>Explore New Opportunities Beyond Our Current Openings</h2>
          <div className=' py-3 sm:pt-10 '>
          <button
            className="bg-green text-black px-[15px] py-[8px] sm:px-[30px] sm:py-[15px] rounded-full sm:font-medium text-[12px] sm:text-[19px]"
            onClick={() => {
                document.getElementById('job').scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start', // Aligns to the start of the section
                });
            }}
            >
            Send Enquiry
            </button>          </div>
        </div>
      </section>
    </section>

    <DescriptionModal
      open={isModalOpen}
      setOpen={closeModal}
      htmlContent={description}
      applyBtn={applyBtn}
    />
    <FormModel open={open} setOpen={setOpen} details={details} />
  </>
  )
});

export default Career