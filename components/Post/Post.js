import React from "react";
import PostDataContainer from "./PostMain/PostDataContainer";
import { postsData, datesOfPostPublication } from "../../data/extraData";
import { months } from "../../data/extraData";
import StatusBar from "../Header/StatusBar";

const Post = () => {
  const renderPosts = datesOfPostPublication.reverse().map((date, i) => {
    const dateSplit = date.split("-");
    const dates = new Date(date);
    const month = months[dates.getMonth()];
    const newDate = `${dateSplit[2]} ${month} ${dateSplit[0]}`;

    return (
      //div BEFORE: className="w-3/4"
      //className="w-[15rem] h-[20]"
      <div key={i}>
        <h1>{newDate}</h1>
        <div className="flex flex-wrap">
          {postsData.map((post) => {
            if (post.date === date) {
              return <PostDataContainer key={post.id} postData={post} />;
            }
          })}
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col w-full ml-[3rem]">
      <StatusBar />
      <div>{renderPosts}</div>
    </div>
  );
};

export default Post;