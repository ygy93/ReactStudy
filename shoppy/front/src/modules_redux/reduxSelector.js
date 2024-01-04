import { createSelector } from 'reselect';

const getCartList = (state) => state.reduxCartList.cartList;
const getTotalCount = (state) => state.reduxCartList.totalCount;
const getTotalPrice = (state) => state.reduxCartList.totalPrice;
const getPageSize = (state) => state.reduxCartList.pageSize;
const getQtyUpdateFlag = (state) => state.reduxQtyUpdate.qtyUpdateFlag;
const getDeleteFlag = (state) => state.reduxCartItemDelete.deleteFlag;

export const getCartListData = createSelector(
  [getCartList, getTotalCount, getTotalPrice, getPageSize, getQtyUpdateFlag, getDeleteFlag],
  (cartList, totalCount, totalPrice, pageSize, qtyUpdateFlag, deleteFlag) => ({
    cartList,
    totalCount,
    totalPrice,
    pageSize,
    qtyUpdateFlag,
    deleteFlag
  })
)