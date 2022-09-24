import React from "react";
import { statusColorsData } from "../../../data/extraData";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const PostStatus = ({ postStatus, postChannel, postLink }) => {
  const socialMediaIcon =
    postChannel === "facebook" ? (
      <FaFacebookF color="#fff" />
    ) : postChannel === "twitter" ? (
      <FaTwitter color="#fff" />
    ) : postChannel === "instagrambusiness" ? (
      <FaInstagram color="#fff" />
    ) : undefined;

  return (
    <div
      style={{ backgroundColor: statusColorsData[postStatus].color }}
      className="h-full flex items-center px-1 rounded-l-xl"
    >
      <a href={postLink}>{socialMediaIcon}</a>
    </div>
  );
};

export default PostStatus;
