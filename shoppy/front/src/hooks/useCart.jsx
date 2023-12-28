import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useCart(currentPage,userInfo){
  const [userCartList, setUserCartList] = useState([]);
  const [totPrice2, setTotPrice2] = useState(0);
  const [totDeliPrice, setTotDeliPrice] = useState(0);
  const [totOrderPrice2, setTotOrderPrice2] = useState(0);
  const [totalCount, setTotalCount] = useState(0); // 토탈카운트는 장바구니에 쌓이는 개수에 따라 달라지기때문에 db 에서 관리해야해서 초기값 0
  const [pageSize, setPageSize] = useState(3);

  // 총 상품가격 계산함수
  const setNewTotPrice = (cartList) => {
    return cartList.reduce((total, cart) => total + (cart.price * cart.qty), 0);
  }

  // 서버에 회원의 장바구니 리스트 가져오기
  useEffect(() => {
    // startIndex, endIndex
    let startIndex = 0;
    let endIndex = 0;

    startIndex = (currentPage - 1) * pageSize + 1; // 1 - 1 * 3 + 1 : 1, 4
    endIndex = currentPage * pageSize; // 1 * 3 : 3, 6,...

    // alert(`startIndex --> ${startIndex}, endIndex --> ${endIndex}`)

    axios
    // .get(`http://localhost:8000/carts/${userInfo.id}`)
    .get(`http://localhost:8000/carts/${userInfo.id}/${startIndex}/${endIndex}`)
    .then(data => {
      setUserCartList(data.data)

      const rows = data.data[0];
      (rows === undefined) ? setTotalCount(0) : setTotalCount(data.data[0].cnt);

      // setTotalCount(data.data[0].cnt) // 장바구니에 데이터가 없을때 불러올수없기에 에러가 뜨는것
      // console.log(data.data)

      // 총 상품가격 : totPrice, 수량 * 가격
      const newTotPrice = setNewTotPrice(data.data);
      setTotPrice2(newTotPrice); 

      const newTotOrderPrice = newTotPrice + totDeliPrice;
      setTotOrderPrice2(newTotOrderPrice);
    })
    .catch(err => console.log(err))
  },[currentPage]) // 체크박스 눌렀을때 다시 호출했던 방법을 응용

  return [userCartList, totalCount, pageSize, totPrice2, totOrderPrice2, totDeliPrice]

}