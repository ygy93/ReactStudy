import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';

export default function Navbar(){
  return(
    <header>
      <Link to ='/' className="h1Link">
        <FiShoppingBag className="shopIcon"/>
        <h1>Shoppy</h1>
      </Link>
      <nav className="gnb">
        <Link to = '/products'>Products</Link>
        <Link to = '/carts'>Carts</Link>
        <Link to = '/products/new'><BsFillPencilFill /></Link>
        <Link to = 'login'><button type="button">Login</button></Link>
      </nav>
    </header>
  );
}