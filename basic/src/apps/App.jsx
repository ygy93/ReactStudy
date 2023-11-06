import './App.css';
import Profile from '../components/Profile';
import Avata from '../components/Avata';

function App() { // 리턴 시 반드시 하나의 태그만 출력한다
  // div 태그나 <> </> 빈 태그를 넣어도 상관없음
  return (
    <>
      <Profile
        image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        name
        title
        isNew = {true}
      />
      {/* <Profile
        image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        name='JiSung Park'
        title='프론트엔드 개발자'
        isNew = {true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        name='MinJae Kim'
        title='백엔드 개발자'
        isNew = {false}
      />
      <Avata
        image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
      /> */}
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