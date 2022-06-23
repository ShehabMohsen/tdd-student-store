import { ProductCard } from "../ProductCard/ProductCard";
import * as React from "react";

export default function ProductView({
  product, productId, imgWidth, imgHeight,  handleAddItemToCart,
  handleRemoveItemToCart
}) {
  
  return (
    <div className="product-view">
      <ProductCard product={product} productId = {productId} imgWidth = {imgWidth} imgHeight = {imgHeight} handleAddItemToCart = {handleAddItemToCart}
      handleRemoveItemToCart = {handleRemoveItemToCart} showDescription={true}/>
    </div>
  );
}



