import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import ProductAvata from "../components/ProductAvata";
import ProductList from "../components/ProductList";

export default function ProductDetail(){
  const { pid } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
    .get(`http://localhost:8000/products/${pid}`)
    .then(data => 
      setProduct(data.data)
    )
    .catch(err => console.log(err))
  },[])

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
              <select className ="detail_select">
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
          </li>
          <li><button className ="detail_button">장바구니 추가</button></li>
        </ul>        
      </div>
    </div>
  );
}