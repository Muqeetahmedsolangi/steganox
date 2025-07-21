import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import FuturisticHeader from '../components/FuturisticHeader';
import FuturisticFooter from '../components/FuturisticFooter';
import ScrollToTop from '../components/ui/ScrollToTop';
import Header from '../components/Header/Header';

const WebsiteLayout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black">
      <Header/>
      <main className="relative bg-black overflow-x-hidden">
        <Suspense fallback={
          <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-primary-500/30 rounded-full animate-spin border-t-primary-500 mx-auto mb-4"></div>
                <div className="absolute inset-0 w-16 h-16 border-2 border-accent-500/20 rounded-full animate-pulse mx-auto"></div>
              </div>
              <p className="text-white text-lg">Loading page...</p>
              <p className="text-gray-400 text-sm mt-2">Please wait</p>
            </div>
          </div>
        }>
          <div className="page-transition bg-black">
            <Outlet />
          </div>
        </Suspense>
      </main>
      <FuturisticFooter />
      <ScrollToTop />
    </div>
  );
};

export default WebsiteLayout;
