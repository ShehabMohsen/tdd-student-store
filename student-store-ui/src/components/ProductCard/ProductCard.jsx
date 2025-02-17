import * as React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"
export function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
  imgWidth = 267,
  imgHeight = 267,
}) {
  return (
    <div className="product-card">
    <Link className="media" to={`/products/${product.id}`} product={product} id={product.id}>
        <img
          src={product.image}
          className="product-image"
          width={imgWidth}
          height={imgHeight}
        ></img>
    </Link>
        <div className="product-info" width={imgWidth}
          height={imgHeight}>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price}</p>
          {showDescription ? <p className="product-description">{product.description}</p> : ""}
        </div>

        <div className="actions">
          <div className="buttons">
            <button className = "add"  onClick = {()=>{handleAddItemToCart(product.id)}}>
            <i className="material-icons">add</i>
            </button>
            <button className = "remove" onClick = {()=>{handleRemoveItemToCart(product.id)}}>
            <i className="material-icons">remove</i>
            </button>
            <span className="quantity">{quantity}</span>
          </div>
        </div>
      </div>
  );
}
