import React from "react";
import { months } from "../../../data/extraData";
import { BiTrash, BiBlock, BiCheck } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";

const PostHeader = ({ postDate, postPublished, postDateHour }) => {
  const dateSplit = postDate.split("-");
  const date = new Date(postDate);
  const month = months[date.getMonth()];
  const newDate = `${dateSplit[2]} ${month} ${dateSplit[0]}`;

  const postIsPublished = postPublished === true ? <BiCheck /> : <BiBlock />;

  const iconStyle = "ml-4 cursor-pointer";

  return (
    <div className="flex items-center justify-between text-postDateIconsColor">
      <p>
        {newDate} - {postDateHour}
      </p>
      <div className="flex text-xl mr-1">
        <span className={iconStyle}>{postIsPublished}</span>
        <span className={iconStyle}>
          <BiTrash />
        </span>
        <span className={iconStyle}>
          <CgMoreO />
        </span>
      </div>
    </div>
  );
};

export default PostHeader;
