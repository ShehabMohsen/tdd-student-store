import * as React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar" color="red">
      <p>Shopify</p>
      <div className="content">
        <ul className="links">
          <li className="link-btn"> Home</li>
          <li className="link-btn">Shop</li>
          <li className="link-btn">Contact Us</li>
          <li className="link-btn">About Us</li>
        </ul>
      </div>
      <svg
        className="cart-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
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
    </nav>
  );
}
