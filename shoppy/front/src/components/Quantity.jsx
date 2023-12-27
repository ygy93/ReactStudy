import React, { useState } from "react";

export default function Quantity(props){ // Quantity({getQty}) 상품디테일에서 quantity 컴포넌트에 있는 함수 가져가기
  let pnumber;
  (props.qty === undefined) ? pnumber = 1 : pnumber = props.qty; // productdetail 숫자

  let [number, setNumber] = useState(pnumber); // 숫자가 변해야하는데 절대값 const 로 주면 변하질않아 let 으로 변수 선언

  // const minusNumber = (e) => {
  //   (number > 0) ? setNumber(--number) : alert('최소 수량은 1개 입니다');
  // }
  // const plusNumber = (e) => {
  //   (number < 10) ? setNumber(++number) : alert('최대 수량은 10개 입니다');
  // }

  function quantityCheck(checkFlag, e){ // 매개변수의 순서도 중요함, 파라미터를 앞쪽, 이벤트를 뒤쪽
    let qtyCheckFlag = false;

    if(checkFlag === "minus"){
      // (number > 1) ? setNumber(--number) : alert('최소 수량은 1개 입니다');
      if(number > 1){
        setNumber(--number);
        qtyCheckFlag = true; // true 일때 마이너스해주게 함, 반대로 false 면 빼기 못하게 막음
      } else {
        alert('최소 수량은 1개 입니다.');
      }
    } else {
      if(number < 10){
        setNumber(++number);
        qtyCheckFlag = true;
      } else {
        alert('최대 수량은 10개 입니다');
      }
      // (number < 10) ? setNumber(++number) : alert('최대 수량은 10개 입니다');
    }
    // 상품디테일에서 quantity 컴포넌트에 있는 함수 가져가기
    // 위에 것들을 전체 가져가기 위해 아래에 선언하여 리턴
    props.getQty({qty : number, price : props.price, flag : checkFlag, qtyFlag : qtyCheckFlag, cid : props.cid});
  }

  return(
    <div className="quantity">
      <p>      
        <span onClick={() => {quantityCheck("minus")}}>-</span> {/* 함수를 직접 바로 주면 즉시 계속 실행되므로 () => 콜백으로 줘야함 */}
        <span>{number}</span>
        <span onClick={() => {quantityCheck("plus")}}>+</span>
      </p>
    </div>
  );
}