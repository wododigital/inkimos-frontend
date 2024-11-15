import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon  } from '@heroicons/react/24/outline'

const DescriptionModal = React.memo(({ open, setOpen, htmlContent }) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
      />

      <div className="fixed inset-0 z-40 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden text-left rounded-md shadow-xl transition-all"
          >
            <div className="relative bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="absolute inset-0 bg-gray-100"></div>
              <div className="p-0 relative z-50">
                <div className="flex items-center justify-end">
                  <XMarkIcon
                    aria-hidden="true"
                    className="h-6 w-6 cursor-pointer text-black"
                    onClick={() => setOpen(false)}
                  />
                </div>
                <div className="mt-3 px-5">
                  {/* Using dangerouslySetInnerHTML to inject HTML content */}
                  <div
                    className="text-sm text-gray-700 list-disc"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                  ></div>

                  <div className="mt-5 text-center">
                    <button
                      onClick={() => setOpen(false)}
                      className="border-2 border-green rounded-full text-white bg-green px-6 py-3 text-sm font-semibold shadow-sm transition duration-300 hover:bg-darkGreen hover:text-black"
                    >
                      Close
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
