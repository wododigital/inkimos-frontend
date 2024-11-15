import { React, useEffect } from 'react';
import Di1 from '../../assets/Dig (1).png';
import Di2 from '../../assets/Dig (6).png';
import Di3 from '../../assets/Dig (5).png';
import Di4 from '../../assets/Dig (2).png';
import Di5 from '../../assets/Dig (3).png';
import Di6 from '../../assets/Dig (4).png';
import Digbg from '../../assets/Digbg (1).png';
import Digbg1 from '../../assets/Digbg (2).png';
import Inkimos from '../../assets/IMG 5.png';
import Cards from '../../components/Cards';
import Partner from '../../components/Partner';
import './service.css';


const DigitalService = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])
  const cardData = [
    {
      title: 'Product Engineering & Development',
      description:
        'Developing digital products from ideation to launch with a focus on user experience and performance. We create scalable, high-performing solutions that align with your business goals, driving growth and innovation.',
      mainImage: Di1,
      secondaryImage: Inkimos,
    },
    {
      title: 'UX/UI Design',
      description:
        `Designing intuitive, user-friendly interfaces that enhance customer engagement and accelerate business growth. Our UX/UI solutions ensure seamless and enjoyable digital experiences tailored to your audience's needs.`,
      mainImage: Di2,
      secondaryImage: Inkimos,
    },
    {
      title: 'Digital Experience Platforms (DXP)',
      description:
        'Building integrated platforms that deliver personalized, seamless digital experiences. We create unified systems that enable businesses to engage users across multiple channels with a consistent and impactful digital presence.',
      mainImage: Di3,
      secondaryImage: Inkimos,
    },
    {
      title: 'Digital Branding & Strategy',
      description:
        'Creating cohesive, future-forward digital brand strategies that resonate across all customer touchpoints. From identity design to communication strategies, we ensure your brand remains memorable and impactful in a competitive market.',
      mainImage: Di4,
      secondaryImage: Inkimos,
    },
    {
      title: 'Agile Development & Product Delivery',
      description:
        'Utilizing agile methodologies to deliver digital products rapidly and efficiently. Our approach ensures iterative progress, quick adaptation to change, and on-time delivery that meets your evolving business needs.',
      mainImage: Di5,
      secondaryImage: Inkimos,
    },
    {
      title: 'Digital Marketing & Automation',
      description:
        'Leveraging AI-driven digital marketing strategies, including SEO, content marketing, and marketing automation. We help you grow your brand presence, optimize customer acquisition, and drive conversions with data-backed solutions.',
      mainImage: Di6,
      secondaryImage: Inkimos,
    },
  ];

  return (
    <>
      <section id="heading" className="bg-bgblue relative">
        <div className="bg-bgblue min-h-[500px] md:min-h-[550px] w-full flex items-center justify-center flex-col text-center relative">
          <img src={Digbg} alt="Circle1 image" className="absolute right-0  w-[100px] h-[100px] md:w-[200px] md:h-[300px] hidden md:block" />
          <img src={Digbg} alt="Circle1 image" className="absolute right-0 top-24 w-[100px] h-[100px] md:w-[200px] md:h-[300px] md:hidden" />

          <img src={Digbg1} alt="Circle2 image" className="absolute left-[-0px] md:bottom-[20px] w-[100px] bottom-0 md:w-[200px] h-auto" />
          <div className="absolute inset-0 opacity-10"></div>
          <div className="relative mt-28 flex flex-col items-center justify-center mb-10 md:mb-20 px-4">
            <h1 className="text-[25.6px] md:text-[48px] font-medium text-white animate-slide-in max-w-[1000px]">
              Driving Business Evolution Through Digital Innovation      </h1>
            <h2 className="text-[14.4px] sm:text-base font-light text-white max-w-md md:max-w-2xl lg:max-w-4xl mt-4 animate-slide-in">
              Accelerate your digital journey with innovative product engineering, customer-centric experiences, and future-ready strategies. We help you evolve and stay ahead in a rapidly changing world.      </h2>
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

export default DigitalService;
