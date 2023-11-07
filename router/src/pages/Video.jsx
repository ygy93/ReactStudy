import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Video(){
  const navigate = useNavigate();
  const [text, setText] = useState();
  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    // text 파라미터를 /video/{text} 파라미터 전송 
    navigate(`/video/${text}`); // 이동하려는 주소값만 주면 됨, "node 에서 send, redirect 와 같은 기능"
  }

  return(
    <>
      <div>Video Page</div>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="videoId"
          placeholder='video Id : '
          value={text}
          onChange={handleChange}
        />
      </form>
    </>
  );
}