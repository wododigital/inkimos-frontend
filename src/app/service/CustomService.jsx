import { React, useEffect } from 'react';
import Cu1 from '../../assets/Cus (5).png';
import Cu2 from '../../assets/Cus.png';
import Cu3 from '../../assets/Cus (2).png';
import Cu4 from '../../assets/Cus (4).png';
import Cu5 from '../../assets/Cus (3).png';
import Cu6 from '../../assets/Cus (6).png';
import Cusbg from '../../assets/Cus (1).png';
import Cusbg1 from '../../assets/Cus (7).png';
import Inkimos from '../../assets/IMG 5.png';
import Cards from '../../components/Cards';
import Partner from '../../components/Partner';
import './service.css';


const CustomService = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])
  const cardData = [
    {
      title: 'ERP Implementation & Integration',
      description:
        'Optimize your operations with customized ERP systems that streamline processes, improve productivity, and enhance decision-making. We integrate ERPs that align with your unique business needs, ensuring seamless workflows across all departments.',
      mainImage: Cu1,
      secondaryImage: Inkimos,
    },
    {
      title: 'CRM Development & Integration',
      description:
        'Build and integrate customer relationship management (CRM) systems that are fully customized to your business processes. Our solutions help you manage customer interactions, boost engagement, and drive sales with ease and efficiency.',
      mainImage: Cu2,
      secondaryImage: Inkimos,
    },
    {
      title: 'Custom Software Development',
      description:
        'Design and develop custom software applications tailored to your specific business needs. Our solutions are built for scalability, flexibility, and growth, that ensure your software evolves with your business.',
      mainImage: Cu3,
      secondaryImage: Inkimos,
    },
    {
      title: 'API Development & Integration',
      description:
        'Seamlessly connect your software systems with custom API development and integration. Our APIs ensure smooth data flow and interconnectivity between different platforms, improving efficiency and enhancing user experience.',
      mainImage: Cu4,
      secondaryImage: Inkimos,
    },
    {
      title: 'Legacy System Modernization',
      description:
        'Upgrade outdated legacy systems with modern software solutions that enhance functionality, scalability, and performance. We bring your systems into the future, reducing operational bottlenecks and improving productivity.',
      mainImage: Cu5,
      secondaryImage: Inkimos,
    },
    {
      title: 'DevOps & Continuous Integration/Deployment',
      description:
        'Streamline your software development and deployment with DevOps strategies that integrate continuous integration and continuous deployment (CI/CD) practices. Our approach ensures faster, more reliable software releases and improved collaboration between teams.',
      mainImage: Cu6,
      secondaryImage: Inkimos,
    },
  ];

  return (
    <>
      <section id="heading" className="bg-bgblue relative">
        <div className="bg-bgblue min-h-[500px] md:min-h-[550px] w-full flex items-center justify-center flex-col text-center relative">
          <img src={Cusbg1} alt="Circle1 image" className="absolute right-0 top-20 w-[100px] h-[225px] md:w-[200px] md:h-[300px]" />
          <img src={Cusbg} alt="Circle2 image" className="absolute left-[-0px] md:bottom-[-50px] w-[200px] bottom-0 md:w-[400px] h-auto" />
          <div className="absolute inset-0 bg-blue-950 opacity-20"></div>
          <div className="relative mt-28 flex flex-col items-center justify-center mb-10 md:mb-20 px-4">
            <h1 className="text-[25.6px] md:text-[48px]  font-medium text-white animate-slide-in max-w-[1000px]">
              Custom Software Solutions That Drive Operational Excellence    </h1>
            <h2 className="text-[14.4px] sm:text-base font-light text-white max-w-md md:max-w-2xl lg:max-w-4xl mt-4 animate-slide-in">
              Empower your business with tailor-made software solutions that streamline operations and drive growth. From ERP and CRM systems to custom software development, we build, integrate, and modernize enterprise solutions that align with your business goals.       </h2>
          </div>
        </div>
      </section>


      {/* Cards section with slight overlap and rounded top corners */}
      <div className="relative z-[5] -mt-16 rounded-[50px] md:rounded-t-[72px] overflow-hidden">
        <Cards cardData={cardData} />
      </div>
      <Partner />
    </>
  );
};

export default CustomService;
