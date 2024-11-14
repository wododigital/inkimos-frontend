import React, { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/Logo-01.png'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Know Inkimos', href: '/about' },
  { name: 'Insights', href: '/insights' },
  { name: 'Careers', href: '/careers' },
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

  const servicesData = [
    {
        title: "01. Cloud Services",
        services: [
            { name: "Infrastructure Management" },
            { name: "Security & Compliance"},
            { name: "Multi-Cloud Strategy & Integration" }
        ],
        viewAllLink: "/our-services/cloud-computing"
    },
    {
        title: "02. Artificial Intelligence",
        services: [
            { name: "Predictive Analytics & Insights", link: "#" },
            { name: "Machine Learning Model Development", link: "#" },
            { name: "Natural Language Processing (NLP)", link: "#" }
        ],
        viewAllLink: "/our-services/artificial-intelligence"
    },
    {
        title: "03. Software Solutions",
        services: [
            { name: "ERP Implementation", link: "#" },
            { name: "CRM Development", link: "#" },
            { name: "Custom Software Development", link: "#" }
        ],
        viewAllLink: "/our-services/custom-software"
    },
    {
        title: "04. Consulting & BPO",
        services: [
            { name: "Process Optimization & Outsourcing" },
            { name: "Data-Driven Insights & Process Consulting"},
            { name: "Risk Management & Compliance Outsourcing"}
        ],
        viewAllLink: "/our-services/business-process-outsourcing"
    },
    {
        title: "05. Digital Transformation",
        services: [
            { name: "UI/UX", link: "#" },
            { name: "Product Engineering & Development", link: "#" },
            { name: "Digital Experience Platforms (DXP)", link: "#" }
        ],
        viewAllLink: "/our-services/digital-transformation"
    },
    {
        title: "06. Managed Services & IT support",
        services: [
            { name: "Managed Services & IT support", link: "#" },
            { name: "Network & Infrastructure Management", link: "#" },
            { name: "Cybersecurity Services", link: "#" }
        ],
        viewAllLink: "/our-services/managed-services-it-support"
    }
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-10 text-white transition-transform duration-300 bg-black ${!isVisible ? 'header-hidden' : ''}`}>
        <nav aria-label="Global" className="max-w-[1440px] mx-auto flex items-center justify-between lg:p-2.5 px-5 lg:px-12 relative">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              {/* <span className="sr-only">Your Company</span> */}
              <img
                alt="Logo"
                src={logo}
                className="w-36"
              />
            </Link>
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
                  <div className="flex flex-wrap justify-between">
                      {servicesData.map((category, index) => (
                          <div key={index} className="menu-column py-5 w-full md:w-1/3 lg:w-1/3 px-4">
                              <h3 className="text-xl font-semibold">{category.title}</h3>
                              <ul className="py-2 list-image-bullet">
                                  {category.services.map((service, idx) => (
                                      <li key={idx} className="py-1">
                                          <p className="hover:text-green">{service.name}</p>
                                      </li>
                                  ))}
                              </ul>
                              <Link to={category.viewAllLink} className="underline hover:text-green">View all</Link>
                          </div>
                      ))}
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
                  <div className="flex flex-wrap justify-between">
                      {servicesData.map((category, index) => (
                          <div key={index} className="menu-column py-5 w-full md:w-1/3 lg:w-1/3 px-4 py-5">
                              <h3 className="text-xl font-semibold">{category.title}</h3>
                              <ul className="py-2">
                                  {category.services.map((service, idx) => (
                                      <li key={idx} className="py-1">
                                          <a href={service.link} className="hover:text-green">{service.name}</a>
                                      </li>
                                  ))}
                              </ul>
                              <a href={category.viewAllLink} className="hover:text-green">View all</a>
                          </div>
                      ))}
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
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Logo"
                  src={logo}
                  className="w-28"
                />
              </Link>
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
                          to="/our-services/cloud-computing"
                          className="block rounded-lg py-1 pl-6 pr-3 text-sm leading-7 text-white hover:text-green"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Cloud Computing
                        </Link>
                        <Link
                          to="/our-services/artificial-intelligence"
                          className="block rounded-lg py-1 pl-6 pr-3 text-sm leading-7 text-white hover:text-green"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Artificial Intelligence
                        </Link>

                        <Link
                          to="/our-services/business-process-outsourcing"
                          className="block rounded-lg py-1 pl-6 pr-3 text-sm leading-7 text-white hover:text-green"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Consulting & BPO
                        </Link>

                        <Link
                          to="/our-services/digital-transformation"
                          className="block rounded-lg py-1 pl-6 pr-3 text-sm leading-7 text-white hover:text-green"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Digital Transformation
                        </Link>

                        <Link
                          to="/our-services/custom-software"
                          className="block rounded-lg py-1 pl-6 pr-3 text-sm leading-7 text-white hover:text-green"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Software Solutions
                        </Link>

                        <Link
                          to="/our-services/managed-services-it-support"
                          className="block rounded-lg py-1 pl-6 pr-3 text-sm leading-7 text-white hover:text-green"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                         Managed Services & IT support
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link
                    to="/about"
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
                 
                  <Link  onClick={() => setMobileMenuOpen(false)} to="/contact" className="text-center block bg-transparent border-2 border-green text-green  py-2 rounded-full hover:bg-green hover:text-black transition-all">
                    Schedule A Call
                  </Link>

                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
    </header>
  )
}

export default Header;
