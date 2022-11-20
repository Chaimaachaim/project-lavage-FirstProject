import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css"
const Nav =()=>{
  const [color, setColor]=useState(false);

  const changeColor=()=>{
   if (window.scrollY >=90){
    setColor(true);
   }else{
    setColor(false);
   }
  }
  window.addEventListener('scroll',changeColor)
    return(
        <div className={color ?"  navbar-scroll" :"navbar"} >
<div className="logo">
<h1 >LVG DZ </h1></div>
          <div className="links">
            <Link className="link"  to="/">Home</Link>
             <Link className="link" to="About">About</Link>
             <Link className="link" to="services">Services</Link>
             <Link className="link" to="contact">Contact</Link>
          </div>

        </div>
    )
}
export default Nav; 