import React from "react";
import Book from "../components/Book";

export default function HotPriceBestSeller(){
  return(
    <div className="HotPriceBestSeller">
      특가 베스트
      <Book filename="hotprice"/>
    </div>
  );
}