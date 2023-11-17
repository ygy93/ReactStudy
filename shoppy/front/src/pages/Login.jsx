import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login(){
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({id : "", pass : ""});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setLoginForm({...loginForm, [name] : value});
  }

  const inputId = useRef(null);
  const inputPass = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 밸류체크
    if(loginForm.id === ''){
      alert('아이디를 입력해주세요.');
      return inputId.current.focus();
    }
    if(loginForm.pass === ''){
      alert('비밀번호를 입력해주세요.');
      return inputPass.current.focus();
    }

    // 서버연동
    axios({
      method : 'post',
      url : 'http://localhost:8000/login',
      data : loginForm
    })
    .then(data => {
      // setLoginForm(data.data)
      if(data.data.login_result){
        alert('로그인 성공');
        navigate('/');
      } else if (data.data.count === 1) {
        alert('비밀번호가 다릅니다. 다시 확인해주세요.');
        setLoginForm({...loginForm, pass : ''})
        return inputPass.current.focus();
      } else {
        alert('존재하지 않는 아이디입니다. 다시 확인해주세요.')
        setLoginForm({...loginForm, id : '', pass : ''})
        return inputId.current.focus();
      }
    })
    .catch(err => console.log(err))
  }

  const handleReset = (e) => {
    setLoginForm({id : "", pass : ""})
    alert('정보를 다시 입력해주세요.')
  }
  
  return(
    <div className="Login">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>아이디</label>
            <input type="text" name="id" ref={inputId} value={loginForm.id} onChange={handleChange}/>
          </li>
          <li>
            <label>패스워드</label>
            <input type="password" name="pass" ref={inputPass} value={loginForm.pass} onChange={handleChange}/>
          </li>
          <li>
            <button>로그인</button>
            <button type="button" onClick={handleReset}>다시쓰기</button>
          </li>
        </ul>
      </form>
      <span>아이디/패스워드 찾기</span> &nbsp;&nbsp;
      <Link to ="/sign">회원가입</Link>
    </div>
  );
}