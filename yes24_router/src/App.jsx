import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Root from './pages/Root';
import BestSeller from './pages/BestSeller';
import RealTimeBestSeller from './pages/RealTimeBestSeller';
import DayBestSeller from './pages/DayBestSeller';
import MonthWeekBestSeller from './pages/MonthWeekBestSeller';
import HotPriceBestSeller from './pages/HotPriceBestSeller';
import SteadyBestSeller from './pages/SteadyBestSeller';

// 2. createBrowserRouter 생성
const router = createBrowserRouter([
  {
    path : '/',
    element : <Root />,
    children : [ /* path 주소명과 컴포넌트에 있는 주소명은 서로 다르게 주는걸 권장 */
      { index : '/', element : <BestSeller /> },
      { path : '/realtime', element : <RealTimeBestSeller /> }, 
      { path : '/day', element : <DayBestSeller /> },
      { path : '/monthweek', element : <MonthWeekBestSeller /> },
      { path : '/hotprice', element : <HotPriceBestSeller /> },
      { path : '/steady', element : <SteadyBestSeller /> },
    ]
  }
]);

function App() {
  return (
    // 1. routerProvider
    <RouterProvider router = { router } />
  );
}

export default App;
