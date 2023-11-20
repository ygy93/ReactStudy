import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AllProduct from './pages/AllProducts';
import ProductDetail from './pages/ProductDetail';
import NewProduct from './pages/NewProduct';
import MyCart from './pages/MyCart';
import Home from './pages/Home';
import Login from './pages/Login';
import Sign from './pages/Sign';
import NotFound from './pages/NotFound';
import { CookiesProvider } from 'react-cookie';


const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    errorElement : <NotFound />,
    children : [ /* index : true 는 이 children 이 인덱스 페이지란 뜻 */
      { index : true, path : '/', element : <Home /> },
      { path : '/products', element : <AllProduct /> },
      { path : '/products/:pid', element : <ProductDetail /> },
      { path : '/products/new', element : <NewProduct /> },
      { path : '/carts', element : <MyCart /> },
      { path : '/login', element : <Login /> },
      { path : '/sign', element : <Sign /> },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>{/* 쿠키사용시 필요함 */}
      <RouterProvider router = {router} />
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
