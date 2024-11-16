import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Inkimos from '../../assets/IMG 5.png'

const DescriptionModal = React.memo(({ open, setOpen, htmlContent, applyBtn }) => {
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
            className="relative transform overflow-hidden text-left rounded-3xl shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="relative bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
              <div className="p-0 relative z-50">
                <div className="flex items-center justify-end">
                  <XMarkIcon aria-hidden="true" className="size-6 cursor-pointer text-end" onClick={() => setOpen(false)} />
                </div>
                <div className="mt-3 px-5 max-h-[500px] overflow-x-auto">
                  <div
                    className="text-sm text-gray-700 description"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                  ></div>

                  <div className="mt-10 flex justify-center">
                    {/* <button
                      onClick={() => setOpen(false)}
                      className="border-2 border-green rounded-full text-white bg-green px-6 py-3 text-sm font-semibold shadow-sm transition duration-300 hover:bg-darkGreen hover:text-black"
                    >
                      Close
                      
                    </button> */}
                     <button
                      className="bg-darkBlue py-2 px-3 sm:py-3 sm:px-6 rounded-full text-white text-base md:text-[19.2px] flex items-center -mt-4 text-center"
                      onClick={applyBtn}
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
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
});

export default DescriptionModal;
