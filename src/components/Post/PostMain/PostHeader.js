import React from "react";
import { months } from "../../../data/extraData";
import { BiTrash, BiBlock, BiCheck } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";

const PostHeader = ({ postDate, postPublished }) => {
  const dateSplit = postDate.split("-");
  const date = new Date(postDate);
  const month = months[date.getMonth()];
  const newDate = `${dateSplit[2]} ${month} ${dateSplit[0]}`;

  const postIsPublished = postPublished === true ? <BiCheck /> : <BiBlock />;

  return (
    <div>
      {newDate}
      {postPublished}
      <div>
        <span>{postIsPublished}</span>
        <span>
          <BiTrash />
        </span>
        <span>
          <CgMoreO />
        </span>
      </div>
    </div>
  );
};

export default PostHeader;
