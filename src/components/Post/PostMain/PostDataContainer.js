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
    <div className="flex border border-[#e0e1e7] bg-[#fff] rounded-md mb-3 ml-3 mr-[1.5rem] w-[25.5rem] h-fit">
      <div>{postStatus}</div>
      <div className="px-[1.25rem] pt-[1.6rem] pb-[1.8rem]">
        {postHeader}
        {postContent}
        {postFooter}
      </div>
    </div>
  );
};

export default PostDataContainer;
