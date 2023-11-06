import { useState, useEffect } from "react";
import ProductView from "./ProductView";
import '../../Section.css';

export default function SectionList(){
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('data/oliveProducts.json')
    .then(res => res.json())
    .then(data => 
      setList(data)
    )
  },[])

  return(
    <div className="SectionList">
      { list.map(product => (
        <ProductView 
          image = {product.image}
          brand = {product.brand}
          title = {product.title}
          price = {product.price}
        />
        ))
      }
    </div>
  );
}