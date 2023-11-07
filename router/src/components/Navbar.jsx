import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return(
    <nav className='navbar'>
      <Link to = '/' className='menu'>Home</Link>
      <Link to = '/video' className='menu'>video</Link>
    </nav>
  );
}
/* 
  기존 리액트 버전에선 a 앵커를 자동으로 Link to 로 변환시켜줬었는데 
  해당 변환 작업에서 잦은 에러가 떴어서 웬만하면 Link to 를 직접 써서 사용하도록 하자
*/