import { MdClose, MdCheck  } from "react-icons/md";
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

const Modal = ({ isOpen, setIsOpen, title, message}) => {
    return (
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 my-auto"
            >
              <div className="flex align-middle justify-end my-5 mx-5">
                <MdClose className="text-xl cursor-pointer text-end" onClick={() => setIsOpen(false)} />
              </div>
  
              <div className="bg-white text-center pb-10 px-10">
                <div className="flex justify-center">
                  <div className='border-2 border-green w-10 h-10 rounded-full flex justify-center items-center'>
                     <MdCheck className='text-center text-green text-2xl '/>
                  </div>
                </div>
                <h3 className="my-5 font-noto font-bold text-lg">{title}</h3>
                <p className="text-sm">{message}</p>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    );
  };
  
  export default Modal;