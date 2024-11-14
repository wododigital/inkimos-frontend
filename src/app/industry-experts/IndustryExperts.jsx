import React, { useEffect } from 'react'
import realestate from '../../assets/Real-Estate-Inkimos-Industry-Focus-2.jpg';
import automotive from '../../assets/Inkimos-Automotive-Industry-Focus-1024x585.jpg';
import manufacturing from '../../assets/Inkimos-Manufacturing-Image-1024x585.jpg';
import finance from '../../assets/Inkimos-Finance-Industry-Focus--1024x585.jpg';
import logistics from '../../assets/Inkimos-Logistics-Industry-Focues-1024x585.jpg';
import insurance from '../../assets/a59602e9-aa15-455c-85c5-cdcad9484aff-1024x770.webp';
import logo from '../../assets/IMG 5.png';
import PartnerService from '../../components/PartnerService';
const IndustryExperts = React.memo(() => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[])
    const industries = [
        {
          title: "Real Estate",
          description: "The real estate industry is evolving rapidly with the integration of technology into property management, sales, and customer service. Inkimos enables real estate firms to leverage AI-powered data insights for better decision-making, improve customer engagement platforms, and optimize the management of properties through smart building technologies. We empower real estate businesses to stay competitive by adopting digital tools that streamline operations and enhance the customer journey. Whether it’s in property development, real estate investment, or property management, we have the expertise to drive results.",
          image: realestate
        },
        {
          title: "Manufacturing",
          description: "In today’s Industry 4.0 world, manufacturers must embrace digital transformation to remain competitive. From predictive maintenance to smart factory solutions, Inkimos empowers manufacturing companies to leverage the latest technologies to optimize operations, reduce downtime, and improve efficiency. Our work includes implementing IoT-based systems, integrating AI for quality control, and automating key processes that drive production. Whether you’re looking to enhance your operations or lead the way in manufacturing innovation, we have the expertise to help you achieve it.",
          image: manufacturing
        },
        {
          title: "Automotive",
          description: "The automotive industry is undergoing a digital transformation like never before. With the rise of electric vehicles, autonomous driving, and connected car technologies, automotive businesses must adapt quickly to stay competitive. At Inkimos, we support automotive companies by optimizing their manufacturing processes, enhancing supply chain visibility, and integrating AI-driven solutions that improve production efficiency and customer experience. Our expertise enables automakers to accelerate innovation and meet the demands of the modern consumer.",
          image: automotive
        },
        {
          title: "Logistics",
          description: "The automotive industry is undergoing a digital transformation like never before. With the rise of electric vehicles, autonomous driving, and connected car technologies, automotive businesses must adapt quickly to stay competitive. At Inkimos, we support automotive companies by optimizing their manufacturing processes, enhancing supply chain visibility, and integrating AI-driven solutions that improve production efficiency and customer experience. Our expertise enables automakers to accelerate innovation and meet the demands of the modern consumer.",
          image: logistics
        },
        {
          title: "Finance",
          description: "The financial services industry is facing disruption on multiple fronts—from fintech innovations to evolving regulatory landscapes. Inkimos works closely with financial institutions to deliver secure, scalable solutions that automate compliance, optimize customer experiences, and improve risk management. Our expertise in AI, blockchain, and data analytics helps financial firms reduce operational costs while enhancing decision-making capabilities. We empower financial businesses to innovate while staying compliant and secure in a rapidly changing environment.",
          image: finance
        },
        {
          title: "Insurance",
          description: "In the insurance sector, digital transformation is reshaping how companies interact with customers and manage risk. Inkimos helps insurers harness the power of AI, predictive analytics, and automation to improve claims processing, reduce fraud, and personalize customer interactions. Our solutions also support regulatory compliance, helping insurers stay ahead of changing regulations while delivering better customer experiences. Whether it’s modernizing back-office operations or enhancing customer service, our expertise helps insurers stay ahead of industry changes.",
          image: insurance
        }
        
    ];
  return (
    <>
      <div className="relative w-full min-h-[400px] md:min-h-[500px] bg-dblack flex lg:items-end justify-center">
        <div className="absolute inset-0 bg-[url('./assets/Inkimos-BG-Who-we-are-2.jpg')] bg-cover bg-bottom opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"> 
            <div className='max-w-[1440px] mx-auto px-5 sm:px-12 pt-10'>
            <h1 className="text-[26px] sm:text-[32px] md:text-[40px] text-white mb-2 font-semibold">
            Transforming ERP Industry Digital Landscapes
            </h1>
            <h2 className="text-[16px] sm:text-[18px] lg:text-base text-white lg:w-[60%] mx-auto">
                At Inkimos, we go beyond a technology partner; we understand the unique challenges of different industries. From optimizing supply chains to enhancing financial services with AI, we provide tailored solutions to equip you with insights to excel in today's digital landscape.
            </h2>
            </div>
        </div>  
      </div>

      <section  className="max-w-[1440px] mx-auto px-5 lm:px-12">
        <div className="grid grid-cols-1 gap-8 py-10">
            {industries.map((industry, index) => (
                <div className="" key={index}>
                    <div className={`flex gap-8 items-center bg-white rounded-3xl overflow-hidden border-2 border-green ${
                        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}>
                        <div className="flex-1 min-w-[50%]">
                            <img 
                                src={industry.image}
                                alt={industry.title}
                                className="w-full h-[50vh] object-cover"
                            />
                        </div>
                        <div className="flex-1 relative px-10">
                            <div className="w-10 py-5"><img src={logo} alt='logo'/></div>
                            <h1 className="text-4xl font-bold text-[#1a1a1a] mb-6">{industry.title}</h1>
                            <p className="text-[#4a4a4a] leading-relaxed mb-8">
                                {industry.description}
                            </p>
                            <button className="bg-secondary text-white bg-green px-6 py-3 rounded-full text-base hover:bg-secondary-dark transition-colors duration-300">
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      <PartnerService/>
    </>
  )
});



export default IndustryExperts