// export default App;
import Router from './router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { handleError } from './utils/functions';
import axiosInstance from './configs/axios.config';
import { setUser } from './store/slice/auth';

function App() {
  return <Router />;
}
export default App;
