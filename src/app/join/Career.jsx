import React, { useState, useEffect } from 'react'
import CarrerBg from '../../assets/carrer-bg.jpg'
import JobBg from '../../assets/IMG 2.svg'
import Inkimos from '../../assets/IMG 5.png'
import SectionHeading from '../../components/heading/Heading'
import './carrer.css'
import FormModel from './FormModel'
import DescriptionModal from './DescriptionModel'

const Career = React.memo(() => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);  // Modal open state
  const [description, setDescription] = useState('');
  const [currentDescription, setCurrentDescription] = useState({});  // Store current job description
  const [isModalOpen, setIsModalOpen] = useState(false);
  const jobDescriptionHTML = `
  <div>
    <h2>Job Title: AI Developer</h2>
    <p><strong>Location:</strong> [Location]</p>

    <h3>Overview:</h3>
    <p>Join our innovative team at Inkimos, where you’ll be at the forefront of developing AI-driven solutions. As an AI Developer, you will play a key role in designing, optimizing, and deploying machine learning models that drive our AI capabilities, collaborating closely with cross-functional teams to bring AI advancements to our clients. This position is ideal for a candidate with a strong technical foundation, a problem-solving mindset, and a passion for emerging AI technologies.</p>

    <h3>Key Responsibilities:</h3>
    <ul>
      <li>Develop, test, and deploy machine learning models and algorithms.</li>
      <li>Collaborate with cross-functional teams to integrate AI models into applications and solutions.</li>
      <li>Conduct data analysis, pre-process data, and optimize models for performance and scalability.</li>
      <li>Stay updated with advancements in AI, recommending and implementing cutting-edge techniques and tools.</li>
      <li>Participate in code reviews and optimize AI models for efficiency and accuracy.</li>
    </ul>

    <h3>Required Qualifications:</h3>
    <ul>
      <li>Bachelor’s or Master’s degree in Computer Science, Data Science, or a related field.</li>
      <li>Proficiency in programming languages such as Python, R, or Java.</li>
      <li>Strong understanding of machine learning frameworks (e.g., TensorFlow, PyTorch) and libraries (e.g., Scikit-Learn).</li>
      <li>Familiarity with data pre-processing, model training, and deployment processes.</li>
    </ul>

    <p><strong>Years of Experience:</strong> 3+ years of hands-on experience in AI development or a related field.</p>

    <h3>Desired Skills:</h3>
    <ul>
      <li>Analytical mindset with strong problem-solving skills.</li>
      <li>Experience in natural language processing, computer vision, or other AI domains.</li>
      <li>Knowledge of cloud platforms (AWS, Azure, Google Cloud) for AI model deployment.</li>
      <li>Strong communication skills to effectively collaborate with team members and stakeholders.</li>
    </ul>

    <h3>Preferred Experience:</h3>
    <ul>
      <li>Proven experience in deploying machine learning models in production environments.</li>
      <li>Experience working in a fast-paced, service-based environment with multiple project demands.</li>
      <li>Familiarity with data visualization tools and techniques.</li>
    </ul>
  </div>
`;

  const openModalll = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openModal = () => {
    setOpen(true);
  }

  const openModall = (description) => {
    setCurrentDescription(description);
    setIsOpen(true); // Open modal and set description
  };


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
        <SectionHeading mainTitle="Job Openings." />
        <div className="flex flex-col md:flex-row gap-4 sm:gap-9">
          <div
            className="w-full md:w-1/2 h-[270px] md:h-[360px] bg-cover bg-center bg-white border border-green rounded-3xl "
            style={{ backgroundImage: `url(${JobBg})` }}
          >

            <div className="w-full h-full relative items-center p-[20px] sm:p-8">
              <button className="bg-green p-2 sm:p-3 rounded-full text-black font-medium text-[11.2px] sm:text-[14.4px]">
                AI Engineer
              </button>
              <h3 className='text-black text-[22px] sm:text-[32px] font-medium'>AI Developer</h3>
              <p className='text-black text-[10px]  sm:text-base mb-5 py-1 sm:py-0'>Seeking a driven Junior AI Developer to join our innovative team. Responsibilities include developing and optimizing machine learning models, collaborating with cross-functional teams, and contributing to the advancement of our AI solutions. Ideal candidate possesses strong programming skills, analytical mindset, and a passion for emerging technologies.</p>
              <div className="flex items-center gap-x-14">
                <button onClick={openModalll} className="text-darkBlue font-medium underline text-[10px] md:text-base">
                    View Job Description
                </button>

                <button className="bg-darkBlue py-2 px-3 sm:py-3 sm:px-6 rounded-full text-white text-base md:text-[19.2px] flex items-center -mt-4" onClick={openModal}>
                    Apply Now
                    <img src={Inkimos} className="w-4 h-1 sm:w-6 sm:h-1.5 mt-0 sm:mt-1.5 sm:ml-3 ml-2" alt="Inkimos I" />
                </button>
                </div>

            </div>
          </div>

          {/* Column 2 */}
          <div
            className="w-full md:w-1/2 h-[270px] md:h-[360px] bg-cover bg-center bg-white border border-green rounded-3xl "
            style={{ backgroundImage: `url(${JobBg})` }}
          >

            <div className="w-full h-full relative items-center p-[20px] sm:p-8">
              <button className="bg-green p-2 sm:p-3 rounded-full text-black font-medium text-[11.2px] sm:text-[14.4px]">
                AI Engineer
              </button>
              <h3 className='text-black text-[22px] sm:text-[32px] font-medium'>Junior AI Developer</h3>
              <p className='text-black text-[10px]  sm:text-base mb-5 py-1 sm:py-0'>Seeking a driven Junior AI Developer to join our innovative team. Responsibilities include developing and optimizing machine learning models, collaborating with cross-functional teams, and contributing to the advancement of our AI solutions. Ideal candidate possesses strong programming skills, analytical mindset, and a passion for emerging technologies.</p>
              <div className="flex items-center gap-x-14">
                <button onClick={openModalll} className="text-darkBlue font-medium underline text-[10px] md:text-base">
                    View Job Description
                </button>

                <button className="bg-darkBlue py-2 px-3 sm:py-3 sm:px-6 rounded-full text-white text-base md:text-[19.2px] flex items-center -mt-4" onClick={openModal}>
                    Apply Now
                    <img src={Inkimos} className="w-4 h-1 sm:w-6 sm:h-1.5 mt-0 sm:mt-1.5 sm:ml-3 ml-2" alt="Inkimos I" />
                </button>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section id='enquiry' className=' pt-[40px] lg:pt-24  '>
        <div className="bg-black w-full min-h-[100px] sm:min-h-[291px] rounded-3xl sm:rounded-[35px] p-[17px] sm:p-16 bbg ">
          <h2 className='text-white text-[19px] sm:text-[40px] sm:font-normal '>Explore New Opportunities Beyond Our Current Openings</h2>
          <div className=' py-3 sm:pt-10 '>
            <button className='bg-green text-black px-[15px] py-[8px] sm:px-[30px] sm:py-[15px] rounded-full sm:font-medium text-[12px] sm:text-[19px] ' onClick={openModal}>Send Enquiry</button>
          </div>
        </div>
      </section>
    </section>

    <DescriptionModal
      open={isModalOpen}
      setOpen={closeModal}
      htmlContent={jobDescriptionHTML}
    />
    <FormModel open={open} setOpen={setOpen} />
  </>
  )
});

export default Career