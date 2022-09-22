import React from "react";
import PostDataContainer from "./PostMain/PostDataContainer";
import { postsData, datesOfPostPublication } from "../../data/extraData";

const Post = () => {
  const renderPosts = datesOfPostPublication.reverse().map((date, i) => {
    return (
      <div key={i}>
        <h1>{date}</h1>
        <div>
          {postsData.map((post) => {
            if (post.date === date) {
              return <PostDataContainer key={post.id} postData={post} />;
            }
          })}
        </div>
      </div>
    );
  });

  return <>{renderPosts}</>;
};

export default Post;
