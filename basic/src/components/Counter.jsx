import React from "react";
import { useState } from "react";

export default function Counter({onClick}) {
  const [count, setCount] = useState(0); // const [실행되는 값, 적용되는 이벤트 메소드] , useState(초기값)

  /* const increment = (event) => {
    setCount(count + 1)
  } */

  function increment (event) {
    setCount(count => count + 1)
  }

  return(
    <div className="Counter">
      <span className="number">{count}</span>
      <button className="numBtn" onClick={() => { // {increment}
        setCount(count + 1);
        onClick();
      }}>Add +1</button>

      {/* <button className="numBtn" onClick={() => {
        increment();
        increment();
        increment();
      }}>Add +3</button> */}
    </div>
  );
}