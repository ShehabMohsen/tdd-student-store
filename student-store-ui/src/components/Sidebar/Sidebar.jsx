import * as React from "react"
import "./Sidebar.css"
import Navbar from "../Navbar/Navbar";

export default function Sidebar(props) {
  return (
    <section className="sidebar">
      <div className="side-nav" id="side-menu">
      <a href="#" className = "btn-close" onClick = {props.handleOnToggle}>&times;</a>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">Cart</a>
      </div>
    </section>
  )
}
