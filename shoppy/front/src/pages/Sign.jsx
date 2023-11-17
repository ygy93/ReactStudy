import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Sign(){
  const navigate = useNavigate();
  const [signInfo, setSignInfo] = useState({name : "", id : "", pass : "", phone : ""});
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setSignInfo({...signInfo, [name] : value})
  }

  const inputName = useRef(null);
  const inputId = useRef(null);
  const inputPass = useRef(null);
  const inputPhone = useRef(null);

  const handleReset = (e) => {
    alert('정보를 다시 입력해주세요');
    setSignInfo({name : "", id : "", pass : "", phone : ""})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // validationcheck (유효성 체크)
    if(signInfo.name === ''){
      alert('이름을 입력해주세요');
      return inputName.current.focus();
    }
    if(signInfo.id === ''){
      alert('아이디를 입력해주세요');
      return inputId.current.focus();
    }
    if(signInfo.pass === ''){
      alert('비밀번호를 입력해주세요');
      return inputPass.current.focus();
    }
    if(signInfo.phone === ''){
      alert('폰번호를 입력해주세요');
      return inputPhone.current.focus();
    }

    axios({
      method : 'post',
      url : 'http://localhost:8000/sign',
      data : signInfo,
    })
    .then((data) => {
      if(data.data === 'good'){
        alert('회원가입 되셨습니다');
        navigate('/login');
      }
    })
    .catch(err => console.log(err))
  }

  return(
    <div className="Sign">
      <h3>SignUp</h3>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>이름</label>
            <input type="text" name="name" value={signInfo.name} ref={inputName} onChange={handleChange}/>
          </li>
          <li>
            <label>아이디</label>
            <input type="text" name="id" value={signInfo.id} ref={inputId} onChange={handleChange} />
          </li>
          <li>
            <label>패스워드</label>
            <input type="password" name="pass" value={signInfo.pass} ref={inputPass} onChange={handleChange} />
          </li>
          <li>
            <label>폰번호</label>
            <input type="text" name="phone" placeholder="- 없이" value={signInfo.phone} ref={inputPhone} onChange={handleChange} />
          </li>
          <li>
            <button>가입하기</button>
            <button type="button" onClick={handleReset}>다시쓰기</button>
          </li>
        </ul>
      </form>
      <span>아이디/패스워드 찾기</span> &nbsp;&nbsp;
      <Link to ="/login">로그인</Link>
    </div>
  );
}