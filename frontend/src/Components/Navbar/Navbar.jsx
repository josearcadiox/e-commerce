import React from 'react';
import './Navbar.css';
// import logo from '../Assets/logo.jpg'
// import cart_icon from '../Assets/cart_logo.jpg'
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCartSharp } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';

export const Navbar = () => {
  // const [menu,setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="sidebar">
        <RxHamburgerMenu size={18} />
      </div>
      <div className="nav-name">
        <p>LA VENDIMIA</p>
      </div>
      {/* <div className="nav-logo">
            <img src={logo} alt="" />
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to = '/'>Comprar</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mujeres")}}><Link style={{textDecoration: 'none'}} to = '/mujeres'>Mujer</Link>{menu==="mujeres"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("hombres")}}><Link style={{textDecoration: 'none'}} to = '/hombres'>Hombre</Link>{menu==="hombres"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("niños")}}><Link  style={{textDecoration: 'none'}} to = '/niños'>Niños</Link>{menu==="niños"?<hr/>:<></>}</li>
        </ul> */}

      <div className="nav-login-cart">
        <FaUser size={18} />
        {/* <Link to='login'><button>Iniciar Sesión</button></Link> */}
        {/* <Link to='Carrito'><img src={cart_icon} alt="" /></Link> */}
        <IoCartSharp size={18} />
        {/* <div className="nav-cart-count">
                0
            </div> */}
      </div>
    </div>
  );
};
