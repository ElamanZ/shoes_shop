import React from "react";
import "./Product.scss";
import Card from "../../components/Card";

import cross2 from "./icons/cross2.svg";
import cross3 from "./icons/cross3.svg";

export default function ProductPage() {
  return (
    <div>
      <div className="container">
        <div className="product-block">
          <div className="title-product">
            <h1>Our Latest Product</h1>
            <p>
              Now that you have a ready strategy to move forward, it’s time to
              <br></br>come up with some ideas.
            </p>
          </div>
          <div className="sneakers">
            <Card />
            <Card />
            <Card />
            
          </div>
        </div>
      </div>
    </div>
  );
}
