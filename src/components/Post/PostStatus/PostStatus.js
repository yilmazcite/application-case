import React from "react";
const PostStatus = ({ postStatus, postChannel, postLink }) => {
  return (
    <>
      {postStatus}
      {postChannel}
      <a href={postLink}>Post Link</a>
    </>
  );
};

export default PostStatus;
