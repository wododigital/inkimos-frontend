import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './BlogCards.css';
import Inkimos from '../../assets/IMG 5.png';
import config from '../../config';

const BlogCards = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentIndexMobile, setCurrentIndexMobile] = useState(0);
  const [currentIndexLarge, setCurrentIndexLarge] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const fetchBlogs = async () => {
    try {
      const apiEndpoint =
      config.baseUrl === 'http://localhost:3004'
          ? '/api' 
          : 'https://inkimos.com/insights/wp-json/wp/v2/posts?_embed'; 
  
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };
  

  useEffect(() => {
    fetchBlogs();
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextBlogsLarge = () => {
    if (currentIndexLarge + 3 < blogs.length) setCurrentIndexLarge(currentIndexLarge + 3);
  };
  const prevBlogsLarge = () => {
    if (currentIndexLarge - 3 >= 0) setCurrentIndexLarge(currentIndexLarge - 3);
  };

  const nextBlogsMobile = () => {
    if (currentIndexMobile + 1 < blogs.length) setCurrentIndexMobile(currentIndexMobile + 1);
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

  function convertToSlug(str) {
    return str
      .toLowerCase()               // Convert to lowercase
      .replace(/%20/g, ' ')         // Replace encoded spaces (%20) with a space
      .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters (except spaces and hyphens)
      .trim()                       // Remove any leading or trailing spaces
      .replace(/\s+/g, '-')         // Replace spaces with hyphens
      .replace(/-+/g, '-');         // Replace multiple hyphens with a single hyphen
  }

  return (
    <>
      {/* Large screen blog section */}
      <section className="blogs-section h-auto hidden md:block">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {blogs.slice(currentIndexLarge, currentIndexLarge + 3).map((blog) => (
      <a 
        key={blog.id} 
        href={`insights/${convertToSlug(blog.title.rendered)}`} // Decode the URL-encoded title
        className="blog-card bg-white rounded-3xl border relative min-h-[380px]"
      >
        <div className="relative">
          <img src={blog.featured_media_src_url} alt={blog.title.rendered} className="w-full h-[200px] rounded-tl-3xl rounded-tr-3xl object-cover" />
        </div>
        <div className="p-5">
          <h3 className="text-green font-black">
            {blog.class_list?.find((cls) => cls.startsWith('category-'))?.replace('category-', '') || 'Uncategorized'}
          </h3>
          <p className="text-black text-[19px] font-semibold">{blog.title.rendered}</p>
        </div>
        <div className="mt-4">
          <img src={Inkimos} alt="inkimos icon" className="w-12 h-2 absolute right-6 bottom-6" />
        </div>
      </a>
    ))}
  </div>
  <div className="flex justify-center space-x-2 mt-8">
    <button onClick={prevBlogsLarge} className="text-white text-lg" disabled={currentIndexLarge === 0}>
      &#8592; Prev
    </button>
    <div className="flex space-x-2">
      {Array(Math.ceil(blogs.length / 1))
        .fill()
        .map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndexLarge(index * 1)}
            className={`cursor-pointer w-3 h-3 rounded-full bg-green ${currentIndexLarge === index * 1 ? 'bg-green' : 'bg-lightGrey'}`}
          ></span>
        ))}
    </div>
    <button onClick={nextBlogsLarge} className="text-white text-lg" disabled={currentIndexLarge + 3 >= blogs.length}>
      Next &#8594;
    </button>
  </div>
</section>




      {/* Mobile screen blog section */}
      <section className="blogs-section h-auto md:hidden overflow-x-hidden" {...handlers}>
        <div className="flex gap-4">
          {blogs.map((blog, index) => (
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
                <img src={blog.featured_media_src_url} alt={blog.title.rendered} className="w-full h-[200px] rounded-tl-3xl rounded-tr-3xl object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-green font-black">
                {blog.class_list?.find((cls) => cls.startsWith('category-'))?.replace('category-', '') || 'Uncategorized'}

                </h3>
                <p className="text-black text-[16px] font-semibold">{blog.title.rendered}</p>
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
            {blogs.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndexMobile(index)}
                className={`cursor-pointer w-3 h-3 rounded-full ${currentIndexMobile === index ? 'bg-green' : 'bg-lightGrey'}`}
              ></span>
            ))}
          </div>
          <button onClick={nextBlogsMobile} className="text-white text-lg" disabled={currentIndexMobile + 1 >= blogs.length}>
            Next &#8594;
          </button>
        </div>
      </section>
    </>
  );
};

export default BlogCards;
