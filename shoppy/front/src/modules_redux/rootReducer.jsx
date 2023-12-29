import { combineReducers } from "redux";
import reduxCount from './reduxCount';

/* 여러개의 reducer 합치는 기능 */
const rootReducer = combineReducers({
  reduxCount
});

export default rootReducer;