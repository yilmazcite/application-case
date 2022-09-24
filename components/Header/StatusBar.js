import React from "react";
import BulletPoint from "./BulletPoint";
import { statusColorsData } from "../../data/extraData";
import userProfilePicture from "../../assets/user-profile-picture/user-profile-picture.png";

const StatusBar = () => {
  const renderStatusInfo = statusColorsData.map((status) => {
    return (
      <div key={status.id}>
        <li className="flex flex-row items-center">
          <BulletPoint color={status.color} />
          <span className="ml-[0.5rem] mr-[1.2rem]">
            {status.statusMessage}
          </span>
        </li>
      </div>
    );
  });

  return (
    <div className="flex flex-row justify-between mt-[2.3rem] mx-5">
      <h5 className="flex flex-row">{renderStatusInfo}</h5>
      <div>
        <img
          src={userProfilePicture}
          alt="user profile picture"
          className="mr-10 w-[4.3rem] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default StatusBar;
