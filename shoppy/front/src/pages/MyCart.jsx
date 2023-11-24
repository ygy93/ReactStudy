import React, { useEffect, useState } from "react";
import * as localStorage from '../util/localStorage.js';
import NotFound from "./NotFound.jsx";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Quantity from "../components/Quantity.jsx";

export default function MyCart(prop){/* 페이지 보안을 위해서 주소페이지에서 보안코딩을 넣어줘야함 */
  const userInfo = localStorage.getUser();

  // 상품 총가격
  const [totPrice, setTotPrice] = useState(0);
  const [totDeliPrice, setTotDeliPrice] = useState(0);
  const [totOrderPrice, setTotOrderPrice] = useState(0);

  const [qty, setQty] = useState(1);

  const [userCartList, setUserCartList] = useState([]);


  // 수량 업데이트
  function updateQty (cid, checkFlag){
    // console.log(cid);
    // carts/:고객아이디/:장바구니아이디/:상태값
    axios
    .get(`http://localhost:8000/carts/${userInfo.id}/${cid}/${checkFlag}`)
    .then(data => {
      window.location.reload();
    })
    .catch(err => console.log(err))
  }


  // 장바구니 수량
  const getQty = (e) => {
    // alert(JSON.stringify(e.flag)) // 수량, 상품가격, flag
    setQty(e.qty);

    // console.log(e);

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

  // 서버에 회원의 장바구니 리스트 가져오기
  // http://localhost:8000/carts/test --> http://localhost:8000/carts/:id
  useEffect(() => {
    axios
    .get(`http://localhost:8000/carts/${userInfo.id}`)
    .then(data => {
      setUserCartList(data.data)
      // console.log(data.data)

      // 총 상품가격 : totPrice, 수량 * 가격
      const newTotPrice = setNewTotPrice(data.data);
      setTotPrice(newTotPrice); 

      const newTotOrderPrice = newTotPrice + totDeliPrice;
      setTotOrderPrice(newTotOrderPrice);
    })
    .catch(err => console.log(err))
  },[])
  // 총 상품가격 계산함수
  const setNewTotPrice = (cartList) => {
    return cartList.reduce((total, cart) => total + (cart.price * cart.qty), 0);
  }


  // 카트 삭제 버튼 이벤트
  const handleDelete = async(e) => {
    const cid = e.target.dataset.id;

    await axios
    .delete(`http://localhost:8000/carts/${userInfo.id}/${cid}`)
    .then(data => {
      // console.log(data.data)
      window.location.reload();
    })
    .catch(err => console.log(err))
  }

  
  // 주문하기 버튼 이벤트
  const [order, setOrder] = useState([]);
  const handleOrder = (e) => {
    // alert(JSON.stringify(userCartList));
    // ? 실행하려는 기능에 관련된 데이터는 어디있는가? -> userCartList : 정확한 데이터 추가
    // 회원id, pid, size, qty, totprice -> JSON 객체로 생성 -> newOrderList
    const newOrderList = []; // new Array()
    userCartList.map((cart) => {
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
      }
    })
    .catch(err => console.log(err))
  }


  let style = {
    width:'70%',
    margin:'auto'
  }
  let selectStyle = {
    marginLeft:'20px'
  }
  let imgStyle = {
    width:'120px',
    height:'160px'
  }

  return(
    <>
      {
        userInfo ?
        (
          <div style = {style}>
            <h2>My Cart!!</h2>
            {/* <ul>
              {
                userCartList.map((cartList) => 
                  // console.log(cartList);
                  <li>
                    <p>No. {cartList.rno}</p>
                    <p><img src={cartList.image} alt="cartImg" /></p>
                    <p>수량 : {cartList.qty}</p>
                    <p>사이즈 : {cartList.size}</p>
                    <p>상품번호 : {cartList.pid}</p>
                  </li>
                )
              }
            </ul> */}
            <Table striped bordered hover>
              <thead>
                <th>번호</th>
                <th>상품정보</th>
                {/* <th>수량</th> */}
                <th>사이즈</th>
                <th>가격</th>
                <th>배송비</th>
                <th>기타</th>
              </thead>
              <tbody>
                {
                  userCartList.map((cartList) => 
                    <tr>
                      <td>No. {cartList.rno}, {cartList.cid}</td>
                      <td>
                        <img src={`images/image/${cartList.image}`} style={imgStyle}/>
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
                        <Button type="button" variant="danger" onClick={handleDelete} data-id = {cartList.cid}>삭제</Button>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </Table>
            <div className="tot_div_style">
              <label>총 상품가격</label><span className="tot_font_style">{totPrice.toLocaleString()}</span>{/* 3자리씩 , 넣기 */}
              <label> + 총 배송비</label><span className="tot_font_style">{totDeliPrice.toLocaleString()}</span>
              <label> = 총 주문금액</label><span className="tot_order_font_style">{totOrderPrice.toLocaleString()}</span>
            </div>

            <div className="orderBtn">
              <button type="button" onClick={handleOrder}>주문하기</button>
            </div>
          </div>
          
        )
        :
        (
          <>
            <div>잘못된 경로로 접속하셨습니다. 확인해주세요.</div>
            <NotFound />
          </>
        )
      }
    </>
  );
}