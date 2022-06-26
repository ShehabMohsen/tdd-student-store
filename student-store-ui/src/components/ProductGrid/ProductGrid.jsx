import * as React from "react";
import { ProductCard } from "../ProductCard/ProductCard";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
  activeCategory
}) {

  function computeQuantity(id){
    for (let i = 0; i < shoppingCart.length; i++){
      if (shoppingCart[i].itemId == id) return shoppingCart[i].quantity
    }
  }

  return (
      // <h2>{activeCategory}</h2>
    <div className="product-grid" id="shop">
      {products.map((element) => {
        return <ProductCard key={element.id} product={element} handleAddItemToCart = {handleAddItemToCart}
        handleRemoveItemToCart  = {handleRemoveItemToCart} quantity = {computeQuantity(element.id)}/>;
      })}
    </div>
  );
}
