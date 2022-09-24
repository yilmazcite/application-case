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
    <PostHeader
      postDate={postData.date}
      postDateHour={postData.dateHour}
      postPublished={postData.isPublished}
    />
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
    // w-fit BEFORE
    <div className="flex border rounded-xl mb-3 mx-3 w-[20rem] h-[30rem]">
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
