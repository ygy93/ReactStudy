import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from 'react-router-dom';
// import ProductAvata from "../components/ProductAvata";
// import ProductList from "../components/ProductList";
import { useRef } from "react";
import { getUser } from '../util/localStorage.js';

export default function ProductDetail(){
  const { pid } = useParams();
  const [product, setProduct] = useState([]);

  const selectSize = useRef(null);
  const userInfo = getUser(); // 로그인 유무
  const navigate = useNavigate();

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
      navigate('/login');
    } else {
      // alert(JSON.stringify(product))
      const cartProduct = { id:userInfo.id, pid:product.pid, size:product.size }

      axios({
        method : 'post',
        url : 'http://localhost:8000/carts/new',
        data : cartProduct
      })
      .then((data) => {
        if(data.data === 'good'){
          alert('장바구니에 추가하였습니다.')
        }
      })
      .catch(err => console.log(err))
    }
    
  }

  return(
    <div className="content">
      <div className ="product_detail">
        <img src={`/images/image/${product.image}`} className="detail_image"/>
        <ul className ="product_info">
          <li className ="detail_font_bigger">{product.name}</li>
          <li className ="detail_font_bigger">{product.price}</li>
          <li className ="detail_font_small">{product.info}</li>
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