import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import * as localStorage from '../util/localStorage.js';
import NotFound from "./NotFound.jsx";

export default function MyOrder(){
  
  const userInfo = localStorage.getUser();

  return(
    <>
      {
        userInfo ? 
        (
          <div className="MyOrder">
            <p>MyOrder</p>
            <Table striped bordered hover>
              <thead>
                <tr><td>주문고객</td></tr>
              </thead>
              <thead>
                <tr><td>고객정보</td></tr>
              </thead>
            </Table>
      
            <Table striped bordered hover>
              <thead>
                <tr><td>주문상품</td></tr>
              </thead>
              <thead>
                <tr><td>상품정보</td></tr>
              </thead>
            </Table>
      
            <Table striped bordered hover>
              <thead>
                <tr><td>결제방식</td></tr>
              </thead>
              <thead>
                <tr><td>선택정보</td></tr>
              </thead>
            </Table>
      
            <Button type="button">결제하기</Button>
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