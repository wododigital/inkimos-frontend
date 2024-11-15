import { React, useEffect } from 'react';
import Cbg from '../../assets/cloud (1).png'
import Cbg1 from '../../assets/cloud (8).png'
import Cl1 from '../../assets/cloud (7).png'
import Cl2 from '../../assets/cloud (3).png'
import Cl3 from '../../assets/cloud (6).png'
import Cl4 from '../../assets/cloud (2).png'
import Cl5 from '../../assets/cloud (5).png'
import Cl6 from '../../assets/cloud (4).png'
import Inkimos from '../../assets/IMG 5.png';
import Cards from '../../components/Cards';
import Partner from '../../components/Partner';
import './service.css';


const AiService = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])
  const cardData = [
    {
      title: 'Cloud Infrastructure Management',
      description:
        'Design, provision, and manage secure, scalable cloud environments on platforms like AWS, Azure, and Google Cloud. Ensure high availability and optimized performance tailored to your specific business needs, with a focus on reliability and flexibility.',
      mainImage: Cl1,
      secondaryImage: Inkimos,
    },
    {
      title: 'Cloud Security & Compliance',
      description:
        'Implement advanced cloud security frameworks that protect your data and ensure compliance with industry standards, including GDPR, HIPAA, and other regulatory requirements. Safeguard your operations with comprehensive solutions designed for peace of mind.',
      mainImage: Cl2,
      secondaryImage: Inkimos,
    },
    {
      title: 'Cloud-Native Application Development',
      description:
        'Build flexible, cloud-native applications designed for rapid deployment and scalability. Leverage cloud services to enhance agility, drive continuous innovation, and ensure your business stays competitive in a rapidly evolving digital landscape.',
      mainImage: Cl3,
      secondaryImage: Inkimos,
    },
    {
      title: 'Multi-Cloud Strategy & Integration',
      description:
        'Optimize performance and resilience with a strategic multi-cloud approach that leverages the strengths of AWS, Azure, Google Cloud, and more. Achieve cost savings, minimize risks, and create a flexible, high-performance environment across all platforms.',
      mainImage: Cl4,
      secondaryImage: Inkimos,
    },
    {
      title: 'Disaster Recovery & Business Continuity',
      description:
        'Develop tailored disaster recovery solutions to ensure uninterrupted business operations in the face of unexpected disruptions. Implement reliable, cloud-based recovery strategies that minimize downtime and protect critical business functions.',
      mainImage: Cl5,
      secondaryImage: Inkimos,
    },
    {
      title: 'Cloud Migration',
      description:
        'Seamlessly migrate legacy infrastructure to the cloud with minimal downtime and disruption to your business. Ensure a smooth transition by leveraging proven strategies that mitigate risks and maximize the efficiency of your cloud adoption.',
      mainImage: Cl6,
      secondaryImage: Inkimos,
    },
  ];

  return (
    <>
      <section id="heading" className="bg-bgblue relative">
        <div className="bg-bgblue min-h-[500px] md:min-h-[550px] w-full flex items-center justify-center flex-col text-center relative">
          <img src={Cbg1} alt="Circle1 image" className="absolute right-0 w-[100px] h-[225px] md:w-[200px] md:h-[450px]" />
          <img src={Cbg} alt="Circle2 image" className="absolute left-[-0px] md:bottom-[-50px] w-[200px] bottom-0 md:w-[500px] h-auto" />
          <div className="absolute inset-0 bg-blue-950 opacity-20"></div>
          <div className="relative flex flex-col items-center justify-center px-4">
            <h1 className="text-[25.6px] md:text-[48px] font-medium text-white animate-slide-in max-w-[1000px]">
              Scalable, Secure, and Strategic Cloud Solutions for Modern Business
            </h1>
            <h2 className="text-[14.4px] sm:text-base font-light text-white max-w-md md:max-w-2xl lg:max-w-4xl mt-4 animate-slide-in">
              Empower your business with secure, flexible, and future-ready cloud environments. From seamless migration to multi-cloud management, we deliver customized cloud solutions that optimize performance and ensure business continuity.
            </h2>
          </div>
        </div>
      </section>

      {/* Cards section with slight overlap and rounded top corners */}
      <div className="relative z-[5] -mt-16 rounded-[50px] md:rounded overflow-hidden">
        <Cards cardData={cardData} />
      </div>
      <Partner />
    </>
  );
};

export default AiService;
