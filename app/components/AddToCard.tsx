"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => alert("Product added to cart!")}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
