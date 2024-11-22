import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import Itbg from '../../assets/It (1).png';
import img from '../../assets/Layer 1.png';
import config from '../../config';
import axios from 'axios';
import Modal from '../../components/Modal';

const JobApplication = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const resumeFile =useRef(null);
  const [details, setDetails]=useState(null);
  const [data, setData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    linkedInUrl: '',
    role: id,
    resume: '',
    additionalInfo:'',
    termsAndConditions: false
  });
  useEffect(()=>{
    const fetchData = async () => {
      try {
        //setLoading(true);
        const response = await axios.get(`${config.baseUrl}/api/job-details/${id}`);
        if(response.data.status==='success'){
          setDetails(response.data.data[0]);
          //console.log(response.data.data[0]);
        }else{
          navigate('/careers');
        }
      } catch (err) {
        console.error(err);
      } 
      // finally {
      //   setLoading(false); 
      // }
    };

    if (id) { 
      fetchData();
    }
  },[id])


  const [errors, setErrors] = useState(null);
  const validateForm = () => {
    const validationErrors = {};

    if (!data.fullName && data.fullName.trim() === "") {
      validationErrors.fullName = "Name is required!";
    }

    if (!data.phoneNumber || data.phoneNumber.trim() === "") {
      validationErrors.phoneNumber = "Number is required!";
    }

    if (!data.email || data.email.trim() === "") {
      validationErrors.email = "Email is required!";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        validationErrors.email = "Please enter a valid email address!";
      }
    }


    if (!data.resume) {
      validationErrors.resume = 'Please upload a resume.';
    } else {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(data.resume.type)) {
        validationErrors.resume = 'Please upload a .doc, .docx, or .pdf file.';
      }
    }

    if (!data.termsAndConditions) {
      validationErrors.termsAndConditions = "Please accept the terms and conditions.";
    }

    return validationErrors;
  };

  useEffect(() => {
    setErrors(null);
  }, [open])

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData((preData) => ({
      ...preData,
      [name]: value
    }))
  }

  const formHandler = (e) => {
    e.preventDefault();
    console.log('working');
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      //console.log(validationErrors);
    } else {
      setErrors(null);
     // console.log(data);
      const formData = new FormData();
      formData.append('name', data.fullName);
      formData.append('phone', data.phoneNumber);
      formData.append('email', data.email);
      formData.append('role', data.role);
      formData.append('url', data.linkedInUrl);
      formData.append('resume', data.resume);
      formData.append('details', data.additionalInfo);
      axios.post(`${config.baseUrl}/api/career`, formData)
        .then((res) => {
          if (res.data.status === "success") {
            setOpen(true);
            setData({
              fullName: '',
              phoneNumber: '',
              email: '',
              linkedInUrl: '',
              role: '',
              resume: '',
              additionalInfo:'',
              termsAndConditions: false
            });

           
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <section id="heading" className="bg-bgblue relative">
        <div className="bg-bgblue min-h-[500px]  w-full flex items-center justify-center flex-col text-center relative">
          <img
            src={Itbg}
            alt="Decorative circle"
            className="absolute right-0 top-40 w-[100px] h-[150px] md:w-[190px] md:h-[200px]"
          />
          <div className="absolute inset-0 bg-blue-950 opacity-20"></div>
          <div className="relative mt-28 flex flex-col items-center justify-center mb-10 md:mb-20 px-4">
            <h2 className="text-[14.4px] sm:text-base font-medium text-white max-w-md md:max-w-2xl lg:max-w-4xl mt-4">
              We are looking for
            </h2>
            <h1 className="text-[25.6px] md:text-[48px] font-medium text-white max-w-[1000px]">
              {details && details.job_title}
            </h1>
            <h2 className="text-[14.4px] sm:text-base font-light text-white max-w-md md:max-w-2xl lg:max-w-4xl mt-4" dangerouslySetInnerHTML={{ __html: details && details.overview}}>
              
            </h2>
          </div>
        </div>
      </section>


      <section className="max-w-[1440px] mx-auto px-5 sm:px-12 pt-[40px] lg:pt-24 pb-[60px] lg:pb-40">
        <div className="flex flex-col-reverse lg:flex-row gap-4">
          {/* Fixed 30% Column (mobile: bottom, desktop: right) */}
          <div className="w-full lg:w-[30%] mt-10 lg:mt-0">
            <div className='border-green border-2 rounded-xl p-5 lg:p-10 relative'>
                <h2 className="text-[20px] lg:text-[24px] font-semibold mb-2">Working Type</h2>
                <p className="text-base mb-6">Full Time</p>

                <h2 className="text-[20px] lg:text-[24px] font-semibold mb-2">Location</h2>
                <p className="text-base mb-6">On site</p>

                <h2 className="text-[20px] lg:text-[24px] font-semibold mb-2">Contact</h2>
                {/* <p className="text-base">+0000000000</p> */}
                <p className="text-base mb-6">info@inkimos.com</p>

                {/* <img src={Rectangle} alt="Image" className="w-[292px] h-[292px] mb-6" /> */}

                {/* <h2 className="text-[20px] lg:text-[24px] font-semibold mb-2">Your Contact Person</h2>
                <p className="text-base">Full Name</p>
                <p className="text-base">Designation</p> */}

                <div className='my-10 mb-20'>
                  <h2 className="text-[20px] lg:text-[24px] font-bold mb-2 text-blue ">Let’s Work Together</h2>
                  <p>Join Our Team and Shape the Future</p>
                </div>
                <div className='absolute bottom-0 right-0'>
                  <img src={img} alt="Image" />
                </div>
            </div>
          </div>

          {/* Scrollable 70% Column (mobile: top, desktop: left) */}
          <div className="w-full lg:w-[70%] bg-white px-4 overflow-y-visible lg:h-auto">
            <form className="space-y-8" onSubmit={formHandler}>
              <div className="w-full mb-2">
                <label htmlFor="name" className="block text-sm font-semibold text-dblack">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="mt-1 block w-full rounded-lg border border-dblack shadow-sm focus:ring-blue-500 focus:border-gray-700 p-4"
                  style={{ height: "50px" }}
                  onChange={inputHandler}
                  value={data.fullName}
                />
                <p className="text-red-600 text-sm h-2">{errors && errors.fullName}</p>
              </div>

              <div className="w-full mb-2">
                <label htmlFor="email" className="block text-sm font-semibold text-dblack">
                  E-mail address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 block w-full rounded-lg border border-dblack shadow-sm focus:ring-blue-500 focus:border-gray-700 p-4"
                  style={{ height: "50px" }}
                  onChange={inputHandler}
                  value={data.email}
                />
                <p className="text-red-600 text-sm h-2">{errors && errors.email}</p>
              </div>

              <div className="w-full mb-10">
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-dblack">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  className="mt-1 block w-full rounded-lg border border-dblack shadow-sm focus:ring-blue-500 focus:border-gray-700 p-4"
                  style={{ height: "50px" }}
                  onChange={inputHandler}
                  value={data.phoneNumber}
                />
                 <p className="text-red-600 text-sm h-2">{errors && errors.phoneNumber}</p>
              </div>

              <div htmlFor="resume" className="block text-sm font-semibold text-dblack">
                Attach your CV <span className="text-red-500">*</span>
                <p className="text-[12px] text-dblack">.pdf .doc .docx .rft / Max 5MB</p>
                <div>
                  <input
                    ref={resumeFile}
                    name="resume"
                    type="file"
                    className="hidden"
                    accept=".doc,.docx,.pdf"
                    onChange={(e) => setData((preData) => ({ ...preData, resume: e.target.files[0] }))}
                  />
                  <button
                    type="button"
                    onClick={() => resumeFile.current.click()}
                    className="rounded-md border-green border-2 bg-blue-500 font-bold text-dblack py-2 px-5 text-sm shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                  >
                    Upload +
                  </button>
                </div>
                <p className="text-red-600 text-sm h-2">{errors && errors.resume}</p>
              </div>

              <div className="w-full mb-10">
                <label htmlFor="linkedInUrl" className="block text-sm font-semibold text-dblack">
                  Portfolio Link 
                </label>
                <input
                  id="linkedInUrl"
                  name="linkedInUrl"
                  type="text"
                  className="mt-1 block w-full rounded-lg border border-dblack shadow-sm focus:ring-blue-500 focus:border-gray-700 p-4"
                  style={{ height: "50px" }}
                  onChange={inputHandler}
                  value={data.linkedInUrl}
                />
                 <p className="text-red-600 text-sm h-2">{errors && errors.linkedInUrl}</p>
              </div>

              <div className="w-full mb-10">
                <label htmlFor="additionalInfo" className="block text-sm font-semibold text-dblack">
                  Additional Information
                </label>
                <input
                  id="additionalInfo"
                  name="additionalInfo"
                  type="text"
                  className="mt-1 block w-full rounded-lg border border-dblack shadow-sm focus:ring-blue-500 focus:border-gray-700 p-4"
                  style={{ height: "50px" }}
                  onChange={inputHandler}
                  value={data.additionalInfo}
                />
              </div>

              <div className="mb-6">
                <div className='flex items-center '>
                  <input
                    type="checkbox"
                    className="text-blue-500 border-gray-300 rounded mt-2 lg:w-8 h-5"
                    onChange={(e)=>setData({ ...data, termsAndConditions: e.target.checked })}
                    checked={data.termsAndConditions}
                  />
                  <label htmlFor="agree" className="ml-2 text-[16px] text-gray-700">
                    I have read the Privacy policy and hereby I give my consent to Inkimos to process and handle my personal data given in the application form and in my CV for the purpose of preparing the recruitment process as set forth in the privacy policy.
                  </label>
                </div>
                <p className="text-red-600 text-sm h-2">{errors && errors.termsAndConditions}</p>
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg bg-green hover:bg-dblack focus:outline-none"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
      <Modal
          isOpen={open}
          setIsOpen={setOpen}
          title="Application Submitted!"
          message="Your application has been successfully submitted! We'll review your information and contact you if there's a match. Thank you for applying."
      />
    </>
  );
};

export default JobApplication;
