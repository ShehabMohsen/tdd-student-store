import * as React from "react"
import "./Sidebar.css"
import Navbar from "../Navbar/Navbar";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="side-nav" id="side-menu">
      <a href="#" className = "btn-close" onClick = {() => {
        document.querySelector("#side-menu").style.width = "0";
        document.querySelector(".home").style.marginRight = "0";
        document.querySelector(".cart-icon").style.marginRight = "inline";
        document.querySelector(".cart-icon").style.opacity="1";
        document.querySelector(".search-icon").style.marginRight="2px";
      }}>&times;</a>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">Cart</a>
      </div>
    </section>
  )
}
