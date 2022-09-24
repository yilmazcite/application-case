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

  console.log(postPublished, "postPublished");

  return (
    <div className="flex items-center justify-between mx-8">
      <p>
        {newDate} - {postDateHour}
      </p>
      <div className="flex">
        <span className="ml-2">{postIsPublished}</span>
        <span className="ml-2">
          <BiTrash />
        </span>
        <span className="ml-2">
          <CgMoreO />
        </span>
      </div>
    </div>
  );
};

export default PostHeader;
