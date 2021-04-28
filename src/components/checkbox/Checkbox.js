import React, { useState } from "react";

import Input from "./Input";
import "./checkbox.scss";

const Checkbox = ({ setProductSize }) => {
  const [selected, setSelected] = useState("100");

  const handleCheckSize = (e) => {
    setProductSize(e.target.value);
    setSelected(e.target.value);
  };
  return (
    <div className="card-checkboxes">
      <form>
        <Input
          size="100"
          selected={selected}
          handleCheckSize={handleCheckSize}
        />
        <Input
          size="200"
          selected={selected}
          handleCheckSize={handleCheckSize}
        />
        <Input
          size="300"
          selected={selected}
          handleCheckSize={handleCheckSize}
        />
      </form>
    </div>
  );
};

export default Checkbox;
