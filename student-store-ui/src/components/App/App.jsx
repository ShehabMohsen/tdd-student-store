import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useState} from "react";
import axios from "axios"

import "./App.css";

export default function App() {
  
  const URL = "https://codepath-store-api.herokuapp.com/store"
  const [products, setProducts]=useState([])
  const [searchText, setSearchText] = useState("")


  // getting item data
  async function getData(){
    
    const responseData = await axios.get(URL).then((response)=>{
      return response.data.products
    })
    console.log("response data",responseData)
    setProducts([...responseData]);

  }

  // executes the getData function as soon as it the component is mounted
  useEffect(()=>{
    getData();
  }, [])


  // getting item data
  async function getDataCategory(category){
    // category = event.target.value.toLowerCase()
    const responseData = await axios.get(URL).then((response)=>{
      return response.data.products
    })

    let array= []

    for (let i=0; i<responseData.length;i++){
      if (responseData[i].category==category) array.push(responseData[i])
    }
    
    setProducts(array)
  }

  async function searchData(value){
    const responseData = await axios.get(URL).then((response)=>{
      return response.data.products
    })

    
    let array = [];
    for (let i=0; i<responseData.length;i++){
      let itemName = responseData[i].name.toLowerCase();
      if (itemName.includes(value)) array.push(responseData[i])
    }
    setProducts(array)  
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar searchData = {searchData}/>
          {/* <Banner/> */}
          <Sidebar />
          <Home products = {products} setProducts = {setProducts} 
          getDataCategory = {getDataCategory} 
          searchText = {searchText} setSearchText = {searchText}/>
        </main>
      </BrowserRouter>
    </div>
  );
}


