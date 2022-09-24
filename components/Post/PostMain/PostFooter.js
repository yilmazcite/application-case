import React from "react";
import PostReactions from "./PostReactions";

const PostFooter = ({ postChannel, postPublished }) => {
  return (
    <div>
      <PostReactions postChannel={postChannel} postPublished={postPublished} />
    </div>
  );
};

export default PostFooter;
