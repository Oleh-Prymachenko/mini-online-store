import React, { useState } from "react";

import Card from "./components/Card";
import "./App.scss";
import product1 from "./assets/images/product-1.png";
import product2 from "./assets/images/product-2.png";
import product3 from "./assets/images/product-3.png";

import product1Active from "./assets/images/product-1-active.png";
import product2Active from "./assets/images/product-2-active.png";
import product3Active from "./assets/images/product-3-active.png";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Card product={product1} productActive={product1Active} />
        <Card product={product2} productActive={product2Active} />
        <Card product={product3} productActive={product3Active} />
      </div>
    </div>
  );
}

export default App;
