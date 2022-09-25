import React from "react";
import PostReactions from "./PostReactions";

const PostFooter = ({ postChannel, postPublished }) => {
  return (
    <>
      <PostReactions postChannel={postChannel} postPublished={postPublished} />
    </>
  );
};

export default PostFooter;
