import { React, useEffect } from 'react';
import Bpo1 from '../../assets/Bpo (1).png';
import Bpo2 from '../../assets/Bpo (5).png';
import Bpo3 from '../../assets/Bpo (4).png';
import Bpo4 from '../../assets/Bpo (3).png';
import Bpo5 from '../../assets/Bpo (6).png';
import Bpo6 from '../../assets/Bpo (2).png';
import BpoBg from '../../assets/BPObg.png';
import BpoBg1 from '../../assets/BPObg1.png';
import Inkimos from '../../assets/IMG 5.png';
import Cards from '../../components/Cards';
import Partner from '../../components/Partner';
import './service.css';

const BpoService = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])
  const cardData = [
    {
      title: 'Process Optimization & Outsourcing',
      description:
        'We deliver tailored BPO services for key business functions such as finance, HR, and supply chain, while providing expert consulting to streamline processes, reduce costs, and enhance operational efficiency.',
      mainImage: Bpo1,
      secondaryImage: Inkimos,
    },
    {
      title: 'Digital Transformation in Outsourcing',
      description:
        'Integrating AI, automation, and cutting-edge digital tools into outsourced operations to drive continuous improvement, ensure scalability, and foster innovation across all processes.',
      mainImage: Bpo2,
      secondaryImage: Inkimos,
    },
    {
      title: 'Cost Optimization & Strategic Advisory',
      description:
        'Implementing cost-saving solutions through process automation and outsourcing, while offering strategic long-term planning to ensure sustainable growth and enhanced business efficiency.',
      mainImage: Bpo3,
      secondaryImage: Inkimos,
    },
    {
      title: 'Data-Driven Insights & Process Consulting',
      description:
        'Leveraging data from outsourced operations to generate actionable insights that help businesses make informed decisions and optimize processes for better overall performance.',
      mainImage: Bpo4,
      secondaryImage: Inkimos,
    },
    {
      title: 'Risk Management & Compliance Outsourcing',
      description:
        'Providing expert consulting and outsourcing solutions to meet regulatory standards, ensure compliance, and efficiently manage business risks across all areas of operation.',
      mainImage: Bpo5,
      secondaryImage: Inkimos,
    },
    {
      title: 'Global Delivery & Strategic Partnerships',
      description:
        'Ensuring seamless global delivery of BPO services while advising on strategic partnerships and collaborations that enhance business capabilities and expand operational reach.',
      mainImage: Bpo6,
      secondaryImage: Inkimos,
    },
  ];

  return (
    <>
      <section id="heading" className="bg-black relative">
        <div className="bg-black min-h-[550px] w-full flex items-center justify-center flex-col text-center relative">
          <img
            src={BpoBg}
            alt="Background image on the right"
            className="absolute right-0 w-[100px] h-[225px] md:w-[200px] md:h-[450px]"
          />
          <img
            src={BpoBg1}
            alt="Background image on the left"
            className="absolute left-[0px] bottom-[10px] w-[200px] h-[200px] md:left-[0px] md:bottom-[0px] md:w-[400px] md:h-[400px]"
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative mt-28 flex flex-col items-center justify-center mb-10 md:mb-20 px-4">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-medium text-white animate-slide-in max-w-[800px]">
              Maximize Performance with Expert Consulting and Outsourcing Services    
            </h1>
            <h2 className="text-sm sm:text-base font-light text-white max-w-sm sm:max-w-lg md:max-w-3xl lg:max-w-4xl mt-4 animate-slide-in">
              Achieve greater efficiency and growth with a combination of expert consulting and tailored BPO services. We help streamline your operations, reduce costs, and optimize processes for long-term success. Our strategic solutions are designed to empower your business at every level.
            </h2>
          </div>
        </div>
      </section>


      {/* Cards section with slight overlap and rounded top corners */}
      <div className="relative z-[5] -mt-16 rounded-t-[72px] overflow-hidden">
        <Cards cardData={cardData} />
      </div>
      <div>

        <Partner />
      </div>
    </>
  );
};

export default BpoService;
