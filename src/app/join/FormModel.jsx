import React, { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon  } from '@heroicons/react/24/outline'

const FormModel = React.memo(({open, setOpen}) => {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
            transition
            className="relative transform overflow-hidden text-left rounded-md shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
            <div className="relative bg-[url('./assets/Inkimos-BG-Who-we-are-2.jpg')] bg-cover bg-center px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                <div className="p-0 relative z-10">
                    <div className="flex items-center justify-end">
                        <XMarkIcon  aria-hidden="true" className="size-6 cursor-pointer text-white text-end" onClick={() => setOpen(false)}/>
                    </div>
                    <div className="mt-3 px-5">
                        <form className="pb-5">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-full">
                                    <div>
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            placeholder="Full Name"
                                            className="block w-full rounded-sm p-1.5 border-b-[1px] text-white  bg-[#030E1F]  outline-none sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <div>
                                        <input
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            type="text"
                                            placeholder="Phone Number"
                                            className="block w-full rounded-sm p-1.5 border-b-[1px] text-white  bg-[#030E1F]  outline-none sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <div>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Email Address"
                                            className="block w-full rounded-sm p-1.5 border-b-[1px] text-white  bg-[#030E1F]  outline-none sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <div>
                                        <input
                                            id="linkedInUrl"
                                            name="linkedInUrl"
                                            type="text"
                                            placeholder="LinkedIn Profile Url"
                                            className="block w-full rounded-sm p-1.5 border-b-[1px] text-white  bg-[#030E1F]  outline-none sm:text-sm/6"

                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <div>
                                        <select
                                            id="role"
                                            name="role"
                                            className="block w-full rounded-sm p-1.5 border-b-[1px] text-white  bg-[#030E1F]  outline-none sm:text-sm/6"
                                        >
                                            <option value='' selected disabled>Select Role</option>
                                            <option value='AI Developer'>AI Developer</option>
                                            <option value='Junior AI Developer'>Junior AI Developer</option>
                                        </select>
                                    </div>
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

                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5 text-center'>
                                <button
                                    type="button"
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
