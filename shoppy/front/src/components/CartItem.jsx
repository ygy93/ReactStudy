import React, { useState } from "react";
import Quantity from './Quantity';
import axios from "axios";
import CartDeleteItem from "./CartDeleteItem";
import useUpdateQty from "../hooks/useUpdateQty";

export default function CartItem({cartList, userInfo}){
  let [number, setNumber] = useState(cartList.qty); // 숫자가 변해야하는데 절대값 const 로 주면 변하질않아 let 으로 변수 선언
  const [updateCartItemQty] = useUpdateQty();

  // quantityCheck --> minus, plus 값을 파라미터로 받음
  const quantityCheck = async(type) => {
    if(type === 'minus'){
      (number === 1) ? alert('최소 1개') : await updateCartItemQty(userInfo, cartList.cid, type)
        // setNumber(number - 1);
        // DB 업데이트 : 커스텀 훅 함수를 호출
    } else if(type === 'plus'){
      (number === 10) ? alert('최대 10개') : await updateCartItemQty(userInfo, cartList.cid, type)
        // setNumber(number + 1);
        // DB 업데이트 : 커스텀 훅 함수 호출
    }
    window.location.reload();
  }
  

  let imgStyle = {
    width:'120px',
    height:'160px'
  }

  const [totDeliPrice, setTotDeliPrice] = useState(0);
  // const [qty, setQty] = useState(1);
  // const [totPrice, setTotPrice] = useState(0);
  // const [totOrderPrice, setTotOrderPrice] = useState(0);

  // 장바구니 수량
  // const getQty = (e) => {
  //   // alert(JSON.stringify(e.flag)) // 수량, 상품가격, flag
  //   setQty(e.qty);

  //   console.log(e);

  //   if(e.flag === 'plus') {
  //     if(e.qtyFlag){
  //       updateQty(e.cid, e.flag)// DB 에서 수량 변경 ++
  //       setTotPrice(totPrice + parseInt(e.price))
  //       setTotOrderPrice(totPrice + parseInt(e.price))
  //     }
  //   } else {
  //     if(e.qtyFlag){
  //       updateQty(e.cid, e.flag)// DB 에서 수량 변경 --
  //       setTotPrice(totPrice - parseInt(e.price));
  //       setTotOrderPrice(totPrice - parseInt(e.price))
  //     }
  //   }
  // }

  return(
    <tr>
      <td>No. {cartList.rno}, 상품번호. {cartList.cid}</td>
      <td>
        <img src={`http://127.0.0.1:8000/${cartList.image}`} style={imgStyle}/>
        {cartList.name}
      </td>
      {/* <td>
        <select style = {selectStyle}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </td> */}
      <td>{cartList.size}</td>
      <td>{cartList.price}</td>
      <td>{totDeliPrice} 원</td>
      <td>
        {/* <Quantity qty={cartList.qty} price={cartList.price} getQty={getQty} cid={cartList.cid}/> */}
        <p>      
          <span onClick={() => {quantityCheck("minus")}}>-</span> {/* 함수를 직접 바로 주면 즉시 계속 실행되므로 () => 콜백으로 줘야함 */}
          <span>{number}</span>
          <span onClick={() => {quantityCheck("plus")}}>+</span>
        </p>
        <CartDeleteItem userInfo={userInfo} cid={cartList.cid}/>
      </td>
    </tr>
  );
}