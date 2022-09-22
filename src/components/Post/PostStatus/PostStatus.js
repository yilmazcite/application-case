import React from "react";
const PostStatus = ({ postStatus, postChannel, postLink }) => {
  console.log(postStatus, postChannel);

  return (
    <div>
      {postStatus}

      <a href={postLink}>{postChannel}</a>
    </div>
  );
};

export default PostStatus;
