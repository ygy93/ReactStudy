import React from "react";
import Book from "../components/Book";
import { Link } from 'react-router-dom';

export default function MonthWeekBestSeller(){
  return(
    <div className="MonthWeekBestSeller">
      국내도서 월별 베스트
      <span className="monthweekmenu">
        <Link to = '/monthweek/month' className="menu">월별</Link>
        <Link to = '/monthweek/week' className="menu">주별</Link>
      </span>
      <Book filename="monthweek"/>
    </div>
  );
}