import * as React from "react";
import "./CheckoutForm.css";
import { useState } from "react";

export default function CheckoutForm({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  receipt,
}) {
  const [isReceiptVisible, setIsReceiptVisible] = useState(false);

  function checkoutHandler() {
    handleOnSubmitCheckoutForm();
    setIsReceiptVisible(true);
  }
  console.log(receipt);

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
        type="text"
        name="name"
        placeholder="Student Name"
        value={checkoutForm.name}
        onChange={handleOnCheckoutFormChange}
      ></input>

      <button className="checkout-button" onClick={checkoutHandler}>
        Checkout
      </button>
      {isReceiptVisible && receipt && (
        <Receipt
          receipt={receipt}
          onReceiptHide={() => {
            setIsReceiptVisible(false);
          }}
        />
      )}
    </div>
  );
}

function Receipt(props) {
  return (
    <div className="receipt">
      <h1>Thank You For Your Business! </h1>

      {props.receipt.receipt.map((element, index) => {
        return <ItemDetails element = {element} key={index} />;
      })}

      <li>your total is: ${props.receipt.subTotal} tax included</li>
      <button onClick={props.onReceiptHide}>hide receipt</button>
    </div>
  );
}

function ItemDetails({ element }) {
  return (
    <li>
      {element.quantity} of {element.name} at a cost of {element.price} for a
      total of {element.price * element.quantity}
    </li>
  );
}
