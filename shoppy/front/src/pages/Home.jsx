import React, { useEffect, useState } from "react";
import AllProduct from './AllProducts';
import { Link } from 'react-router-dom';

export default function Home(){
  const [productList, setProductList] = useState([])
  useEffect(() => {
    fetch('data/productData.json')
    .then(res => res.json())
    .then(data => 
      setProductList(data)
    )
  },[])

  return(
    <div className="Home">
      <div className="homecontents">
        <div className="banner">
          <img src="https://cdn.pixabay.com/photo/2015/08/25/11/50/shop-906722_1280.jpg" alt="bannerImg" />
          <div className="bannerText">
            <p className="bannerFontFirst">Shop With US</p>
            <p className="bannerFontSecond">Best Products, High Quality</p>
          </div>
        </div>
        <div className="productList">
          <ul>
          {
            productList.map((list) => 
              <li>
                <Link to = {`/products/${list.number}`}>
                  <span>No. {list.number}</span>
                  <img src={list.image} alt="" />
                </Link>
              </li>
            )
          }
        </ul>
        </div>
      </div>
    </div>
  );
}