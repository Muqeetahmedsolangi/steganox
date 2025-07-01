import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import websiteRoutes from './website';
const WebsiteLayout = lazy(() => import('../layout/WebsiteLayout'));

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          {websiteRoutes.map(({ Element, index, key, path }) => (
            <Route path={path} index={index} element={<Element />} key={key} />
          ))}
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default Router;
