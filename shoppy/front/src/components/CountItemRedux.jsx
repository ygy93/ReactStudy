import React, { useReducer, useState } from "react";
import countReducer from '../reducer/countReducer';
import CountContainer from "../containers_redux/CountContainer";

export default function CountItemRedux({count, total, onPlus, onMinus, onReset}){
  // const [count, setCount] = useState(0);
  // const [number, setNumber] = useState(0);

  // CountContainer 에서 값을 가져왔기에 아래값들이 필요없어짐
  // const [state, countDispatch] = useReducer(countReducer, {count : 0, total : 0})
  // const [number, setNumber] = useState(0);

  // const handleClickPlus = () => {
  //   countDispatch({type : 'plus', number : number});
  // }
  // const handleClickReset = () => {
  //   countDispatch({type : 'reset'});
  // }
  // const handleClickMinus = () => {
  //   countDispatch({type : 'minus', number : number});
  // }
  // const handleChangeNumber = (e) => {
  //   setNumber(parseInt(e.target.value));
  //   if(e.target.value === ''){
  //     setNumber(0)
  //   }
  // }

  return(
    <>
      <h1>Count : {count}</h1>
      <p>
        <button type="button" onClick={onPlus}>Plus</button>
        {/* onClick={()=> countDispatch({type : 'plus', number : number})} */}
        <button type="button" onClick={onReset}>Reset</button>
        <button type="button" onClick={onMinus}>Minus</button><br/>
        {/* <input type="text" value={number} onChange={handleChangeNumber} /> */}
      </p>
      <h3>total : {total}</h3>
    </>
  );
}