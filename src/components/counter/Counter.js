import React from "react";
import "./counter.scss";

export const Counter = ({ productNumber, setProductNumber }) => {
  const increment = () => {
    setProductNumber((productNumber) => productNumber + 1);
  };

  const decrement = () => {
    if (productNumber !== 1) {
      setProductNumber((productNumber) => productNumber - 1);
    }
  };

  return (
    <div className="counter">
      <button className="decrement" onClick={() => decrement()}>
        -
      </button>
      {productNumber}
      <button className="increment" onClick={() => increment()}>
        +
      </button>
    </div>
  );
};
