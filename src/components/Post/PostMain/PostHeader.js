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

  return (
    <div className="flex items-center justify-between text-postDateIconsColor">
      <p>
        {newDate} - {postDateHour}
      </p>
      <div className="flex text-xl mr-1">
        <span className="ml-4 cursor-pointer">{postIsPublished}</span>
        <span className="ml-4 cursor-pointer">
          <BiTrash />
        </span>
        <span className="ml-4 cursor-pointer">
          <CgMoreO />
        </span>
      </div>
    </div>
  );
};

export default PostHeader;
