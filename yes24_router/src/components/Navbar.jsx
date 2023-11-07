import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
  return(
    <nav className="navbar">
      <Link to = '/' className="menu">종합</Link>
      <Link to = '/realtime' className="menu">실시간</Link>
      <Link to = '/day' className="menu">일별</Link>
      <Link to = '/monthweek' className="menu">월별/주별</Link>
      <Link to = '/hotprice' className="menu">특가</Link>
      <Link to = '/steady' className="menu">스테디셀러</Link>
    </nav>
  );
}