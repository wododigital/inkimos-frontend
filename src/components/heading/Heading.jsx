import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

const SectionHeading = ({ mainTitle, mainClass }) => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null); // Reference to observe the component

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when in view
          observer.unobserve(entry.target); // Stop observing after animation triggers
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div className="max-w-[1440px] mx-auto pt-[40px] md:pt-[98px]  md:pb-[0px] relative">
        {mainTitle && (
          <div className="relative inline-block">
            <h2
              ref={headingRef}
              className={`font-noto text-[25.6px] md:text-[40px] font-normal md:font-medium text-black ${mainClass} 
              transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              {mainTitle}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

SectionHeading.propTypes = {
  mainTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
};

export default SectionHeading;
