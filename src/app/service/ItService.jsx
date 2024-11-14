import {React,useEffect} from 'react';
import It1 from '../../assets/It (6).png';
import It2 from '../../assets/It (5).png';
import It3 from '../../assets/It (4).png';
import It4 from '../../assets/It (3).png';
import It5 from '../../assets/It (2).png';
import It6 from '../../assets/It.png';
import Itbg from '../../assets/It (1).png';
import Inkimos from '../../assets/IMG 5.png';
import Cards from '../../components/Cards';
import Partner from '../../components/Partner';
import './service.css';


const ItService = () => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[])
  const cardData = [
    {
      title: '24/7 IT Support & Monitoring',
      description:
        'Providing round-the-clock IT support and monitoring services to ensure smooth, uninterrupted business operations. Our team is always ready to handle technical issues and prevent downtime.',
      mainImage: It1,
      secondaryImage: Inkimos,
    },
    {
      title: 'Network & Infrastructure Management',
      description:
        'Managing IT infrastructure and networks to maximize uptime, performance, and security. We ensure your systems run efficiently, enabling your business to stay productive and resilient.',
      mainImage: It2,
      secondaryImage: Inkimos,
    },
    {
      title: 'Cybersecurity Services',
      description:
        'Offering comprehensive cybersecurity solutions to protect your systems from cyber threats. Our team implements robust strategies to safeguard your data, ensuring compliance and protecting business integrity.​',
      mainImage: It3,
      secondaryImage: Inkimos,
    },
    {
      title: 'Backup & Disaster Recovery Solutions',
      description:
        'Implementing tailored backup solutions and recovery strategies to safeguard critical business data. Our services ensure rapid recovery in the event of a disruption, minimizing downtime, and protecting business continuity.',
      mainImage: It4,
      secondaryImage: Inkimos,
    },
    {
      title: 'IT Helpdesk Services',
      description:
        `Delivering fast-response IT support to resolve end-user issues efficiently. Whether it's troubleshooting or system guidance, we provide expert help to keep your team productive and your systems functioning.`,
      mainImage: It5,
      secondaryImage: Inkimos,
    },
    {
      title: 'Infrastructure as a Service (IaaS)',
      description:
        'Providing scalable, on-demand IT infrastructure solutions that grow with your business. Our IaaS services allow you to focus on growth while we handle the complexity of infrastructure management.',
      mainImage: It6,
      secondaryImage: Inkimos,
    },
  ];

  return (
    <>
     <section id="heading" className="bg-black relative">
  <div className="bg-black min-h-[450px] w-full flex items-center justify-center flex-col text-center relative">
    <img src={Itbg} alt="Circle1 image" className="absolute right-0 top-40 md:top-20 w-[100px] h-[150px] md:w-[190px] md:h-[200px]" />
    <div className="absolute inset-0 bg-blue-950 opacity-20"></div>
    <div className="relative flex flex-col items-center justify-center mb-10 md:mb-20 px-4">
      <h1 className="text-[24px] md:text-[36px] lg:text-[48px] font-medium text-white animate-slide-in max-w-[1000px]">
      Seamless Operations with End-to-End IT Solutions   </h1>
      <h2 className="text-sm md:text-base lg:text-lg font-light text-white max-w-md md:max-w-2xl lg:max-w-4xl mt-4 animate-slide-in">
      From 24/7 support to network management and cybersecurity, we provide end-to-end managed services that keep your operations secure, efficient, and always running smoothly.         </h2>
    </div>
  </div>
</section>

      
      {/* Cards section with slight overlap and rounded top corners */}
      <div className="relative z-10 -mt-16 rounded-t-[72px] overflow-hidden">
        <Cards cardData={cardData} />
      </div>
      <Partner/>
    </>
  );
};

export default ItService;
