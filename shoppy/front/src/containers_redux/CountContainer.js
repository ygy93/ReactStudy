import { useDispatch, useSelector } from "react-redux";
import reduxCount from "../modules_redux/reduxCount";
import CountItemRedux from "../components/CountItemRedux";
import CountTotal from "../components/CountTotal";

/* 컴포넌트 이벤트 호출과 스토어 중개 역할 */
export default function CountContainer(){
  // 1. useSelector 를 이용하여 리듀서의 total, count 값 가져오기
  const { count, total } = useSelector(state => ({ // json 형식
    count : state.reduxCount.count,
    total : state.reduxCount.total
  }));

  // 2. dispatch 를 이용하여 액션 이벤트 함수 처리
  const dispatch = useDispatch();
  const onPlus = () => dispatch({type : 'plus'}); // 리듀서의 액션 객체 호출
  const onMinus = () => dispatch({type : 'minus'});
  const onReset = () => dispatch({type : 'reset'});

  /* 컴포넌트에 쌓여있는 데이터들은 공유한다 */
  return(
    <>
      {/* total, count 값을 공유하는 컴포넌트 호출 */}
      <CountItemRedux 
        count = {count}
        total = {total}
        onPlus = {onPlus}
        onMinus = {onMinus}
        onReset = {onReset}
      />
      <hr/>
      <CountItemRedux 
        count = {count}
        total = {total}
        onPlus = {onPlus}
        onMinus = {onMinus}
        onReset = {onReset}
      />
      <hr/>
      <CountTotal total = {total}/>
    </>
  );
}