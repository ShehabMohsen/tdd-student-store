import * as React from "react";
import "./Home.css";
import axios from "axios";
import "./Contact.css";
import "./About.css";

export default function Home({
  products,
  setProducts,
  getDataCategory,
  searchData,
  searchText,
  setSearchText,
}) {
  function handleOnTextChange(event) {
    searchData(event.target.value.toLowerCase());
  }

  return (
    <div className="home">

      <div className="temp">
        <div className="categories">
          <h2
            id="category1"
            onClick={() => {
              searchData("");
            }}
          >
            ALL CATEGORIES
          </h2>
          <h2
            onClick={() => {
              getDataCategory("clothing");
            }}
          >
            CLOTHES
          </h2>
          <h2
            onClick={() => {
              getDataCategory("food");
            }}
          >
            FOOD
          </h2>
          <h2
            onClick={() => {
              getDataCategory("accessories");
            }}
          >
            ACCESSORIES
          </h2>
          <h2
            onClick={() => {
              getDataCategory("tech");
            }}
          >
            TECH
          </h2>
        </div>

        <ul className="product-list">
          {products.map((element) => {
            return <DisplayProducts key={element.id} product={element} />;
            // return <img src={element.image} width={100} height={100}></img>
          })}
        </ul>
      </div>
      <div className="about">
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

      <div className="contact">
        <h2>Contact</h2>
        <p>Email: code@path.org</p>
        <p>Phone: 1-800-CODEPATH</p>
        <p>Address:123 Fake Street, San Francisco, CA</p>
        <p>socials: twitter, instagram</p>
      </div>
    </div>
  );
}

export function DisplayProducts({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        className="product-image"
        width={267}
        height={267}
      ></img>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
}
