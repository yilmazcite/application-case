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
      <div className="flex">
        <span className="flex flex-row items-center mx-2">
          <BiHeart className="mr-1" /> {reactionQuantity.like}
        </span>
        <span className="flex flex-row items-center mx-2">
          <FaRetweet className="mr-1" /> {reactionQuantity.share}
        </span>
        <span className="flex flex-row items-center mx-2">
          <BiComment className="mr-1" /> {reactionQuantity.comment}
        </span>
        <span className="flex flex-row items-center mx-2">
          <AiOutlineEye className="mr-1" /> {reactionQuantity.seen}
        </span>
      </div>
    ) : (
      <div className="flex">
        <span className="flex flex-row items-center mx-2">
          <BiLike className="mr-1" /> {reactionQuantity.like}
        </span>
        <span className="flex flex-row items-center mx-2">
          <BiComment className="mr-1" /> {reactionQuantity.comment}
        </span>
        <span className="flex flex-row items-center mx-2">
          <BiShareAlt className="mr-1" /> {reactionQuantity.share}
        </span>
        <span className="flex flex-row items-center mx-2">
          <AiOutlineEye className="mr-1" /> {reactionQuantity.seen}
        </span>
      </div>
    );

  return <div>{postReactions}</div>;
};

export default PostReactions;
