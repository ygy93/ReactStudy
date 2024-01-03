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
import MyOrder from './pages/MyOrder';
import Home from './pages/Home';
import Login from './pages/Login';
import Sign from './pages/Sign';
import NotFound from './pages/NotFound';
import { CookiesProvider } from 'react-cookie';
import MyCount from './pages/MyCount';
import MyInfo from './pages/MyInfo';
import MyCountRedux from './pages/MyCountRedux';

// import { createStore } from 'redux'; // 취소선, deprecated
import { legacy_createStore as createStore } from 'redux'; // 여기서 활성화 시켰기에 위에 선언한건 주석처리 혹은 삭제해야함
import { Provider } from 'react-redux';
import rootReducer from './modules_redux/rootReducer';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { thunk } from 'redux-thunk'; // 비동기처리 지원 라이브러리
import reduxCount from './modules_redux/reduxCount';
// 리덕스에서 store 를 써야하는데 store 가 있는것이 createStore 뿐이라 선언해야함,
// 고로 위에 디프리케이티드는 무늬만 deprecated 이고 사용하는 것
// deprecated 된 이유는 사용하기 위해 이해하기가 어려워 사용량이 적음,
// 사용자가 직접 공부해서 이것을 활성화시키게 만들도록 바이럴 마케팅 느낌

/* store 생성 */
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  // applyMiddleware(logger)
);
console.log(store.getState());

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
      { path : '/order', element : <MyOrder /> },
      { path : '/count', element : <MyCount /> },
      { path : '/info', element : <MyInfo /> },
      { path : '/redux', element : <MyCountRedux /> },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <CookiesProvider>{/* 쿠키사용시 필요함 */}
        <RouterProvider router = {router} />
      </CookiesProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
