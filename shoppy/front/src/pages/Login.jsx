import React from "react";
import { Link } from "react-router-dom";

export default function Login(){
  
  return(
    <div className="Login">
      <h3>Login</h3>
      <form>
        <ul>
          <li>
            <label>아이디</label>
            <input type="text" name="id" />
          </li>
          <li>
            <label>패스워드</label>
            <input type="password" name="pass" />
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