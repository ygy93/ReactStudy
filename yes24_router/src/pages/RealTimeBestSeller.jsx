import React from "react";
import Book from './../components/Book';

export default function RealTimeBestSeller(){
  return(
    <div className="RealTimeBestSeller">
      실시간 베스트
      <Book filename="realtime"/>
    </div>
  );
}