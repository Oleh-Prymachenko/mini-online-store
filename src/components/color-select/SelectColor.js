import React, { useState } from "react";

import arrow from "../../assets/images/arrow.png";
import "./select.scss";
const options = [
  "желтый",
  "красный",
  "зеленный",
  "желтый",
  "красный",
  "зеленный",
  "желтый",
  "красный",
  "зеленный",
];
export const SelectColor = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionClicked = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header">
        <span>Цвет</span>
        <img
          src={arrow}
          onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        />
      </div>
      {isOpen && (
        <div className="dropdown">
          <div className="list">
            {options.map((option, idx) => (
              <div
                className="list-item"
                onClick={() => onOptionClicked(option)}
                key={idx}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
