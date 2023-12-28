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

export default function MyCart(){/* 페이지 보안을 위해서 주소페이지에서 보안코딩을 넣어줘야함 */
  const userInfo = localStorage.getUser();
  // 장바구니 리스트
  const [currentPage, setCurrentPage] = useState(1); // 페이징 처리
  const [userCartList, totalCount, pageSize, totPrice2, totOrderPrice2, totDeliPrice] = useCart(currentPage,userInfo);
  const { handleOrder } = useOrder(userCartList);

  // const navigate = useNavigate();

  // const [qty, setQty] = useState(1);

  // const [totDeliPrice, setTotDeliPrice] = useState(0);

  // const [totalCount, setTotalCount] = useState(0); // 토탈카운트는 장바구니에 쌓이는 개수에 따라 달라지기때문에 db 에서 관리해야해서 초기값 0
  // const [pageSize, setPageSize] = useState(2);
  // const [startIndex, setStartIndex] = useState();
  // const [endIndex, setEndIndex] = useState();

  // 상품 총가격
  // const [totPrice, setTotPrice] = useState(0);
  // const [totOrderPrice, setTotOrderPrice] = useState(0);
  // const [userCartList, setUserCartList] = useState([]);

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
                    <CartItem 
                      key={cartList.cid}
                      cartList={cartList}
                      userInfo={userInfo}
                    />
                  )
                }
              </tbody>
            </Table>

            <Pagination className="d-flex justify-content-center" style={selectStyle}
              current={currentPage}
              total={totalCount}
              pageSize={pageSize}
              onChange={(page) => setCurrentPage(page)}/* current */
            />

            <div className="tot_div_style">
              <label>총 상품가격</label><span className="tot_font_style">{totPrice2.toLocaleString()}</span>{/* 3자리씩 , 넣기 */}
              <label> + 총 배송비</label><span className="tot_font_style">{totDeliPrice.toLocaleString()}</span>
              <label> = 총 주문금액</label><span className="tot_order_font_style">{totOrderPrice2.toLocaleString()}</span>
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