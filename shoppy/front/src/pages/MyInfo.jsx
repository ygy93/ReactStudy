import React, { useReducer, useState } from "react";
import infoReducer from './../reducer/infoReducer';

export default function MyInfo(){
  // const [age, setAge] = useState(0);
  const [state, infoDispatch] = useReducer(infoReducer, {age : 20, name : '홍'});

  return(
    <>
      name : <input type="text" value={state.name} onChange={() => {}}/><br/>
      age : <input type="text" value={state.age} onChange={() => {}}/><br/>
      <button type="button" onClick={() => infoDispatch({type : 'age'})}>정보 변경</button><br/>
      <p>hello {state.name} is {state.age}</p>
    </>
  );
}