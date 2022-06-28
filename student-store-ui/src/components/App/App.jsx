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
  const URL = "http://localhost:3001/store";
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  //array of objects -> each object have two attributes: itemId and quantity
  const [shoppingCart, setShoppingCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Items");
  const [checkoutForm, setCheckoutForm] = useState({
    name: "",
    email: "",
  });
  const [receipt, setReceipt] = useState(null);

  // getting item data
  async function getData() {
    const responseData = await axios.get(URL).then((response) => {
      return response.data.products;
    });
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
    categoryDisplay(category);
  }

  function categoryDisplay(category) {
    if (category == "clothing") setActiveCategory("Clothes");
    if (category == "food") setActiveCategory("Food");
    if (category == "tech") setActiveCategory("Tech");
    if (category == "accessories") setActiveCategory("Accessories");
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
    setActiveCategory("All Items");
    setProducts(array);
  }

  //makes the sidebar show up and disappear
  function handleOnToggle() {
    if (isOpen) {
      setIsOpen(false);
      document.querySelector("#side-menu").style.width = "0";
      document.querySelector(".home").style.marginRight = "0";
      document.querySelector(".cart-icon").style.marginRight = "inline";
      document.querySelector(".cart-icon").style.opacity = "1";
      document.querySelector(".search-icon").style.marginRight = "2px";
    }
    if (!isOpen) {
      setIsOpen(true);
      document.querySelector("#side-menu").style.width = "500px";
      document.querySelector(".home").style.marginRight = "500px";
      document.querySelector(".cart-icon").style.opacity = "0";
    }
  }

  //adding items to cart
  const handleAddItemToCart = (productId) => {
    // setReceipt(null)
    let newShoppingCart = [...shoppingCart];
    let temp = {
      itemId: productId,
      quantity: 1,
    };
    let isInArray = false;

    for (let i = 0; i < shoppingCart.length; i++) {
      if (newShoppingCart[i].itemId == productId) {
        newShoppingCart[i].quantity += 1;
        isInArray = true;
      }
    }
    if (isInArray == false) {
      setShoppingCart([...shoppingCart, temp]);
    } else setShoppingCart(newShoppingCart);
  };

  // removing items to cart
  const handleRemoveItemToCart = (productId) => {
    let newShoppingCart = [];
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        /* if item exists and its quantity more than one: create new object but subtract quantity
        then push to new array*/
        // to completely remove: simply don't push to the new array if quantity is less than 1
        if (shoppingCart[i].quantity > 1) {
          let temp = {
            itemId: shoppingCart[i].itemId,
            quantity: shoppingCart[i].quantity - 1,
          };
          newShoppingCart.push(temp);
        }
      } else newShoppingCart.push(shoppingCart[i]); //copy the rest of the elements into the cart
    }
    setShoppingCart(newShoppingCart);
  };
  console.log(shoppingCart);

  const handleOnCheckoutFormChange = (event) => {
    setCheckoutForm({
      ...checkoutForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmitCheckoutForm = async () => {
    // let url = "https://codepath-store-api.herokuapp.com/store" //codepath version

    try {
      const response = await axios.post("http://localhost:3001/store", {
        user: checkoutForm,
        shoppingCart: shoppingCart,
      });
      console.log("response", response);

      //updating states:

      setCheckoutForm({
        name: "",
        email: "",
      });
      setShoppingCart([]);
      setReceipt(response.data.newOrder);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar searchData={searchData} handleOnToggle={handleOnToggle} />
          {/* <Banner/> */}
          <Sidebar
            isOpen={isOpen}
            handleOnToggle={handleOnToggle}
            shoppingCart={shoppingCart}
            products={products}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            receipt = {receipt}
          />
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
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                  shoppingCart={shoppingCart}
                  activeCategory={activeCategory}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                />
              }
            />
            {/* <Route path="*" element={<NotFound />}/> */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
