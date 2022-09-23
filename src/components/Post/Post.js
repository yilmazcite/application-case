import React from "react";
import PostDataContainer from "./PostMain/PostDataContainer";
import { postsData, datesOfPostPublication } from "../../data/extraData";
import { months } from "../../data/extraData";

const Post = () => {
  const renderPosts = datesOfPostPublication.reverse().map((date, i) => {
    const dateSplit = date.split("-");
    const dates = new Date(date);
    const month = months[dates.getMonth()];
    const newDate = `${dateSplit[2]} ${month} ${dateSplit[0]}`;

    return (
      <div key={i}>
        <h1>{newDate}</h1>
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
