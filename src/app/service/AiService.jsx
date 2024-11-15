import Circle1 from '../../assets/Group 28.png';
import Circle2 from '../../assets/custom.png';
import Ai1 from '../../assets/Ai(6).png';
import Ai2 from '../../assets/Ai (2).png';
import Ai3 from '../../assets/Ai (4).png';
import Ai4 from '../../assets/Ai (3).png';
import Ai5 from '../../assets/Ai (1).png';
import Ai6 from '../../assets/Ai (5).png';
import Inkimos from '../../assets/IMG 5.png';
import Cards from '../../components/Cards';
import Partner from '../../components/Partner';
import './service.css';
import { useEffect } from 'react';


const AiService = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])
  const cardData = [
    {
      title: 'Predictive Analytics & Insights',
      description:
        'Leverage the power of AI to analyze historical data and predict future trends and outcomes. Enable data-driven decision-making that optimizes operations, identifies new opportunities, and enhances your business strategy.',
      mainImage: Ai1,
      secondaryImage: Inkimos,
    },
    {
      title: 'Machine Learning Model Development',
      description:
        'Build and deploy custom machine learning models designed to automate repetitive tasks, extract valuable insights, and improve business processes. Our models are scalable and adaptable, delivering actionable results that transform your operations.',
      mainImage: Ai2,
      secondaryImage: Inkimos,
    },
    {
      title: 'Natural Language Processing (NLP)',
      description:
        'Utilize AI-driven computer vision technologies for visual inspection, security surveillance, and quality control. From manufacturing to oil & gas, our image recognition solutions increase accuracy, reduce costs, and enhance safety.',
      mainImage: Ai3,
      secondaryImage: Inkimos,
    },
    {
      title: 'Computer Vision & Image Recognition',
      description:
        'Utilize AI-driven computer vision technologies for visual inspection, security surveillance, and quality control. From manufacturing to oil & gas, our image recognition solutions increase accuracy, reduce costs, and enhance safety.',
      mainImage: Ai4,
      secondaryImage: Inkimos,
    },
    {
      title: 'Robotic Process Automation (RPA)',
      description:
        'Automate time-consuming manual tasks with Robotic Process Automation (RPA). Our RPA solutions streamline workflows, reduce human error, and increase efficiency, allowing your teams to focus on higher-value tasks.',
      mainImage: Ai5,
      secondaryImage: Inkimos,
    },
    {
      title: 'AI-Powered Business Insights',
      description:
        'Turn unstructured data—like customer feedback, social media, and market trends—into actionable business insights with AI tools. Our solutions help you gain a deeper understanding of your business, uncover hidden patterns, and drive innovation.',
      mainImage: Ai6,
      secondaryImage: Inkimos,
    },
  ];

  return (
    <>
      <section id="heading" className="bg-bgblue relative">
        <div className="bg-bgblue min-h-[500px] md:min-h-[550px] w-full flex items-center justify-center flex-col text-center relative">
          <img src={Circle1} alt="Circle1 image" className="absolute right-0 w-[100px] h-[225px] md:w-[200px] md:h-[450px]" />
          <img src={Circle2} alt="Circle2 image" className="absolute left-[-50px] bottom-0 w-[200px] h-[150px] md:left-[-100px] md:w-[400px] md:h-[300px]" />
          <div className="absolute inset-0 bg-blue-950 opacity-20"></div>
          <div className="relative mt-28 flex flex-col items-center justify-center mb-20 md:mb-20 px-4">
            <h1 className="text-[25.6px] md:text-[48px] font-medium text-white animate-slide-in">
              Harness the Power of AI to Drive Innovation
            </h1>
            <h2 className="text-[14.4px] md:text-base font-light text-white max-w-md md:max-w-2xl lg:max-w-4xl mt-4 animate-slide-in">
              Unlock the potential of data with cutting-edge AI and machine learning solutions that enhance
              decision-making, automate processes, and create new opportunities for growth. From predictive
              analytics to AI-powered business insights, we deliver intelligent solutions tailored to your
              needs.
            </h2>
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

export default AiService;
