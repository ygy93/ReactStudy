import React from "react";
// 똑같은 내용을 외부에서 호출할때 파라미터 사용
export default function Button({className, buttonName}){ // 바뀌는 내용이 외부에서 바뀔때 파라미터를 사용
  return(
    <button type="button" className={className}>{buttonName}</button>
  );
}