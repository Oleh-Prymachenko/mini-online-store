import React from "react";

export const Price = ({ productNumber, productSize }) => {
  const finalSize = productSize === 1 ? productSize * 1 : productSize / 100;
  const amount = 200;

  return <div className="price">{productNumber * amount * finalSize} грн</div>;
};
