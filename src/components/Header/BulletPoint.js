import React from "react";

const BulletPoint = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill={color}>
      <circle cx="6" cy="6" r="6" />
    </svg>
  );
};

export default BulletPoint;
