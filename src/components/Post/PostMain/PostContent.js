import React from "react";
//import { datesOfPostPublication, postsData } from "../../../data/extraData";

const PostContent = ({ postMessage, postImage }) => {
  return (
    <div>
      <p>{postMessage}</p>
      <img src={postImage} alt="post visual" />
    </div>
  );
};

export default PostContent;

/*

{postsContent.map((post, i) => {
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

const PostContent = () => {
  const postsSortedByContent = datesOfPostPublication.map((date) => {
    const postsContent = [];
    postsContent.push(date);
    postsData
      .filter((post) => post.date === date)
      .map((item) => postsContent.push([item.message, item.image]));
    console.log(postsContent, "postsContent");

    return postsContent.map((post, i) => {
      return (
        <div key={i} style={style}>
          <h1>{post}</h1>
        </div>
      );
    });
  });

  return <div>{postsSortedByContent}</div>;
};

export default PostContent;

*/
