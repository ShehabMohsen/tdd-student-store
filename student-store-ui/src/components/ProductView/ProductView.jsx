import { ProductCard } from "../ProductCard/ProductCard";
import * as React from "react";

export default function ProductView(props) {
  
  return (
    <div className="product-view">
      <ProductCard {...props} showDescription={true}/>
    </div>
  );
}



