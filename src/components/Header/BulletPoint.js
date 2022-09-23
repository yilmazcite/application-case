import React from "react";

const BulletPoint = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill={color}>
      <circle cx="5" cy="5" r="5" />
    </svg>
  );
};

export default BulletPoint;
