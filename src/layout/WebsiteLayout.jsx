import FuturisticHeader from '../components/FuturisticHeader';
import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import FuturisticFooter from '../components/FuturisticFooter';
import Loading from '../components/Loading';
import CustomCursor from '../components/CustomCursor';

function WebsiteLayout() {
  const location = useLocation();
  
  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return (
    <div className="font-inter bg-black text-white min-h-screen relative overflow-x-hidden">
      <FuturisticHeader />
      <CustomCursor />
      <div className="relative z-10">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
        <FuturisticFooter />
      </div>
    </div>
  );
}

export default WebsiteLayout;
