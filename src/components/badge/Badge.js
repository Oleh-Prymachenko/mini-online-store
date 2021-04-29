import React, { useState } from "react";

import "./badge.scss";
import scales from "../../assets/images/btn-scales.png";
import done from "../../assets/images/btn-done.png";

export const Badge = () => {
  const [badgeOn, setBadgeOn] = useState(false);

  return (
    <button
      className="badge-container"
      onClick={() => (badgeOn ? setBadgeOn(false) : setBadgeOn(true))}
    >
      <img className="badge" alt="badge" src={badgeOn ? done : scales} />
    </button>
  );
};
