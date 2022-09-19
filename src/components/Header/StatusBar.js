import React from "react";
import { statusColorsData } from "../../data/extraData";

const StatusBar = () => {
  const renderStatusInfo = statusColorsData.map((status) => {
    return (
      <ul key={status.id}>
        <li>
          <span>{status.color}</span>
          <span>{status.statusMessage}</span>
        </li>
      </ul>
    );
  });

  return (
    <div>
      <h3>{renderStatusInfo}</h3>
      <div>
        <img alt="img-taken-from-assets" />
        <p>Image</p>
      </div>
    </div>
  );
};

export default StatusBar;
