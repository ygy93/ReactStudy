import React, { useState } from "react";
import './App.css';

// const [실행되는 값, 적용되는 이벤트 메소드] , useState(초기값)

export default function AppLogin(){
  const [form, setForm] = useState({id : '', pass : ''});

  const handleLoginChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name] : value});

    console.log(form);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="id">아이디 : </label>
      <input type="text" name="id" id="id" value={form.id} onChange={handleLoginChange}/>

      <label htmlFor="pass">패스워드 : </label>
      <input type="text" name="pass" id="pass" value={form.pass} onChange={handleLoginChange}/>
      <button type="submit">Login</button> {/* 상단에서 onSubmit 이벤트를 줬으면 따로 type 을 설정하지 않아도 submit 으로 자동으로 됨 */}
      {/* 자바스크립트 이벤트로 호출하려면 type 버튼으로 바꿔줘야 실행 가능 */}
    </form>
  );
}