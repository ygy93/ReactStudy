import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import ProductAvata from "./ProductAvata";
import ProductList from "./ProductList";

export default function Product(){
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
    .get('http://localhost:8000/products/')
    .then(data => 
      setProductList(data.data)
    )
    .catch(err => console.log(err))
  },[])

  return(
    <ProductList>
      {
        productList.map((product) => 
          <div key={`${product.pid}`}>
            <Link to = {`/products/${product.pid}`}>
              <ProductAvata image={`/images/image/${product.image}`}/>
            </Link>
          </div>
        )
      }
    </ProductList>
  );
}