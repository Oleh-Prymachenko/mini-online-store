import React, { useState } from "react";

import scales from "../../assets/images/btn-scales.png";
import done from "../../assets/images/btn-done.png";

export const Badge = ({}) => {
  const [badgeOn, setBadgeOn] = useState(false);

  return (
    <button
      className="badge-container"
      onClick={() => (badgeOn ? setBadgeOn(false) : setBadgeOn(true))}
    >
      <img className="badge" src={badgeOn ? done : scales} />
    </button>
  );
};
