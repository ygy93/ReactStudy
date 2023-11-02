import './App.css';
import Profile from './components/Profile';
import Avata from './components/Avata';
import React from 'react';
import Counter from './components/Counter';
import { useState } from 'react';

function App() { // 리턴 시 반드시 하나의 태그만 출력한다
  // div 태그나 <> </> 빈 태그를 넣어도 상관없음
  const [totalCount, setTotalCount] = useState(0);
  const handleClick = (event) => setTotalCount((count) => count + 1)

  return (
    <>
      <div className="container">
        <div className="banner">Total : {totalCount}</div>
        <Counter onClick={handleClick}/> {/* 클릭이벤트가 발생하면 totalCount 구한다 */}
        <Counter onClick={handleClick}/>
      </div>
    </>
  );
}

export default App;



{/* 
const name = '김민재';
  const name2 = '손흥민';
  const list = ['HTML', 'CSS', 'React', 'JavaScript', 'MySQL'];
<h1 className='orange'>Welcome to the Black Parade</h1>
<h1>{name}님 안녕하세요</h1>
<h1>{`${name}, ${name2} 고객`}님 어서오세요</h1>
<ul>
  { 
    list.map((item) => { // 중괄호 (블래이스) 가 있을땐 여러개의 로직이 있기에 리턴으로 잡아줘야함
      return <li>{item}</li> // 여러개의 로직이 있는 것이 아니라면 굳이 중괄호 (블래이스) 를 안넣어도되며 리턴도 마찬가지
    })
  }
</ul>
 */}