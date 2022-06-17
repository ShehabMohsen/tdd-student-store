import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import Subnavbar from "../Subnavbar/Subnavbar";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useState} from "react";
import axios from "axios"

import "./App.css";

export default function App() {
  
  const URL = "https://codepath-store-api.herokuapp.com/store"
  const [products, setProducts]=useState([])

  // getting item data
  async function getData(){
    
    const responseData = await axios.get(URL).then((response)=>{
      return response.data.products
    })
    setProducts([...responseData]);
  }

  // executes the getData function as soon as it the component is mounted
  useEffect(()=>{
    getData();
  }, [])


  // getting item data
  async function getDataCategory(category){
    console.log(category)
    // category = event.target.value.toLowerCase()
    const responseData = await axios.get(URL).then((response)=>{
      return response.data.products
    })

    console.log("get", responseData)
    let array= []

    for (let i=0; i<responseData.length;i++){
      if (responseData[i].category==category) array.push(responseData[i])
    }
    
    setProducts(array)
  }

  console.log("products", products)
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          {/* <Banner/> */}
          <Sidebar />
          <Subnavbar />
          <Home products = {products} setProducts = {setProducts} getDataCategory = {getDataCategory}/>
        </main>
      </BrowserRouter>
    </div>
  );
}


