import React, { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon  } from '@heroicons/react/24/outline'
import axios from 'axios';
import config from '../../config';

const FormModel = React.memo(({open, setOpen}) => {
    const [data, setData]=useState({
        fullName:'',
        phoneNumber:'',
        email:'',
        linkedInUrl:'',
        role:'',
        resume:''
    });

    const [errors, setErrors]=useState(null);
    const validateForm = () => {
        const validationErrors = {};

        if (!data.fullName && data.fullName.trim()=== "") {
            validationErrors.fullName="Name is required!";
        }

        if (!data.phoneNumber || data.phoneNumber.trim()=== "") {
            validationErrors.phoneNumber="Number is required!";
        }

        if (!data.email || data.email.trim()=== "") {
            validationErrors.email="Email is required!";
        }else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                validationErrors.email = "Please enter a valid email address!";
            }
        }

        if (!data.role) {
            validationErrors.role="Role is required!";
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
    const inputHandler=(e)=>{
        const { name, value}=e.target;
        setData((preData)=>({
            ...preData,
            [name]:value
        }))
    }

    const formHandler=(e)=>{
        e.preventDefault();
        // console.log('working');
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            //console.log(validationErrors);
        } else {
            setErrors(null);
            const formData=new FormData();
            formData.append('name', data.fullName);
            formData.append('phone', data.phoneNumber);
            formData.append('email', data.email);
            formData.append('role', data.role);
            formData.append('url', data.linkedInUrl);
            formData.append('resume', data.resume);
            axios.post(`${config.baseUrl}/api/career`, formData)
            .then((res)=>{
                console.log(res.data);
                if(res.data.status==="success"){
                    setData({
                        fullName:'',
                        phoneNumber:'',
                        email:'',
                        linkedInUrl:'',
                        role:'',
                        resume:''
                    });
                    setOpen(false);
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-40 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center  sm:p-0">
                <DialogPanel
                transition
                className="relative transform overflow-hidden text-left rounded-2xl shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                >
                <div className="relative bg-[url('./assets/Inkimos-BG-Who-we-are-2.jpg')] bg-cover bg-center px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                    <div className="p-0 relative z-50">
                        <div className="flex items-center justify-end">
                            <XMarkIcon  aria-hidden="true" className="size-6 cursor-pointer text-white text-end" onClick={() => setOpen(false)}/>
                        </div>
                        <div className="mt-3 px-5">
                            <form className="pb-5" onSubmit={formHandler}>
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="col-span-full">
                                        <div>
                                            <input
                                                id="fullName"
                                                name="fullName"
                                                type="text"
                                                placeholder="Full Name"
                                                className="block w-full rounded-sm p-1.5 border-b-[1px] text-white  bg-[#030E1F]  outline-none sm:text-sm/6"
                                                onChange={inputHandler}
                                                value={data.fullName}
                                            />
                                        </div>
                                        {errors && <p className="text-green text-sm">{errors.fullName}</p>}
                                    </div>

                                    <div className="col-span-full">
                                        <div>
                                            <input
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                type="text"
                                                placeholder="Phone Number"
                                                className="block w-full rounded-sm p-1.5 border-b-[1px] text-white  bg-[#030E1F]  outline-none sm:text-sm/6"
                                                onChange={inputHandler}
                                                value={data.phoneNumber}
                                            />
                                        </div>
                                        {errors && <p className="text-green text-sm">{errors.phoneNumber}</p>}
                                    </div>

                                    <div className="col-span-full">
                                        <div>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Email Address"
                                                className="block w-full rounded-sm p-1.5 border-b-[1px] text-white  bg-[#030E1F]  outline-none sm:text-sm/6"
                                                onChange={inputHandler}
                                                value={data.email}
                                            />
                                        </div>
                                        {errors && <p className="text-green text-sm">{errors.email}</p>}
                                    </div>

                                    <div className="col-span-full">
                                        <div>
                                            <input
                                                id="linkedInUrl"
                                                name="linkedInUrl"
                                                type="text"
                                                placeholder="LinkedIn Profile Url"
                                                className="block w-full rounded-sm p-1.5 border-b-[1px] text-white  bg-[#030E1F]  outline-none sm:text-sm/6"
                                                onChange={inputHandler}
                                                value={data.linkedInUrl}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <div>
                                            <select
                                                id="role"
                                                name="role"
                                                className="block w-full rounded-sm p-1.5 border-b-[1px] text-white  bg-[#030E1F]  outline-none sm:text-sm/6"
                                                onChange={inputHandler}
                                                value={data.role}
                                            >
                                                <option value='' disabled>Select Role</option>
                                                <option value='AI Developer'>AI Developer</option>
                                                <option value='Junior AI Developer'>Junior AI Developer</option>
                                            </select>
                                        </div>
                                        {errors && <p className="text-green text-sm">{errors.role}</p>}
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="" className='text-white'>Upload resume</label>
                                        <div>
                                            <input
                                                id="resume"
                                                name="resume"
                                                type="file"
                                                placeholder="LinkedIn Profile Url"
                                                className="block w-full rounded-sm p-1.5 text-white outline-none sm:text-sm/6"
                                                accept=".doc,.docx,.pdf"
                                                onChange={(e)=>setData((preData)=>({...preData, resume:e.target.files[0] }))}
                                                
                                            />
                                        </div>
                                        {errors && <p className="text-green text-sm">{errors.resume}</p>}
                                    </div>
                                </div>
                                <div className='mt-5 text-center'>
                                    <button
                                        type="submit"
                                        className="w-full border-2 border-green rounded-full text-white bg-transparent px-6 py-3 text-sm font-semibold shadow-sm trasnsition duration-300 hover:bg-green hover:text-black sm:ml-3 sm:w-auto"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            
                </DialogPanel>
            </div>
            </div>
        </Dialog>
    )
});

export default  FormModel
