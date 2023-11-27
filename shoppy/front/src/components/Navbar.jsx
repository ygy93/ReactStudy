import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import * as localStorage from '../util/localStorage.js'; 

export default function Navbar(){
  const navigate = useNavigate();
  const userInfo = localStorage.getUser();

  const handleLogout = () => {
    alert('로그아웃 하시겠습니까?');
    localStorage.removeUser();
    navigate('/');
  }

  return(
    <header>
      <Link to ='/' className="h1Link">
        <FiShoppingBag className="shopIcon"/>
        <h1>Shoppy</h1>
      </Link>
      <nav className="gnb">
        {
          userInfo ? 
          (
            <>
              <span className="welcome">"{userInfo.id}" 님! 반갑습니다!</span>
              <Link to = '/products'>Products</Link>
              <Link to = '/carts'>Carts</Link>
              <Link to = '/order'>Order</Link>
              <Link to = '/products/new'><BsFillPencilFill /></Link>
              <Link to = '/'><button type="button" onClick={handleLogout}>Logout</button></Link>
            </>
          )
          :
          (
            <>
              <Link to = '/products'>Products</Link>
              <Link to = 'login'><button type="button">Login</button></Link>
            </>
          )
        }
      </nav>
    </header>
  );
}