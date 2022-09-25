import React from "react";

import { BiLike, BiComment, BiShareAlt, BiHeart } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { FaRetweet } from "react-icons/fa";

const PostReactions = ({ postChannel, postPublished }) => {
  const reactionQuantity = postPublished
    ? { like: "124", comment: "63", share: "4", seen: "1426" }
    : { like: "0", comment: "0", share: "0", seen: "0" };

  const iconStyle =
    "mr-[0.62rem] text-xl text-postDateIconsColor cursor-pointer";
  const iconSpanStyle = "flex flex-row items-center mr-[1.2rem]";

  const postReactions =
    postChannel === "twitter" ? (
      <div className="flex pt-1">
        <span className={iconSpanStyle}>
          <BiHeart className={iconStyle} />
          {reactionQuantity.like}
        </span>
        <span className={iconSpanStyle}>
          <FaRetweet className={iconStyle} />
          {reactionQuantity.share}
        </span>
        <span className={iconSpanStyle}>
          <BiComment className={iconStyle} />
          {reactionQuantity.comment}
        </span>
        <span className={iconSpanStyle}>
          <AiOutlineEye className={iconStyle} />
          {reactionQuantity.seen}
        </span>
      </div>
    ) : (
      <div className="flex pt-1">
        <span className={iconSpanStyle}>
          <BiLike className={iconStyle} />
          {reactionQuantity.like}
        </span>
        <span className={iconSpanStyle}>
          <BiComment className={iconStyle} />
          {reactionQuantity.comment}
        </span>
        <span className={iconSpanStyle}>
          <BiShareAlt className={iconStyle} />
          {reactionQuantity.share}
        </span>
        <span className={iconSpanStyle}>
          <AiOutlineEye className={iconStyle} />
          {reactionQuantity.seen}
        </span>
      </div>
    );

  return <>{postReactions}</>;
};

export default PostReactions;
