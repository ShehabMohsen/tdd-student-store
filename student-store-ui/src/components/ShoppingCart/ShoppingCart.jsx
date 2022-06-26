import * as React from "react";
import "./ShoppingCart.css";
export default function ShoppingCart({ products, shoppingCart }) {
  let subTotal = 0;
  let name;
  let price;
  let totalPrice;
  function findItemInfo(products, id, quantity) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        name = products[i].name;
        price = products[i].price;
        totalPrice = products[i].price * quantity;
        subTotal += totalPrice;
        return;
      }
    }
  }

  return (
    <div className="shopping-cart">
      <h1>Your Cart</h1>
      <div className="cart-table">
        <div className="header-row">
          <h3 className="flex-2">Name</h3>
          <h3 className="center">Quantity</h3>
          <h3 className="center">Unit Price</h3>
          <h3 className="center">Cost</h3>
        </div>
        {shoppingCart.map((element, index) => {
          findItemInfo(
            products,
            element.itemId,
            element.quantity
          )

          return(
            <div className="product-row" key = {index}>
              <span className="flex cart-product-name">{name}</span>
              <span className="center cart-product-quantity">
                {element.quantity}
              </span>
              <span className="center cart-product-price">${price}</span>
              <span className="center cart-product-subtotal">
                ${totalPrice}
              </span>
            </div>
          );
        })}

        <div className="receipt">
          <div className="receipt-subtotal">
            <h3 className="label">Subtotal</h3>
            <span></span>
            <span></span>
            <h3 className="center subtotal">${subTotal.toFixed(2)}</h3>
          </div>
          <div className="receipt-taxes">
            <h3 className="label">Taxes and Fees</h3>
            <span></span>
            <span></span>
            <h3 className="center">${(subTotal * 0.09).toFixed(2)}</h3>
          </div>
          <div className="receipt-total">
            <h3 className="label">Total</h3>
            <span></span>
            <span></span>
            <h3 className="center total-price">
              ${(subTotal + subTotal *  0.0875).toFixed(2)}
            </h3>
          </div>
        
        </div>
      </div>

      
    </div>
  );
}
