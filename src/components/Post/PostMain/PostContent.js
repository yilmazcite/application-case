import React from "react";

const PostContent = ({ postMessage, postImage }) => {
  return (
    <div>
      <p>{postMessage}</p>
      <img src={postImage} alt="post visual" />
    </div>
  );
};

export default PostContent;
