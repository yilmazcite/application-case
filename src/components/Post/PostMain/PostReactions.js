import React from "react";

import { BiLike, BiComment, BiShareAlt, BiHeart } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { FaRetweet } from "react-icons/fa";

const PostReactions = ({ postChannel, postPublished }) => {
  const reactionQuantity = postPublished
    ? { like: "124", comment: "63", share: "4", seen: "1426" }
    : { like: "0", comment: "0", share: "0", seen: "0" };
  const postReactions =
    postChannel === "twitter" ? (
      <div className="flex pt-1">
        <span className="flex flex-row items-center mr-[1.2rem]">
          <BiHeart className="mr-[0.62rem] text-xl text-postDateIconsColor cursor-pointer" />
          {reactionQuantity.like}
        </span>
        <span className="flex flex-row items-center mr-[1.2rem]">
          <FaRetweet className="mr-[0.62rem] text-xl text-postDateIconsColor cursor-pointer" />
          {reactionQuantity.share}
        </span>
        <span className="flex flex-row items-center mr-[1.2rem]">
          <BiComment className="mr-[0.62rem] text-xl text-postDateIconsColor cursor-pointer" />
          {reactionQuantity.comment}
        </span>
        <span className="flex flex-row items-center mr-[1.2rem]">
          <AiOutlineEye className="mr-[0.62rem] text-xl text-postDateIconsColor cursor-pointer" />
          {reactionQuantity.seen}
        </span>
      </div>
    ) : (
      <div className="flex pt-1">
        <span className="flex flex-row items-center mr-[1.2rem]">
          <BiLike className="mr-[0.62rem] text-xl text-postDateIconsColor cursor-pointer" />{" "}
          {reactionQuantity.like}
        </span>
        <span className="flex flex-row items-center mr-[1.2rem]">
          <BiComment className="mr-[0.62rem] text-xl text-postDateIconsColor cursor-pointer" />
          {reactionQuantity.comment}
        </span>
        <span className="flex flex-row items-center mr-[1.2rem]">
          <BiShareAlt className="mr-[0.62rem] text-xl text-postDateIconsColor cursor-pointer" />
          {reactionQuantity.share}
        </span>
        <span className="flex flex-row items-center mr-[1.2rem]">
          <AiOutlineEye className="mr-[0.62rem] text-xl text-postDateIconsColor cursor-pointer" />
          {reactionQuantity.seen}
        </span>
      </div>
    );

  return <div>{postReactions}</div>;
};

export default PostReactions;
