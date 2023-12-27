import React, { useState } from "react";
import Quantity from './Quantity';
import axios from "axios";
import CartDeleteItem from "./CartDeleteItem";

export default function CartItem({cartList, userInfo}){
  let imgStyle = {
    width:'120px',
    height:'160px'
  }

  const [qty, setQty] = useState(1);
  const [totDeliPrice, setTotDeliPrice] = useState(0);
  const [totPrice, setTotPrice] = useState(0);
  const [totOrderPrice, setTotOrderPrice] = useState(0);

  // 장바구니 수량
  const getQty = (e) => {
    // alert(JSON.stringify(e.flag)) // 수량, 상품가격, flag
    setQty(e.qty);

    console.log(e);

    if(e.flag === 'plus') {
      if(e.qtyFlag){
        updateQty(e.cid, e.flag)// DB 에서 수량 변경 ++
        setTotPrice(totPrice + parseInt(e.price))
        setTotOrderPrice(totPrice + parseInt(e.price))
      }
    } else {
      if(e.qtyFlag){
        updateQty(e.cid, e.flag)// DB 에서 수량 변경 --
        setTotPrice(totPrice - parseInt(e.price));
        setTotOrderPrice(totPrice - parseInt(e.price))
      }
    }
  }

  // 수량 업데이트
  function updateQty (cid, checkFlag){
    // console.log(cid);
    // carts/:고객아이디/:장바구니아이디/:상태값
    axios
    .get(`http://localhost:8000/carts/${userInfo.id}/${cid}/${checkFlag}`)
    .then(data => {
      // console.log(data.data);
      window.location.reload();
    })
    .catch(err => console.log(err))
  }

  return(
    <tr>
      <td>No. {cartList.rno}, {cartList.cid}</td>
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
        <Quantity qty={cartList.qty} price={cartList.price} getQty={getQty} cid={cartList.cid}/>
        <CartDeleteItem userInfo={userInfo} cid={cartList.cid}/>
      </td>
    </tr>
  );
}