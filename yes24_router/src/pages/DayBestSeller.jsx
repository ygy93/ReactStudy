import React from "react";
import Book from "../components/Book";

export default function DayBestSeller(){
  return(
    <div className="DayBestSeller">
      국내도서 일별 베스트
      <Book filename="day"/>
    </div>
  );
}