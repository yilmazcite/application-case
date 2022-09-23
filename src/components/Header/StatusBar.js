import React from "react";
import { statusColorsData } from "../../data/extraData";
import userProfilePicture from "../../assets/user-profile-picture/user-profile-picture.png";

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
      <h5>{renderStatusInfo}</h5>
      <div>
        <img src={userProfilePicture} alt="user profile picture" />
      </div>
    </div>
  );
};

export default StatusBar;
