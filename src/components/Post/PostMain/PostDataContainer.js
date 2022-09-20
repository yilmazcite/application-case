import React from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostStatus from "../PostStatus/PostStatus";
import PostFooter from "./PostFooter";

/*import {
  postsStatus,
  postsHeaderContent,
  postsContent,
} from "../../../data/extraData";*/

const PostDataContainer = ({ postData }) => {
  /*
          {postsStatus.map((postStat, i) => {
          return <p key={i}>{postStat}</p>;
        })}
      </div>
      <div>
        {postsHeaderContent.map((post, i) => {
          return (
            <div key={i}>
              <h1>{post}</h1>
            </div>
          );
        })}
        {postsContent.map((post, i) => {
          return (
            <div key={i}>
              <h1>{post}</h1>
            </div>
          );
        })}
  
  */

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

  /*
  const postContent = postData.map((post, i) => {
    return (
      <PostContent key={i} postMessage={post.message} postImage={post.image} />
    );
  });
  

  const postHeader = postData.map((post, i) => {
    return (
      <PostHeader
        key={i}
        postDate={post.date}
        postPublished={post.isPublished}
      />
    );
  });

  const postStatus = postData.map((post, i) => {
    return (
      <PostStatus
        key={i}
        postStatus={post.status}
        postLink={post.link}
        postChannel={post.channel}
      />
    );
  });
   */

  return (
    <div>
      <div>{postStatus}</div>
      <div>
        {postHeader}
        {postContent}
        <PostFooter />
      </div>
    </div>
  );
};

export default PostDataContainer;
