import React, { useEffect, useState } from "react";
import * as localStorage from '../util/localStorage.js';
import NotFound from "./NotFound.jsx";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function MyCart(){/* 페이지 보안을 위해서 주소페이지에서 보안코딩을 넣어줘야함 */
  const userInfo = localStorage.getUser();

  // 서버에 회원의 장바구니 리스트 가져오기
  // http://localhost:8000/carts/test --> http://localhost:8000/carts/:id
  const [userCartList, setUserCartList] = useState([]);
  useEffect(() => {
    axios
    .get(`http://localhost:8000/carts/${userInfo.id}`)
    .then(data => {
      setUserCartList(data.data)
      // console.log(data.data)
    }
      
    )
    .catch(err => console.log(err))
  },[])

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
                <th>수량</th>
                <th>사이즈</th>
                <th>가격</th>
                <th>기타</th>
              </thead>
              <tbody>
                {
                  userCartList.map((cartList) => 
                    <tr>
                      <td>No. {cartList.rno}</td>
                      <td>
                        <img src={`images/image/${cartList.image}`} style={imgStyle}/>
                        {cartList.name}
                      </td>
                      <td>{cartList.qty}
                        <select style = {selectStyle}>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </td>
                      <td>{cartList.size}</td>
                      <td>{cartList.tprice}</td>
                      <td><Button variant="danger">삭제</Button></td>
                    </tr>
                  )
                }
              </tbody>
            </Table>
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