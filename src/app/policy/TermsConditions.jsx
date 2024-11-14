import {React,useEffect} from 'react';

const TermsConditions = () => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[])
  return (
  <>
  <section className='max-w-[1440px] mx-auto px-5 sm:px-12 py-8 lg:py-24 text-black '>

    <h1 className='flex text-[40px] font-medium underline items-center justify-center'>Terms and Conditions </h1>
    <p className="text-base mb-4">
    Welcome to <a href="https://www.inkimos.com" target="_blank" rel="noopener noreferrer" className="text-red-700 ">www.inkimos.com</a>. By accessing and using our website, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully. If you disagree with any part of these terms, you may not access the website.
  </p>
  <p className='text-base font-semibold'>1. Acceptance of Terms</p>
  </section>
  </>  )
}

export default TermsConditions