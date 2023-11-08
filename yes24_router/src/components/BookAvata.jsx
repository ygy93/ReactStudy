import React from "react";

export default function BookAvata({number, image}){
  return(
    <div className="BookAvata">
      <span className="booknumber">{number}</span>
      <div className="bookcontent">
        <img src={image} className="bookimg" alt="" />
        <button type="button" className="bookBtn">미리보기</button>
      </div>
    </div>
  );
}