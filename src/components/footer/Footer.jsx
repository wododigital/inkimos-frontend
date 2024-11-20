import { useState } from 'react';
import Logo from '../../assets/Logo-01.png';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    const footerData = {
       'Pages': [
            { label: 'Home', path: '/' },
            { label: 'About', path: '/about' },
            { label: 'What we do', path: '/our-services' },
            { label: 'Careers', path: '/careers' },
            { label: 'Insights', path: '/insights' }
        ],
        'Services': [
            { label: 'Artificial Intelligence', path: '/our-services/artificial-intelligence' },
            { label: 'Business Process Outsourcing', path: '/our-services/business-process-outsourcing' },
            { label: 'Cloud Computing', path: '/our-services/cloud-computing' },
            { label: 'Digital Transformation', path: '/our-services/digital-transformation' },
            { label: 'Custom Software', path: '/our-services/custom-software' },
            { label: 'Managed Services & IT support', path: '/our-services/managed-services-it-support' }
        ],
        'Support': [
            { label: 'Contact us', path: '/contact' },
            { label: 'Terms and Conditions', path: '/terms-and-conditions' },
            { label: 'Privacy Policy', path: '/privacy-policy' }
        ]
    };

    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <footer className="bg-black text-white pt-10 pb-4 lg:pt-16 lg:pb-8">
        <div className="max-w-[1440px] mx-auto  px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:gap-8">
                <div className="pb-10 lg:pb-0 lg:col-span-2 lg:pe-10">
                    <a href="/">
                        <img src={Logo} alt='Logo' className='w-36'/>
                    </a>
                    <p className="mt-4 text-white ">
                        Transformation isn't just a phase—it's a continuous strategy for success. At Inkimos, we help you harness change, turning challenges into opportunities.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <a href="https://www.instagram.com/inkimos_ae/?igsh=YTFkOHYzNWNsdzJy" className="text-[#00ffff] hover:text-white">
                             <FaInstagram className='text-green w-6 h-6' />    
                        </a>
                        <a href="https://x.com/inkimos81419" className="text-[#00ffff] hover:text-white">
                            <BsTwitterX className='text-green w-6 h-6' />
                        </a>
                        <a href="https://www.linkedin.com/company/inkimos/" className="text-[#00ffff] hover:text-white">
                             <FaLinkedin className='text-green w-6 h-6' />
                        </a>
                    </div>
                </div>

                {Object.entries(footerData).map(([title, links]) => (
                    <div key={title} className="lg:col-span-1">
                        <button
                            className="w-full flex justify-between items-center lg:hidden text-green font-semibold text-lg mb-4"
                            onClick={() => toggleSection(title)}
                        >
                            {title}
                            <svg
                                className={`w-4 h-4 transform transition-transform ${
                                    activeSection === title ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <h3 className="hidden lg:block text-blue font-semibold text-lg mb-4">{title}</h3>

                        <ul
                            className={`space-y-2 ${
                                activeSection === title || window.innerWidth >= 1024 ? 'block' : 'hidden'
                            } lg:block`}
                        >
                            {links.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.path} className="text-gray-400 hover:text-green transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 pt-4 lg:mt-16 lg:pt-8 border-t border-gray-800 flex flex-col lg:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">Inkimos. All Rights Reserved.</p>
                <p className="text-gray-400 text-sm mt-2 lg:mt-0">
                    Designed by <a href="https://wodo.digital" target='_blank'>WODO</a>
                </p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;