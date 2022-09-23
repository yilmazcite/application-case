import React from "react";
import BulletPoint from "./BulletPoint";
import { statusColorsData } from "../../data/extraData";
import userProfilePicture from "../../assets/user-profile-picture/user-profile-picture.png";

const StatusBar = () => {
  const renderStatusInfo = statusColorsData.map((status) => {
    return (
      <div key={status.id}>
        <li>
          <BulletPoint color={status.color} />
          <span>{status.statusMessage}</span>
        </li>
      </div>
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
