import { useState } from 'react';
import './App.css';
import Products from '../components/Products';

export default function AppToggle() {
  const [showProducts, setShowProducts] = useState(false); // const [실행되는 값, 적용되는 이벤트 메소드] , useState(초기값)
  const handleClick = (event) => setShowProducts((show) => !show) // !showProducts

  return(
    <>
      <button onClick={handleClick}>Toggle</button>
      {showProducts && <Products />}
    </>
  );
}