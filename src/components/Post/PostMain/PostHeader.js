import React from "react";
//import { datesOfPostPublication, postsData } from "../../../data/extraData";

const PostHeader = ({ postDate, postPublished }) => {
  return (
    <div>
      {postDate}
      {postPublished}
    </div>
  );
};

export default PostHeader;

/*


      {postsHeaderContent.map((post, i) => {
        return (
          <div key={i}>
            <h1>{post}</h1>
          </div>
        );
      })}

 */
/*
import React from "react";
import { datesOfPostPublication, postsData } from "../../../data/extraData";

const PostHeader = () => {
  const postsSortedByHeaderContent = datesOfPostPublication.map((date) => {
    const postsHeaderContent = [];
    postsData
      .filter((post) => post.date === date)
      .map((item) => postsHeaderContent.push([item.date]));
    console.log(postsHeaderContent, "postHeaderContent");

    return postsHeaderContent.map((post, i) => {
      return (
        <div key={i}>
          <h1>{post}</h1>
        </div>
      );
    });
  });

  return <div>{postsSortedByHeaderContent}</div>;
};

export default PostHeader;

*/
