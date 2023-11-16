import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Sign(){
  const [signInfo, setSignInfo] = useState({name : "", id : "", pass : "", phone : ""});
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setSignInfo({...signInfo, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method : 'post',
      url : 'http://localhost:8000/sign',
      data : signInfo,
    })
    .then((data) => {
      if(data.data === 'good'){
        alert('회원가입 되셨습니다');
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
            <input type="text" name="name" value={signInfo.name} onChange={handleChange}/>
          </li>
          <li>
            <label>아이디</label>
            <input type="text" name="id" value={signInfo.id} onChange={handleChange} />
          </li>
          <li>
            <label>패스워드</label>
            <input type="password" name="pass" value={signInfo.pass} onChange={handleChange} />
          </li>
          <li>
            <label>폰번호</label>
            <input type="text" name="phone" placeholder="- 없이" value={signInfo.phone} onChange={handleChange} />
          </li>
          <li>
            <button>로그인</button>
            <button type='reset'>다시쓰기</button>
          </li>
        </ul>
      </form>
      <span>아이디/패스워드 찾기</span> &nbsp;&nbsp;
      <Link to ="/sign">회원가입</Link>
    </div>
  );
}