import axios from 'axios';
import { cartListSliceAction } from './../modules_redux/reduxCartList';

/* 장바구니 리스트 */
export const cartListFetchData = ({userInfo, currentPage}) => {
  console.log(`currentPage ---> ${currentPage}`);

  let startIndex = 0;
  let endIndex = 0;
  const pageSize = 3;

  startIndex = (currentPage - 1) * pageSize + 1; // 1 - 1 * 3 + 1 : 1, 4
  endIndex = currentPage * pageSize; // 1 * 3 : 3, 6,...

  return async(dispatch) => {
    const result = await axios.get(`http://localhost:8000/carts/${userInfo.id}/${startIndex}/${endIndex}`)
    // console.log(JSON.stringify(result.data));
    
    const cartList = result.data; // 최근 리액트 패치로 굳이 문자열로 바꾸고 다시 json 으로 parse 할 필요가 없어졌음
    console.log(cartList);

    let totalCount = 0;
    let totalPrice = 0;
    const rows = result.data[0];
    if(rows !== undefined){
      totalCount = result.data[0].cnt;
      totalPrice = result.data[0].totalprice;
    }
    
    dispatch(cartListSliceAction.getFetchDataList({cartList, totalCount, totalPrice, pageSize}))
    // dispatch({
    //   type : "FETCH_DATA_SUCCESS",
    //   cartList : cartList,
    //   totalCount : totalCount,
    //   totalPrice : totalPrice,
    //   pageSize : pageSize
    // });
  }
}

/* 장바구니 수량 */
export const cartQtyUpdate = ({userInfo, cid, checkFlag, price}) => {

  return async(dispatch) => {
    if(checkFlag !== null){
      await axios
      .put(`http://localhost:8000/carts/${userInfo.id}/${cid}/${checkFlag}`)
      .then(result => {
        console.log('수량업데이트 성공')
        dispatch({
          type : "UPDATE_SUCCESS",
          qtyUpdateFlag : true
        })
      })
      .catch(err => console.log('수량업데이트 실패'))
    }
  }
}


/** 장바구니 삭제버튼  */
export const cartItemDelete = ({userInfo, cid}) => {
  console.log(`delete--->> ${userInfo.id}, ${cid}`);

  return  async (dispatch) => {  
      await axios.get(`http://localhost:8000/carts/${userInfo.id}/${cid}`)
      .then((result) => {
          console.log(':: delete success!')

          dispatch({
            type: "DELETE_SUCCESS",
            deleteFlag: true
          });
      })
      .catch((error) => console.log(':: delete error!'));  
  }
}
