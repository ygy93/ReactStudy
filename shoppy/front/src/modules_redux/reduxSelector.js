// import { createSelector } from 'reselect';
import { createSelector } from "@reduxjs/toolkit";

const getCartList = (state) => state.reduxCartList.list.cartList;
const getTotalCount = (state) => state.reduxCartList.list.totalCount;
const getTotalPrice = (state) => state.reduxCartList.list.totalPrice;
const getPageSize = (state) => state.reduxCartList.list.pageSize;
const getQtyUpdateFlag = (state) => state.reduxQtyUpdate.qtyUpdateFlag;
const getDeleteFlag = (state) => state.reduxCartItemDelete.deleteFlag;

export const getCartListData = createSelector(
  [getCartList, getTotalCount, getTotalPrice, getPageSize, getQtyUpdateFlag, getDeleteFlag],
  (cartList, totalCount, totalPrice, pageSize, qtyUpdateFlag, deleteFlag) => {
    cartList,
    totalCount,
    totalPrice,
    pageSize,
    qtyUpdateFlag,
    deleteFlag
  }
)