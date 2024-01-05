import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list : [] // [{cartList : cartList, totalCount : totalCount...}] list.cartList

  // cartList : null,
  // totalCount : 0,
  // totalPrice : 0,
  // pageSize : 1
}

const cartListSlice = createSlice({
  name : "cartList",
  initialState,
  reducers : {
    getFetchDataList(state, action){
      state.list = action.payload; // state.payload.cartList

      // state.cartList = action.cartList;
      // state.totalCount = action.totalCount;
      // state.totalPrice = action.totalPrice;
      // state.pageSize = action.pageSize;
    }
  }
})
export const cartListSliceAction = cartListSlice.actions; // { increment, decrement, incrementByAmount }
export default cartListSlice.reducer;

// export default function reduxCartList(state=init, action){
//   switch(action.type){
//     case "FETCH_DATA_SUCCESS" : 
//       return {
//         ...state,
//         cartList : action.cartList,
//         totalCount : action.totalCount,
//         totalPrice : action.totalPrice,
//         pageSize : action.pageSize
//       }
//     default : 
//       return state;
//         // cartList : null,
//         // totalCount : 0,
//         // totalPrice : 0,
//         // pageSize : 1
      
//   }
// }