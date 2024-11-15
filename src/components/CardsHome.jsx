import React, { useEffect, useRef } from 'react';
import './cards.css';

const CardsHome = ({ cardData = [] }) => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('card-in-view');
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.2,
    });

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="py-12  h-auto bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
        {cardData.map((card, index) => (
          <a 
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            href={card.link}  
            className="bg-black rounded-3xl p-4 md:p-8 border-2 border-green block"  
            target="_blank"   
            rel="noopener noreferrer" 
          >
            <div className="md:min-h-[94px]">
              <h3 className="text-[22.4px] md:text-[32px] font-medium mb-4 text-white max-w-[280px]">{card.title}</h3>
            </div>
            <div className="min-h-[62px] md:min-h-[60px]">
              <p className="text-lightGrey mb-4 text-[16px] font-light text-justify">
                {card.description}
              </p>
            </div>
            <div className="flex justify-between space-x-2 mt-2">
              <img
                src={card.mainImage}
                alt="Main Image"
                className="w-[80px] h-[80px] md:w-[140px] md:h-auto rounded-lg"
              />
              <img
                src={card.secondaryImage}
                alt="Secondary Image"
                className="w-8 h-2 rounded-lg mt-16 md:mt-36"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CardsHome;
