import * as React from "react";
import "./Navbar.css";
import { Link} from "react-router-dom";
export default function Navbar({searchData}) {
  function handleOnTextChange(event) {
    searchData(event.target.value.toLowerCase());
  }

  return (
    <nav className="navbar" color="red">
    <Link to = "/"> <p>Shopify</p></Link>
      <div className="content">
        <ul className="links">
          <li className="link-btn"><a href="/">Home</a></li>
          <li className="link-btn"><a href="/#shop">Shop</a></li>
          <li className="link-btn"><a href = "/#Contact">Contact Us</a></li>
          <li className="link-btn"><a href = "/#About">About Us</a></li>
        </ul>
      </div>

      <input
        id="search-input"
        type="text"
        placeholder="Search"
        onChange={handleOnTextChange}
      >
      </input>
      <label htmlFor = "search-input">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="search-icon"
          width="38"
          height="38"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="black"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path strokeWidth="none" fill="none" />
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
        </label>
      <a href="#" onClick = {()=>{
          document.querySelector("#side-menu").style.width = "400px";
          document.querySelector(".home").style.marginRight = "400px";
          document.querySelector(".cart-icon").style.opacity="0";
          // document.querySelector(".navbar-nav").style.marginRight = "400px";
          // document.querySelector("#search-input").style.marginRight="400px";
          // document.querySelector(".search-icon").style.marginRight="360px";
        }}>
      

      <svg
        className="cart-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" />
      </svg>
      </a>
    </nav>
  );
}
