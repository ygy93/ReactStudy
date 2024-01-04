import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function useOrder(){
  const navigate = useNavigate();
  const [cartList, setcartList] = useState([]);

  // 주문하기 버튼 이벤트
  const [order, setOrder] = useState([]);
  const handleOrder = () => {
    // alert(JSON.stringify(cartList));
    // ? 실행하려는 기능에 관련된 데이터는 어디있는가? -> cartList : 정확한 데이터 추가
    // 회원id, pid, size, qty, totprice -> JSON 객체로 생성 -> newOrderList
    const newOrderList = []; // new Array()
    cartList.map((cart) => {
      const orderProduct = {
        id : cart.id, 
        pid : cart.pid,
        size : cart.size,
        qty : cart.qty,
        totPrice : cart.tprice
      }
      newOrderList.push(orderProduct)
    })
    // alert(JSON.stringify(newOrderList))
    // post 방식으로 서버에 전송
    axios
    .post(`http://localhost:8000/order/new/`, newOrderList)
    .then(data => {
      if(data.data === 'good'){
        alert('주문 테이블 추가 성공')
        navigate('/order');
      }
    })
    .catch(err => console.log(err))
  }

  return { handleOrder }
}