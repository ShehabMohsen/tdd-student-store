import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductView from "../ProductView/ProductView";
import ProductDetail from "../ProductDetail/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import "./App.css";

export default function App() {
  const URL = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  //array of objects -> each object have two attributes: itemId and quantity
  const [shoppingCart, setShoppingCart] = useState([]);

  // getting item data
  async function getData() {
    const responseData = await axios.get(URL).then((response) => {
      return response.data.products;
    });
    console.log("response data", responseData);
    setProducts([...responseData]);
  }
  // executes the getData function as soon as it the component is mounted
  useEffect(() => {
    getData();
  }, []);

  // getting item data
  async function getDataCategory(category) {
    // category = event.target.value.toLowerCase()
    const responseData = await axios.get(URL).then((response) => {
      return response.data.products;
    });

    let array = [];

    for (let i = 0; i < responseData.length; i++) {
      if (responseData[i].category == category) array.push(responseData[i]);
    }

    setProducts(array);
  }

  async function searchData(value) {
    const responseData = await axios.get(URL).then((response) => {
      return response.data.products;
    });

    let array = [];
    for (let i = 0; i < responseData.length; i++) {
      let itemName = responseData[i].name.toLowerCase();
      if (itemName.includes(value)) array.push(responseData[i]);
    }
    setProducts(array);
  }

  function handleOnToggle() {}

  const handleAddItemToCart = (productId)=> {
    let newShoppingCart = shoppingCart
    let temp  = {
      itemId: productId,
      quantity: 1
    }
    let isInArray = false

    for (let i = 0; i < shoppingCart.length; i++) {
      if (newShoppingCart[i].itemId == productId){
        newShoppingCart[i].quantity += 1;
        isInArray = true
      } 
    }
    if (isInArray == false){
      setShoppingCart([...shoppingCart, temp])
    }
    else setShoppingCart(newShoppingCart)
  }
  
  const handleRemoveItemToCart  = (productId)=> {
    let newShoppingCart = []
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId){
        /* if item exists and its quantity more than one: create new object but subtract quantity
        then push to new array*/
        // to completely remove: simply don't push to the new array if quantity is less than 1
        if (shoppingCart[i].quantity > 1){
          let temp  = {
            itemId: shoppingCart[i].itemId,
            quantity: shoppingCart[i].quantity - 1
          }
          newShoppingCart.push(temp)
        }
      }
      else newShoppingCart.push(shoppingCart[i]) //copy the rest of the elements into the cart
    }
    
    setShoppingCart(newShoppingCart)
  }
  
  console.log(shoppingCart)
  
  function handleOnCheckoutFormChange() {}

  function handleOnSubmitCheckoutForm() {}

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar searchData={searchData} />
          {/* <Banner/> */}
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  setProducts={setProducts}
                  getDataCategory={getDataCategory}
                  searchText={searchText}
                  setSearchText={searchText}
                  searchData={searchData}
                  handleAddItemToCart = {handleAddItemToCart}
                  handleRemoveItemToCart  = {handleRemoveItemToCart}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail handleAddItemToCart={handleAddItemToCart} 
                handleRemoveItemToCart  = {handleRemoveItemToCart}/>
              }
            />
            {/* <Route path="*" element={<NotFound />}/> */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
