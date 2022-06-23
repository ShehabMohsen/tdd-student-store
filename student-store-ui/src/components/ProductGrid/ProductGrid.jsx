import * as React from "react";
import { ProductCard } from "../ProductCard/ProductCard";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  return (
    <div className="product-grid" id="shop">
      {products.map((element) => {
        return <ProductCard key={element.id} product={element} handleAddItemToCart = {handleAddItemToCart}
        handleRemoveItemToCart  = {handleRemoveItemToCart}/>;
      })}
    </div>
  );
}
