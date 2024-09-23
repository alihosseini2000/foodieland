import React from "react";
import Cart from "../cart/Cart";

function Recipes() {
  return (
    <div className="mx-16">
      <div className="font-george flex justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold py-8">Simple and tasty recipes</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>
      </div>
      <Cart />
    </div>
  );
}

export default Recipes;
