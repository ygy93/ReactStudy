import { combineReducers } from "redux";
// import reduxCount from './reduxCount';
import reduxCartList from './reduxCartList.js';
import reduxQtyUpdate from './reduxQtyUpdate';
import reduxCartItemDelete from './reduxCartItemDelete';

/* 여러개의 reducer 합치는 기능 */
const rootReducer = combineReducers({
  // reduxCount,
  reduxCartList,
  reduxQtyUpdate,
  reduxCartItemDelete
});

export default rootReducer;