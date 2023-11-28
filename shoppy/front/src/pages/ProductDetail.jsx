import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
// import ProductAvata from "../components/ProductAvata";
// import ProductList from "../components/ProductList";
import { useRef } from "react";
import { getUser } from '../util/localStorage.js';
import Quantity from "../components/Quantity.jsx";
import * as cookie from './../util/cookie';

export default function ProductDetail(){
  const { pid } = useParams();
  const [product, setProduct] = useState([]);

  const selectSize = useRef(null);
  const userInfo = getUser(); // 로그인 유무
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios
    .get(`http://localhost:8000/products/${pid}`)
    .then(data => 
      setProduct(data.data)
    )
    .catch(err => console.log(err))
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    // alert(JSON.stringify({name, value}))
    // alert(JSON.stringify(product))
    setProduct({...product, [name] : value})

  }
  
  /* 장바구니 추가 이벤트 */
  const handleClick = (e) => {
    if(product.size === undefined){
      alert('사이즈를 선택해주세요.');
      return selectSize.current.focus();
    }
    // alert(JSON.stringify(userInfo));
    if(userInfo === null){
      alert('로그인 후 상품추가가 가능합니다.');

      // 현재 주소를 쿠키에 저장
      // alert(JSON.stringify(location))
      cookie.setCookie('sproduct', JSON.stringify(location.pathname))
      
      navigate('/login');
    } else {
      // alert(JSON.stringify(product)), 회원아이디, 상품아이디, 사이즈
      const cartProduct = { 
        id:userInfo.id, pid:product.pid, size:product.size,
        qty : qty /* 아래 하위컴포넌트에서 number 값 가져오는것을 사용함 */
      }
      // alert(JSON.stringify(cartProduct))

      axios({
        method : 'post',
        url : 'http://localhost:8000/carts/new',
        data : cartProduct
      })
      .then((data) => {
        if(data.data === 'good'){
          // 쿠키에 삭제된 sproduct 삭제
          cookie.removeCookie('sproduct');

          const choice = window.confirm('장바구니에 추가하였습니다. 장바구니로 이동하시겠습니까?')

          if(choice) navigate('/carts');
        }
      })
      .catch(err => console.log(err))
    }
  }

  // 하위(자식) 컴포넌트인 Quantity 의 number 값 가져오기
  const [qty, setQty] = useState(0);
  const getQty = (e) => {
    setQty(e.qty);
    // alert(`qty --->> ${qty}`);
  }

  return(
    <div className="content">
      <div className ="product_detail">
        <img src={`http://127.0.0.1:8000/${product.image}`} className="detail_image"/>
        <ul className ="product_info">
          <li className ="detail_font_bigger">{product.name}</li>
          <li className ="detail_font_bigger">{product.price}</li>
          <li className ="detail_font_small">{product.info}</li>
          <li>
            <Quantity getQty = {getQty} /* qty = {1} *//>{/* Quantity 값들을 MyCart 에서 가져와 숫자가 보이지않아 초기값을 1 로 가져옴 */}
          </li>
          <li>
              <span className ="detail_font_small">옵션 : </span>
              <select className ="detail_select" name="size" onChange={handleChange} ref={selectSize}>
                <option value="default">선택해주세요</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
          </li>
          <li><button className ="detail_button" onClick={handleClick}>장바구니 추가</button></li>
        </ul>        
      </div>
    </div>
  );
}