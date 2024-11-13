import React, { useEffect, useRef } from 'react';
import Ai1 from '../assets/Ai (1).png';
import Inkimos from '../assets/IMG 5.png';
import './cards.css';

const cardData = [
  {
    title: 'Predictive Analytics & Insights',
    description:
      'Leverage the power of AI to analyze historical data and predict future trends and outcomes. Enable data-driven decision-making that optimizes operations, identifies new opportunities, and enhances your business strategy.',
    mainImage: Ai1,
    secondaryImage: Inkimos,
  },
  {
    title: 'Customer Segmentation',
    description:
      'Utilize machine learning to divide your customer base into distinct segments, improving marketing strategies and increasing customer satisfaction.',
    mainImage: Ai1,
    secondaryImage: Inkimos,
  },
  {
    title: 'Sales Forecasting',
    description:
      'Predict sales trends to manage inventory, optimize pricing, and make informed staffing decisions, leading to higher profitability.',
    mainImage: Ai1,
    secondaryImage: Inkimos,
  },
  // Add additional cards here
];

const Cards = () => {
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
    <section className="py-12 px-5 sm:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-darkBlue rounded-2xl p-10 hover:scale-105 hover:bg-dblack card-initial"
          >
            <h3 className="text-[26px] font-medium mb-4 text-white">{card.title}</h3>
            <p className="text-lightGrey mb-6 text-[14px] font-light text-justify">
              {card.description}
            </p>
            <div className="flex justify-between space-x-4">
              <img
                src={card.mainImage}
                alt="Main Image"
                className="w-[80px] h-auto rounded-lg"
                style={{
                  filter: 'drop-shadow(0 5px 8px rgba(34, 218, 196,1))',
                }}
              />
              <img src={card.secondaryImage} alt="Secondary Image" className="w-6 h-1 rounded-lg mt-12" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
