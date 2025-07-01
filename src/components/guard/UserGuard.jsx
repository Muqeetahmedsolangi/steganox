/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserGaurd = ({ children }) => {
  const { user, userType } = useSelector((state) => state.auth);

  const isAuthenticated = Boolean(user && userType === 1);

  return isAuthenticated ? children : <Navigate to={'/login'} />;
};

export default UserGaurd;
