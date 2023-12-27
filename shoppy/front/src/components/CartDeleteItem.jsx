import React, { useRef } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import useCartDeleteItem from './../hooks/useCartDeleteItem';

export default function CartDeleteItem({userInfo, cid}){
  // 카트 삭제 버튼 이벤트
  const buttonRef = useRef(null)
  useCartDeleteItem(buttonRef, userInfo, cid);

  return(
    <Button 
      type="button" 
      variant="danger" 
      // onClick={handleDelete} 
      // data-id = {cid}
      ref={buttonRef}
    >삭제
    </Button>
  );
}