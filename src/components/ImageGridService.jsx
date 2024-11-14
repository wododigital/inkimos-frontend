import JPM from '../assets/JPM.png';
import SIEM from '../assets/SIEM.png';
import DHL from '../assets/DHL.png';
import MAYO from '../assets/MAYO.png';
import WALL from '../assets/WAL.png';
import { useState, useEffect } from 'react';
import "./grid.css";

const ImageGridService = () => {
  const [itemsCount, setItemsCount] = useState(3); 

  useEffect(() => {
    const updateItemsCount = () => {
      if (window.innerWidth < 768) {
        setItemsCount(1); 
      } else {
        setItemsCount(3); 
      }
    };
    updateItemsCount();
    window.addEventListener('resize', updateItemsCount);

    return () => window.removeEventListener('resize', updateItemsCount);
  }, []);

  return (
    <>
      <div className="relative overflow-hidden">
        {/* Scrolling container */}
        <div className="flex w-[200%] gap-16 animate-loop">
          {/* Duplicated set of images for smooth loop */}
          {[...Array(itemsCount)].map((_, idx) => (
            <div key={idx} className="flex gap-16">
              <div className="relative group">
              <img
                src={WALL}
                alt="Image 1"
                className="w-[20vw] sm:w-[1000vw] h-auto filter pt-1 invert brightness-0 contrast-100 transition duration-500 ease-in-out "
              />

              </div>
              <div className="relative group">
                <img
                  src={JPM}
                  alt="Image 2"
                  className="w-[20vw] sm:w-[1000vw] h-auto filter invert pt-4 brightness-0 contrast-100 transition duration-500 ease-in-out "
                  />
              </div>
              <div className="relative group">
                <img
                  src={SIEM}
                  alt="Image 3"
                  className="w-[20vw] sm:w-[1000vw] h-auto filter invert pt-2 brightness-0 contrast-100 transition duration-500 ease-in-out "
                  />
              </div>
              <div className="relative group">
                <img
                  src={MAYO}
                  alt="Image 4"
                  className="w-[20vw] sm:w-[1000vw] h-auto filter invert pt-1 brightness-0 contrast-100 transition duration-500 ease-in-out "
                  />
              </div>
              <div className="relative group">
                <img
                  src={DHL}
                  alt="Image 5"
                  className="w-[20vw] sm:w-[1000vw] h-auto filter invert brightness-0 pt-2 contrast-100 transition duration-500 ease-in-out "
                  />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGridService;
