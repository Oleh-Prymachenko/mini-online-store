import React, { useState } from "react";

import { SelectColor } from "./color-select/SelectColor";
import { Badge } from "./badge/Badge";
import { Counter } from "./counter/Counter";
import { Price } from "./price/price";

import Checkbox from "./checkbox/Checkbox";

const Card = ({ product, productActive }) => {
  const [productNumber, setProductNumber] = useState(1);
  const [productSize, setProductSize] = useState(1);
  const [isOnPhoto, setIsOnPhoto] = useState(false);

  const productPhoto = isOnPhoto ? "product-photo:hover" : "product-photo";
  return (
    <div className="card">
      <div className="card-header">
        <button className="btn-new">new</button>
        <img
          className={productPhoto}
          src={isOnPhoto ? productActive : product}
          onMouseOver={() => setIsOnPhoto(true)}
          onMouseOut={() => setIsOnPhoto(false)}
        />
        <Badge />
      </div>
      <div className="card-main">
        <h2 className="card-title">Шампунь</h2>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
        <div className="card-info-header">
          <SelectColor />
          <Price productNumber={productNumber} productSize={productSize} />
        </div>
        <Checkbox productSize={productSize} setProductSize={setProductSize} />
        <div className="card-info-footer">
          <Counter
            productNumber={productNumber}
            setProductNumber={setProductNumber}
          />
          <button className="btn-buy">Купить</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
