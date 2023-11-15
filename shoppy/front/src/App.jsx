import './App.css';
import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />{/* 컴포넌트에 만듦 */}
      <Outlet />
    </>
  );
}

export default App;
