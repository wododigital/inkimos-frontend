import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './BlogCards.css';
import Blog1 from '../../assets/blog1.webp';
import Inkimos from '../../assets/IMG 5.png';

const BlogCards = () => {
  const blogData = [
    { id: 1, title: "Blog Post 1", description: "This is the description for the first blog post.", image: Blog1 },
    { id: 2, title: "Blog Post 2", description: "This is the description for the second blog post.", image: Blog1 },
    { id: 3, title: "Blog Post 3", description: "This is the description for the third blog post.", image: Blog1 },
    { id: 4, title: "Blog Post 4", description: "This is the description for the fourth blog post.", image: Blog1 },
    { id: 5, title: "Blog Post 5", description: "This is the description for the fifth blog post.", image: Blog1 },
  ];

  const [currentIndexMobile, setCurrentIndexMobile] = useState(0);
  const [currentIndexLarge, setCurrentIndexLarge] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextBlogsLarge = () => {
    if (currentIndexLarge + 3 < blogData.length) setCurrentIndexLarge(currentIndexLarge + 3);
  };
  const prevBlogsLarge = () => {
    if (currentIndexLarge - 3 >= 0) setCurrentIndexLarge(currentIndexLarge - 3);
  };

  const nextBlogsMobile = () => {
    if (currentIndexMobile + 1 < blogData.length) setCurrentIndexMobile(currentIndexMobile + 1);
  };
  const prevBlogsMobile = () => {
    if (currentIndexMobile > 0) setCurrentIndexMobile(currentIndexMobile - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextBlogsMobile,
    onSwipedRight: prevBlogsMobile,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  return (
    <>
      {/* Large screen blog section */}
      <section className="blogs-section h-auto hidden md:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.slice(currentIndexLarge, currentIndexLarge + 3).map((blog) => (
            <div key={blog.id} className="blog-card bg-white rounded-3xl border relative min-h-[380px]">
              <div className="relative">
                <img src={blog.image} alt={blog.title} className="w-full h-[200px] rounded-tl-3xl rounded-tr-3xl object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-green font-black">Blog Post</h3>
                <p className="text-black text-[19px] font-semibold">{blog.description}</p>
              </div>
              <div className="mt-4">
                <img src={Inkimos} alt="inkimos icon" className="w-12 h-2 absolute right-6 bottom-6" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-2 mt-8">
          <button onClick={prevBlogsLarge} className="text-white text-lg" disabled={currentIndexLarge === 0}>
            &#8592; Prev
          </button>
          <div className="flex space-x-2">
            {Array(Math.ceil(blogData.length / 3))
              .fill()
              .map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentIndexLarge(index * 3)}
                  className={`cursor-pointer w-3 h-3 rounded-full bg-green ${
                    currentIndexLarge === index * 3 ? 'bg-green' : 'bg-opacity-50'
                  }`}
                ></span>
              ))}
          </div>
          <button onClick={nextBlogsLarge} className="text-white text-lg" disabled={currentIndexLarge + 3 >= blogData.length}>
            Next &#8594;
          </button>
        </div>
      </section>

      {/* Mobile screen blog section */}
      <section className="blogs-section h-auto md:hidden overflow-x-hidden" {...handlers}>
        <div className="flex gap-4">
          {blogData.map((blog, index) => (
            <div
              key={blog.id}
              className={`blog-card bg-white rounded-3xl border relative min-h-[380px] transition-transform duration-300 ease-in-out ${
                index === currentIndexMobile ? 'transform-none' : ''
              }`}
              style={{
                minWidth: '80%', // Show 100% of the card + 20% of the next
                transform: `translateX(-${currentIndexMobile * 100}%)`, // Shift based on current index
              }}
            >
              <div className="relative">
                <img src={blog.image} alt={blog.title} className="w-full h-[200px] rounded-tl-3xl rounded-tr-3xl object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-green font-black">Blog Post</h3>
                <p className="text-black text-[16px] font-semibold">{blog.description}</p>
              </div>
              <div className="mt-4">
                <img src={Inkimos} alt="inkimos icon" className="w-12 h-2 absolute right-6 bottom-6" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          <button onClick={prevBlogsMobile} className="text-white text-lg" disabled={currentIndexMobile === 0}>
            &#8592; Prev
          </button>
          <div className="flex space-x-2">
            {blogData.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndexMobile(index)}
                className={`cursor-pointer w-3 h-3 rounded-full ${
                  currentIndexMobile === index ? 'bg-green' : 'bg-lightGrey'
                }`}
              ></span>
            ))}
          </div>
          <button onClick={nextBlogsMobile} className="text-white text-lg" disabled={currentIndexMobile + 1 >= blogData.length}>
            Next &#8594;
          </button>
        </div>
      </section>
    </>
  );
};

export default BlogCards;
