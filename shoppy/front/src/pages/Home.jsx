import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home(){
  const [productList, setProductList] = useState([])
  useEffect(() => {
    axios
    .get('http://localhost:8000/products/')
    .then(data => 
      setProductList(data.data)
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
            productList.map((list) => {
                console.log(list.image);
                return <li>
                  <Link to = {`/products/${list.pid}`}>
                    <span>No. {list.pid}</span>
                    <img src={`http://127.0.0.1:8000/${list.image}`} alt="" />
                  </Link>
                </li>
              }
            )
          }
        </ul>
        </div>
      </div>
    </div>
  );
}