import * as React from "react";
import "./Home.css";
import axios from "axios";
import "./Contact.css";
import "./About.css";
import ProductGrid from "../ProductGrid/ProductGrid";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";

export default function Home({
  products,
  setProducts,
  getDataCategory,
  searchData,
  searchText,
  setSearchText,
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
  activeCategory,
}) {
  return (
    <div className="home">
      <Hero />

      <div className="categories">
        <ul className="categories-list">
          <li
            id="category1"
            onClick={() => {
              searchData("");
            }}
          >
            ALL CATEGORIES
          </li>
          <li
            onClick={() => {
              getDataCategory("clothing");
            }}
          >
            CLOTHES
          </li>
          <li
            onClick={() => {
              getDataCategory("food");
            }}
          >
            FOOD
          </li>
          <li
            onClick={() => {
              getDataCategory("accessories");
            }}
          >
            ACCESSORIES
          </li>
          <li
            onClick={() => {
              getDataCategory("tech");
            }}
          >
            TECH
          </li>
        </ul>
      </div>

      <h1>{activeCategory}</h1>
      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        shoppingCart={shoppingCart}
        activeCategory={activeCategory}
      />

      <div className="about" id="About">
        <h2>About</h2>
        <p>
          The codepath student store offers great products at great prices from
          a great team and for a great cause. We've searched far and wide for
          items that perk the interests of even the most eccentric students and
          decided to offer them all here in one place. All proceeds go towards
          bringing high quality CS education to college students around the
          country.
        </p>
      </div>

      <div className="contact" id="Contact">
        <h2>Contact</h2>
        <p>Email: code@path.org</p>
        <p>Phone: 1-800-CODEPATH</p>
        <p>Address:123 Fake Street, San Francisco, CA</p>
        <p>socials: twitter, instagram</p>
      </div>
    </div>
  );
}
