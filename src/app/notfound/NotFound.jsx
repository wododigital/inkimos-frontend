import { useState, useEffect } from 'react';
import { Ghost, HomeIcon, ArrowLeft } from 'lucide-react';
import './notfound.css';
function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGoBack = () => window.history.back();
  const handleGoHome = () => window.location.href = '/';

  return (
    <div className="min-h-[60vh] md:min-h-screen bg-black flex items-center justify-center p-4 relative">
      <div 
        className={`max-w-2xl w-full transition-all duration-700 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center space-y-8 relative z-10">

          {/* Error Message */}
          <div className="space-y-2 relative">
            {/* Glowing Background */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none -z-10">
              <div className="w-[300px] h-[300px] bg-green/20 rounded-full blur-3xl animate-pulse" />
            </div>
            <h1 className="text-7xl md:text-9xl font-bold text-green tracking-wider relative z-20">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-white/90 z-20">
              Page Not Found
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={handleGoHome}
              className="group flex items-center gap-2 border border-green text-green px-6 py-3 rounded-lg transition-all hover:bg-green/10"
            >
              <HomeIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              Home Page
            </button>
          </div>

          {/* Background Glowing Effect (for additional effects behind content) */}
          {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10 rounde">
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-green/10 rounded-full blur-3xl animate-pulse" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default NotFound;
