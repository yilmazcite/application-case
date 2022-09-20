import React from "react";
//import { datesOfPostPublication, postsData } from "../../../data/extraData";

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

/*

import React from "react";
import { datesOfPostPublication, postsData } from "../../../data/extraData";

const PostStatus = () => {
  const postsSortedByStatus = datesOfPostPublication.map((date) => {
    const postsStatus = [];
    postsData
      .filter((post) => post.date === date)
      .map((item) => postsStatus.push([item.status, item.link, item.channel]));

    console.log(postsStatus, "postsStatus");
    return postsStatus.map((postStat, i) => {
      return <p key={i}>{postStat}</p>;
    });
  });

  return <>{postsSortedByStatus}</>;
};

export default PostStatus;


*/
