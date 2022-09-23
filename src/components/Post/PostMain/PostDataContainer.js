import React from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostStatus from "../PostStatus/PostStatus";
import PostFooter from "./PostFooter";

const PostDataContainer = ({ postData }) => {
  const postContent = (
    <PostContent postMessage={postData.message} postImage={postData.image} />
  );

  const postHeader = (
    <PostHeader postDate={postData.date} postPublished={postData.isPublished} />
  );

  const postStatus = (
    <PostStatus
      postStatus={postData.status}
      postLink={postData.link}
      postChannel={postData.channel}
    />
  );

  const postFooter = (
    <PostFooter
      postChannel={postData.channel}
      postPublished={postData.isPublished}
    />
  );

  return (
    <div>
      <div>{postStatus}</div>
      <div>
        {postHeader}
        {postContent}
        {postFooter}
      </div>
    </div>
  );
};

export default PostDataContainer;
