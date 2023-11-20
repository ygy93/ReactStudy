import React from "react";
import * as localStorage from '../util/localStorage.js';
import NotFound from "./NotFound.jsx";

export default function MyCart(){/* 페이지 보안을 위해서 주소페이지에서 보안코딩을 넣어줘야함 */
  const userInfo = localStorage.getUser();

  return(
    <>
      {
        userInfo ? 
        (
          <div>My Cart!!</div>
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