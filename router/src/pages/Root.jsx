import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Root(){
  return(
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
/* 
  Outlet 을 기점으로 위에 있는 것을 클릭하면
  아래로 출력되도록 해줌
*/