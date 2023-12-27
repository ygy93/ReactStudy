import axios from "axios";
import { useEffect, useState } from "react";

export default function useProduct(baseUrl){
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
    .get(baseUrl)
    .then(data => 
      setProductList(data.data)
    )
    .catch(err => console.log(err))
  },[])

  return [productList]
}