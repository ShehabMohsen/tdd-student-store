import * as React from "react";
import "./ProductDetail.css"
import ProductView from "../ProductView/ProductView";
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import axios from "axios"
export default function ProductDetail({handleAddItemToCart, handleRemoveItemToCart}) {
  const [product, setProduct] = useState(null)

  let params = useParams()

  console.log(product)
  useEffect(()=> {
    getProduct(params.productId)    
  }, [])

  async function getProduct(id){
    // const URL = `https://codepath-store-api.herokuapp.com/store/${id}` //codepath's url
    const URL = `http://localhost:3001/store/${id}`
    
    const responseData = await axios.get(URL).then((response) => {
      // return response.data.product; //using codepath's url
      return response.data;
    });
    console.log(responseData);
    setProduct(responseData);
  }

  return product ? (
    
    <div className="product-detail">
      <ProductView product={product} productId = {product.id} imgWidth = {400} imgHeight = {400} handleAddItemToCart = {handleAddItemToCart}
      handleRemoveItemToCart = {handleRemoveItemToCart}/>
    </div>
  ):(
    <h1>Loading...</h1>
  );
}
