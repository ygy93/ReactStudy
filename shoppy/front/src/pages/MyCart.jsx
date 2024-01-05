import React, { useEffect, useState } from "react";
import * as localStorage from '../util/localStorage.js';
import NotFound from "./NotFound.jsx";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

// 페이징 처리
import Pagination from 'rc-pagination';
import 'bootstrap/dist/css/bootstrap.css'
import 'rc-pagination/assets/index.css';
import useCart from "../hooks/useCart.jsx";
import CartItem from "../components/CartItem.jsx";
import useOrder from "../hooks/useOrder.jsx";
import { cartListFetchData } from './../api/cartsAPI.js';
import { useDispatch, useSelector } from 'react-redux';
import { getCartListData } from "../modules_redux/reduxSelector.js";

export default function MyCart(){/* 페이지 보안을 위해서 주소페이지에서 보안코딩을 넣어줘야함 */
  const userInfo = localStorage.getUser();
  const navigate = useNavigate();
  // 장바구니 리스트
  const [currentPage, setCurrentPage] = useState(1); // 페이징 처리
  const dispatch = useDispatch();
  // const [cartList, totalCount, pageSize, totPrice2, totOrderPrice2, totDeliPrice] = useCart(currentPage,userInfo);

  // 2. useSelector
  const { cartList, totalCount, totalPrice, pageSize, qtyUpdateFlag, deleteFlag } = useSelector(getCartListData);
  const { handleOrder } = useOrder(cartList);

  useEffect(() => { // 서버디비 연동할 때는 무한루프에 빠지기 때문에 useEffect 로 묶어놔야함
    // 1. dispatch => API :: Axios 액션 함수 --> src/api/cartsAPI.js
    dispatch(cartListFetchData({userInfo, currentPage}));
    console.log(cartList);
  }, [currentPage, qtyUpdateFlag, totalPrice]);

  const [number, setNumber] = useState('');


  // const [qty, setQty] = useState(1);
  // const [totDeliPrice, setTotDeliPrice] = useState(0);

  // const [totalCount, setTotalCount] = useState(0); // 토탈카운트는 장바구니에 쌓이는 개수에 따라 달라지기때문에 db 에서 관리해야해서 초기값 0
  // const [pageSize, setPageSize] = useState(2);
  // const [startIndex, setStartIndex] = useState();
  // const [endIndex, setEndIndex] = useState();

  // 상품 총가격
  // const [totPrice, setTotPrice] = useState(0);
  // const [totOrderPrice, setTotOrderPrice] = useState(0);
  // const [cartList, setcartList] = useState([]);

  let style = {
    width:'70%',
    margin:'auto'
  }
  let selectStyle = {
    marginBottom:'10px'
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
                cartList && cartList.map((cartList) => 
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
                  cartList && cartList.map((cart) => 
                    <CartItem 
                      key={cart.cid}
                      cart={cart}
                      userInfo={userInfo}
                    />
                  )
                }
              </tbody>
            </Table>

            <Pagination className="d-flex justify-content-center" style={selectStyle}
              current={currentPage}
              total={totalCount}
              pageSize={number(pageSize)}
              onChange={(page) => setCurrentPage(page)}
            />

            <div className="tot_div_style">
              <label>총 상품가격</label><span className="tot_font_style">{number(totalPrice).toString()}</span>
              <label> + 총 배송비</label><span className="tot_font_style">{0}원</span>
              <label> = 총 주문금액</label><span className="tot_order_font_style">{number(totalPrice).toString()}</span>
            </div>

            <div className="orderBtn">
              <button type="button" onClick={()=>navigate('/products')}>계속쇼핑</button>
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