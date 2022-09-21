import React from "react";
const PostHeader = ({ postDate, postPublished }) => {
  return (
    <div>
      {postDate}
      {postPublished}
    </div>
  );
};

export default PostHeader;
