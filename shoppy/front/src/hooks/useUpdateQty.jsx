import axios from "axios";

// 커스텀 훅은 다른 커스텀 훅에서 호출 x
// 순수 자바스크립트 함수에서는 커스텀 훅을 호출 x
export default function useUpdateQty(){

  const updateCartItemQty = (userInfo, cid, checkFlag) => {
    // 수량 업데이트
    // function updateQty (cid, checkFlag){
    // console.log(cid);
    // carts/:고객아이디/:장바구니아이디/:상태값
    axios
    .put(`http://localhost:8000/carts/${userInfo.id}/${cid}/${checkFlag}`)
    .then(data => {
      // console.log(data.data);
      // window.location.reload();
    })
    .catch(err => console.log(err))
    // }
  }
  
  return [updateCartItemQty]
}