import * as React from "react";
import "./Sidebar.css";
import Navbar from "../Navbar/Navbar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
export default function Sidebar({
  isOpen,
  handleOnToggle,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) {
  return (
    <section className="sidebar">
      <div className="side-nav" id="side-menu">
        <a href="#" className="btn-close" onClick={handleOnToggle}>
          &times;
        </a>
        <ShoppingCart shoppingCart={shoppingCart} products={products} />

        <CheckoutForm checkoutForm = {checkoutForm} handleOnCheckoutFormChange = {handleOnCheckoutFormChange}
        handleOnSubmitCheckoutForm = {handleOnSubmitCheckoutForm}
        shoppingCart = {shoppingCart} isOpen = {isOpen}/>
      </div>
    </section>
  );
}
