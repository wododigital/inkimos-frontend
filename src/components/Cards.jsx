import React, { useEffect, useRef } from 'react';
import './cards.css';

const Cards = ({ cardData }) => {
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
    <section className="pt-[20px] md:pt-24 pb-12 sm:px-12 h-auto sm:max-h-[905px] bg-white">
      <div className='max-w-[1440px] mx-auto px-5 sm:px-12'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 animate-slide-in-top translate-y-[60%]">
          {cardData.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-darkBlue rounded-[30px] p-[20px] md:p-7 hover:scale-105 hover:bg-dblack card-initial"
            >
              <div className="min-h-[20px] md:min-h-[94px]">
                <h3 className="text-[19.2px] md:text-[26px] font-medium mb-4 text-white max-w-[70%] md:max-w-[340px]">{card.title}</h3>
              </div>
              <div className="min-h-[105px]">
                <p className="text-lightGrey mb-4 text-[14px] font-light text-justify">
                  {card.description}
                </p>
              </div>
              <div className="flex justify-between space-x-4 mt-4">
                <img
                  src={card.mainImage}
                  alt="Main Image"
                  className="w-[80px] h-auto rounded-lg"
                  style={{
                    filter: 'drop-shadow(0 5px 8px rgba(34, 218, 196,1))',
                  }}
                />
                <img
                  src={card.secondaryImage}
                  alt="Secondary Image"
                  className="w-6 h-1 rounded-lg mt-16"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
