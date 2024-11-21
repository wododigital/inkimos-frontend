import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import Itbg from '../../assets/It (1).png';
import Rectangle from '../../assets/Rectangle.png';


const JobApplication = () => {
  const location = useLocation();
  const { jobTitle } = location.state || {};

  const [data, setData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    linkedInUrl: '',
    role: '',
    resume: ''
});

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

    if (!data.role) {
        validationErrors.role = "Role is required!";
    }

    if (!data.resume) {
        validationErrors.resume = 'Please upload a resume.';
    } else {
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedTypes.includes(data.resume.type)) {
            validationErrors.resume = 'Please upload a .doc, .docx, or .pdf file.';
        }
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
    // console.log('working');
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        //console.log(validationErrors);
    } else {
        setErrors(null);
        const formData = new FormData();
        formData.append('name', data.fullName);
        formData.append('phone', data.phoneNumber);
        formData.append('email', data.email);
        formData.append('role', data.role);
        formData.append('url', data.linkedInUrl);
        formData.append('resume', data.resume);
        axios.post(`${config.baseUrl}/api/career`, formData)
            .then((res) => {
                console.log(res.data);
                if (res.data.status === "success") {
                    setData({
                        fullName: '',
                        phoneNumber: '',
                        email: '',
                        linkedInUrl: '',
                        role: '',
                        resume: ''
                    });
                   
                    setOpen(false);
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
      <div className="bg-bgblue min-h-[500px] md:min-h-[550px] w-full flex items-center justify-center flex-col text-center relative">
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
            {jobTitle || 'Job Title Unavailable'}
          </h1>
          <h2 className="text-[14.4px] sm:text-base font-light text-white max-w-md md:max-w-2xl lg:max-w-4xl mt-4">
            From 24/7 support to network management and cybersecurity, we provide end-to-end managed services that keep
            your operations secure, efficient, and always running smoothly.
          </h2>
        </div>
      </div>
    </section>


    <section className="max-w-[1440px] mx-auto px-5 sm:px-12 pt-[40px] lg:pt-24 pb-[60px] lg:pb-40">
  <div className="flex flex-col-reverse lg:flex-row gap-4">
    {/* Fixed 30% Column (mobile: bottom, desktop: right) */}
    <div className="w-full lg:w-2/6 border border-green border-4 rounded-xl p-[40px] sticky top-0 min-h-[785px] lg:sticky lg:top-0">
      <h2 className="text-[24px] font-semibold mb-2">Working Type</h2>
      <p className="text-base mb-6">Full Time, On site</p>

      <h2 className="text-[24px] font-semibold mb-2">Location</h2>
      <p className="text-base mb-6">Full Time, On site</p>

      <h2 className="text-[24px] font-semibold mb-2">Contact</h2>
      <p className="text-base">+0000000000</p>
      <p className="text-base mb-6">info@inkimos.com</p>

      <img src={Rectangle} alt="Image" className="w-[292px] h-[292px] mb-6" />

      <h2 className="text-[24px] font-semibold mb-2">Your Contact Person</h2>
      <p className="text-base">Full Name</p>
      <p className="text-base">Designation</p>
    </div>

    {/* Scrollable 70% Column (mobile: top, desktop: left) */}
    <div className="w-full lg:w-4/6 bg-white px-4 overflow-y-visible h-screen lg:h-auto">
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
          <p className="text-green text-sm h-2">{errors && errors.fullName}</p>
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
          <p className="text-green text-sm h-2">{errors && errors.email}</p>
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
        </div>

        <div htmlFor="resume" className="block text-sm font-semibold text-dblack">
          Attach your CV <span className="text-red-500">*</span>
          <p className="text-[12px] text-dblack">.pdf .doc .docx .rft / Max 10MB</p>
          <div>
            <input
              id="resume"
              name="resume"
              type="file"
              className="hidden"
              accept=".doc,.docx,.pdf"
              onChange={(e) => setData((preData) => ({ ...preData, resume: e.target.files[0] }))}
            />
            <button
              type="button"
              onClick={() => document.getElementById('resume').click()}
              className="rounded-md border border-green border-2 bg-blue-500 font-bold text-dblack py-2 text-sm shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-4"
            >
              Upload +
            </button>
          </div>
          <p className="text-green text-sm h-2">{errors && errors.resume}</p>
        </div>

        <div className="w-full mb-10">
          <label htmlFor="linkedInUrl" className="block text-sm font-semibold text-dblack">
            Portfolio Link <span className="text-red-500">*</span>
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
            value={data.phoneNumber}
          />
        </div>

        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            className="h-4 w-4 text-blue-500 border-gray-300 rounded mt-2"
          />
          <label htmlFor="agree" className="ml-2 text-[16px] text-gray-700">
            I have read the Privacy policy and hereby I give my consent to Inkimos to process and handle my personal data given in the application form and in my CV for the purpose of preparing the recruitment process as set forth in the privacy policy.
          </label>
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
    
</>
  );
};

export default JobApplication;
