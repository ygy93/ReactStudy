import React, { useReducer, useState } from "react";
import countReducer from './../reducer/countReducer';

export default function CountItem(props){
  // const [count, setCount] = useState(0);
  const [state, countDispatch] = useReducer(countReducer, {count : 0, total : 0})
  const [number, setNumber] = useState(1);

  props.getCount({total : state.total})

  const handleClickPlus = () => {
    countDispatch({type : 'plus', number : number});
  }
  const handleClickReset = () => {
    countDispatch({type : 'reset'});
  }
  const handleClickMinus = () => {
    countDispatch({type : 'minus', number : number});
  }
  const handleChangeNumber = (e) => {
    setNumber(parseInt(e.target.value));
    if(e.target.value === ''){
      setNumber(0)
    }
  }

  return(
    <>
      <h1>Count : {state.count}</h1>
      <p>
        <button type="button" onClick={handleClickPlus}>Plus</button>
        {/* onClick={()=> countDispatch({type : 'plus', number : number})} */}
        <button type="button" onClick={handleClickReset}>Reset</button>
        <button type="button" onClick={handleClickMinus}>Minus</button><br/>
        <input type="text" value={number} onChange={handleChangeNumber} />
      </p>
      <h3>total : {state.total}</h3>
    </>
  );
}