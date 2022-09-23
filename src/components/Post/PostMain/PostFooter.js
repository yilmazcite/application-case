import React from "react";
import { BiLike, BiComment, BiShareAlt, BiHeart } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { FaRetweet } from "react-icons/fa";

const PostFooter = ({ postChannel, postPublished }) => {
  const reactionQuantity = postPublished
    ? { like: "124", comment: "63", share: "4", seen: "1426" }
    : { like: "0", comment: "0", share: "0", seen: "0" };
  const postReactions =
    postChannel === "twitter" ? (
      <div>
        <span>
          <BiHeart /> {reactionQuantity.like}
        </span>
        <span>
          <FaRetweet /> {reactionQuantity.share}
        </span>
        <span>
          <BiComment /> {reactionQuantity.comment}
        </span>
        <span>
          <AiOutlineEye /> {reactionQuantity.seen}
        </span>
      </div>
    ) : (
      <div>
        <span>
          <BiLike /> {reactionQuantity.like}
        </span>
        <span>
          <BiComment /> {reactionQuantity.comment}
        </span>
        <span>
          <BiShareAlt /> {reactionQuantity.share}
        </span>
        <span>
          <AiOutlineEye /> {reactionQuantity.seen}
        </span>
      </div>
    );

  return <div>{postReactions}</div>;
};

export default PostFooter;
