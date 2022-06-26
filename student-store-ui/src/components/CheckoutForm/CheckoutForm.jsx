import * as React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) {
  return (
    <div className="checkout-form">
        <input
  
          type="email"
          name="email"
          value={checkoutForm.email}
          className="checkout-form-input"
          placeholder="student@codepath.org"
          onChange={handleOnCheckoutFormChange}
        ></input>
      <input
        className="checkout-form-input"
        type = "text"
        name = "name"
        placeholder="Student Name"
        value = {checkoutForm.name}
        onChange={handleOnCheckoutFormChange}
      ></input>

      <button className="checkout-button" onClick = {handleOnSubmitCheckoutForm}>Checkout</button>
    </div>
  );
}
