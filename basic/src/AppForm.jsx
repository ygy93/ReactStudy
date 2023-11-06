import React, { useState } from "react";
import './App.css';

// const [실행되는 값, 적용되는 이벤트 메소드] , useState(초기값)

export default function AppForm() { // 초기값은 빈 값으로 하는것이 좋음
  // const [name, setName] = useState(''); 
  // const [email, setEmail] = useState('');
  const [form, setForm] = useState({name : '', email : ''}); // 여러개의 정보를 넘길때는 json 형식으로 넘기는게 좋음

  const handleChange = (e) => { // 이름은 10자 이하로 작성 가능하도록 선언하기

    const {name, value} = e.target; // 구조분해로 아래 setForm 에서 form.name 이 아닌 name 으로 선언 가능

    // setName(e.target.value);
    // setEmail(e.target.value);
    setForm({...form, [name] : value}); // 한곳에 여러개를 동시 선언할때는 ... 스프레드 연산자를 활용하면 좋음

    if(form.name.length >= 10)  {
      alert('이름은 10자 이내로 작성해주세요');
    }

    console.log(form); // 함수를 콘솔로그로 찍히려면 return 값이 있어야 찍힘
  }

  
  /* 폼 제어하기 */
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return( // form 에 직접 e.preventDefault(); 주어서 제어함
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름</label>
      <input type="text" name="name" id="name" value={form.name} onChange={handleChange}/> {/* 해당 위치에서 value 값을 받아와야함 */}

      <label htmlFor="email">이메일</label>
      <input type="text" name="email" id="email" value={form.email} onChange={handleChange}/>
      <button type="submit">전송</button>
    </form>
  );
}// unController Component
// 리액트에서는 모든 이벤트들을 따로 컴포넌트로 관리를 해야하는데
// 폼 태그들은 브라우저에서 직접 인식할 수 있는 것들이기 때문에
// 따로 이벤트제어를 할 수 없는 폼태그 등들을 "언컴포넌트 컨트롤러" 라고 지칭한다