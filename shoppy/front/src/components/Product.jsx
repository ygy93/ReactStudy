import React from "react";
import { Link } from 'react-router-dom';
import ProductAvata from "./ProductAvata";
import ProductList from "./ProductList";
import useProduct from "../hooks/useProduct";

export default function Product(){
  // const [productList, setProductList] = useState([]);

  // useEffect(() => {
  //   axios
  //   .get('http://localhost:8000/products/')
  //   .then(data => 
  //     setProductList(data.data)
  //   )
  //   .catch(err => console.log(err))
  // },[])
  const baseUrl = 'http://localhost:8000/products/';
  const [productList] = useProduct(baseUrl);

  return(
    <ProductList>
      {
        productList.map((product) => 
          <div key={`${product.pid}`}>
            <Link to = {`/products/${product.pid}`}>
              <ProductAvata image={`http://localhost:8000/${product.image}`}/>
            </Link>
          </div>
        )
      }
    </ProductList>
  );
}