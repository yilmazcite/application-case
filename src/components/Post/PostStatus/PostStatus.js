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

  const postStatusColor = statusColorsData[postStatus].color;

  //temporary basic styling:
  const style = {
    backgroundColor: postStatusColor,
  };

  return (
    <div style={style}>
      <a href={postLink}>{socialMediaIcon}</a>
    </div>
  );
};

export default PostStatus;
