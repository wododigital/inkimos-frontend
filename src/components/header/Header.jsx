import React, { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/Logo-01.png'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Know Inkimos', href: '/' },
  { name: 'Insights', href: '/insights' },
  { name: 'Careers', href: '/Careers' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState({
    services: false,
    industry: false,
  });
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      
      // Only hide header after scrolling down 100px
      if (currentScrollPos > 100) {
        setIsVisible(!isScrollingDown);
      } else {
        setIsVisible(true);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={`fixed inset-x-0 top-0 z-10 lg:z-20 text-white transition-transform duration-300 bg-black ${!isVisible ? 'header-hidden' : ''}`}>
        <nav aria-label="Global" className="max-w-[1440px] mx-auto flex items-center justify-between p-2.5 px-5 lg:px-12 relative">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              {/* <span className="sr-only">Your Company</span> */}
              <img
                alt="Logo"
                src={logo}
                className="w-36"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5  "
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
              <div className='menu-item '>
                <a to='#' className="font-semibold hover:text-green">
                  What we do
                </a>
                <div className="megamenu text-black p-5 px-10">
                  <div className='border-b-[1px] border-green'>
                    <h2 className='text-2xl'>Our Services</h2>
                  </div>
                  <div className="flex justify-between">
                    <div className="menu-column py-5">
                      <h3 className='text-xl font-semibold'>01. Cloud Services</h3>
                      <ul className='py-2'>
                        <li className='py-1'><a href="#" className='hover:text-green'>Infrastructure Management</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Security & Compliance</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Security & Compliance</a></li>
                      </ul>
                      <a href="#">View all</a>
                    </div>
                    <div className="menu-column py-5">
                      <h3 className='text-xl font-semibold'>02. Artificial Intelligence</h3>
                      <ul className='py-2'>
                        <li className='py-1'><a href="#" className='hover:text-green'>Predictive Analytics & Insights</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Machine Learning Model Development</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Natural Language Processing (NLP)</a></li>
                      </ul>
                      <a href="#">View all</a>
                    </div>
                    <div className="menu-column py-5">
                      <h3 className='text-xl font-semibold'>03. Software Solutions</h3>
                      <ul className='py-2'>
                        <li className='py-1'><a href="#" className='hover:text-green'>ERP Implementation</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>CRM Development</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Custom Software Development</a></li>
                      </ul>
                      <a href="#">View all</a>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="menu-column py-5">
                      <h3 className='text-xl font-semibold'>04. Cloud Services</h3>
                      <ul className='py-2'>
                        <li className='py-1'><a href="#" className='hover:text-green'>Infrastructure Management</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Security & Compliance</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Security & Compliance</a></li>
                      </ul>
                      <a href="#">View all</a>
                    </div>
                    <div className="menu-column py-5">
                      <h3 className='text-xl font-semibold'>05. Artificial Intelligence</h3>
                      <ul className='py-2'>
                        <li className='py-1'><a href="#" className='hover:text-green'>Predictive Analytics & Insights</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Machine Learning Model Development</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Natural Language Processing (NLP)</a></li>
                      </ul>
                      <a href="#">View all</a>
                    </div>
                    <div className="menu-column py-5">
                      <h3 className='text-xl font-semibold'>06. Software Solutions</h3>
                      <ul className='py-2'>
                        <li className='py-1'><a href="#" className='hover:text-green'>ERP Implementation</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>CRM Development</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Custom Software Development</a></li>
                      </ul>
                      <a href="#">View all</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='menu-item '>
                <a to='#' className="font-semibold hover:text-green">
                  Industry Expertise
                </a>
                <div className="megamenu text-black p-5 px-10">
                  <div className='border-b-[1px] border-green'>
                    <h2 className='text-2xl'>Our Services</h2>
                  </div>
                  <div className="flex justify-between">
                    <div className="menu-column py-5">
                      <h3 className='text-xl font-semibold'>01. Cloud Services</h3>
                      <ul className='py-2'>
                        <li className='py-1'><a href="#" className='hover:text-green'>Infrastructure Management</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Security & Compliance</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Security & Compliance</a></li>
                      </ul>
                      <a href="#">View all</a>
                    </div>
                    <div className="menu-column py-5">
                      <h3 className='text-xl font-semibold'>02. Artificial Intelligence</h3>
                      <ul className='py-2'>
                        <li className='py-1'><a href="#" className='hover:text-green'>Predictive Analytics & Insights</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Machine Learning Model Development</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Natural Language Processing (NLP)</a></li>
                      </ul>
                      <a href="#">View all</a>
                    </div>
                    <div className="menu-column py-5">
                      <h3 className='text-xl font-semibold'>03. Software Solutions</h3>
                      <ul className='py-2'>
                        <li className='py-1'><a href="#" className='hover:text-green'>ERP Implementation</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>CRM Development</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Custom Software Development</a></li>
                      </ul>
                      <a href="#">View all</a>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="menu-column py-5">
                      <h3 className='text-xl font-semibold'>04. Cloud Services</h3>
                      <ul className='py-2'>
                        <li className='py-1'><a href="#" className='hover:text-green'>Infrastructure Management</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Security & Compliance</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Security & Compliance</a></li>
                      </ul>
                      <a href="#">View all</a>
                    </div>
                    <div className="menu-column py-5">
                      <h3 className='text-xl font-semibold'>05. Artificial Intelligence</h3>
                      <ul className='py-2'>
                        <li className='py-1'><a href="#" className='hover:text-green'>Predictive Analytics & Insights</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Machine Learning Model Development</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Natural Language Processing (NLP)</a></li>
                      </ul>
                      <a href="#">View all</a>
                    </div>
                    <div className="menu-column py-5">
                      <h3 className='text-xl font-semibold'>06. Software Solutions</h3>
                      <ul className='py-2'>
                        <li className='py-1'><a href="#" className='hover:text-green'>ERP Implementation</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>CRM Development</a></li>
                        <li className='py-1'><a href="#" className='hover:text-green'>Custom Software Development</a></li>
                      </ul>
                      <a href="#">View all</a>
                    </div>
                  </div>
                </div>
              </div>
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="font-semibold  hover:text-green ">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/contact" className="border-2 rounded-full px-5 py-2 border-green text-sm/6 font-semibold">
                Schedule A Call
            </Link>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full text-white overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Logo"
                  src={logo}
                  className="w-28"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5  "
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-4 py-6 ">
                  <div className="-mx-3">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-white"
                      onClick={() =>
                        setNavMenuOpen((prevData) => ({
                          ...prevData,
                          services: !prevData.services,
                        }))
                      }
                    >
                      What we do
                      <svg
                        className={`h-5 w-5 flex-none transition-all ${
                          navMenuOpen.services ? "rotate-90" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="#fff"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06L8.28 14.78a.75.75 0 1 1-1.06-1.06L11.44 10 7.22 5.78a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {navMenuOpen.services && (
                      <div className="mt-2 space-y-2 transition-all duration-200">
                        <Link
                          to="/"
                          className="block rounded-lg py-1 pl-6 pr-3 text-sm leading-7 text-white hover:text-green"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Cloud Computing
                        </Link>
                        <Link
                          to="/"
                          className="block rounded-lg py-1 pl-6 pr-3 text-sm leading-7 text-white hover:text-green"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Artificial Intelligence
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block px-3 py-2 text-base leading-7 text-white hover:text-green"
                  >
                    Know Inkimos
                  </Link>
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block px-3 py-2 text-base leading-7 text-white hover:text-green"
                  >
                    Insights
                  </Link>
                  <Link
                    to="/career"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block  px-3 py-2 text-base leading-7 text-white hover:text-green"
                  >
                    Careers
                  </Link>
                  <button className=" w-full bg-transparent border-2 border-green text-green px-6 py-2 rounded-full hover:bg-green hover:text-black transition-all">
                    Schedule A Call
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
    </header>
  )
}

export default Header;
