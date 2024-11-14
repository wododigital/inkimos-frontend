import React, { useState, useEffect } from 'react';

const Counterhome = ({ targetNumber,color = 'text-arrowBlue' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set the duration (in milliseconds) for the counter animation
    const duration = 2000; // 2 seconds to reach target
    const incrementTime = 10; // Update every 10 milliseconds
    const incrementStep = targetNumber / (duration / incrementTime); // Calculate the increment step

    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount + incrementStep >= targetNumber) {
          clearInterval(interval); // Stop the counter when the target is reached
          return targetNumber; // Ensure the final value is exactly the target
        }
        return prevCount + incrementStep;
      });
    }, incrementTime);

    return () => clearInterval(interval); 

  }, [targetNumber]);

  // Format the count with commas as a thousands separator
  const formattedCount = Math.floor(count).toLocaleString();

  return (
    <div>
<h2 className={`${color} text-[40px] sm:text-[48px]`}>{formattedCount}</h2>     </div>
  );
};

export default Counterhome;
