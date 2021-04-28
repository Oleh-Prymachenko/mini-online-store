import React from "react";

const Input = ({ size, selected, handleCheckSize }) => {
  return (
    <div className="checkbox">
      <input
        type="radio"
        value={size}
        checked={selected === size}
        onChange={(e) => handleCheckSize(e)}
        name="size"
        className="check"
      />
      <label>{size} мл</label>
    </div>
  );
};
export default Input;
