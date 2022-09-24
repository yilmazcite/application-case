import React, { useState } from "react";
import noPostImage from "../../../assets/no-post-image/no-post-image.png";

const PostContent = ({ postMessage, postImage }) => {
  const [loadImage, setLoadImage] = useState(true);

  const index = postMessage.indexOf("http");
  const url = index !== -1 ? postMessage.slice(index) : undefined;
  const finalPostMessage = (
    <p className="break-words">
      {postMessage.slice(0, index)}
      <a href={url} target="blank">
        {url}
      </a>
    </p>
  );

  return (
    <div>
      {finalPostMessage}
      {loadImage ? (
        <img
          onError={() => setLoadImage(false)}
          src={postImage}
          alt="post visual"
        />
      ) : (
        <img src={noPostImage} alt="default visual" />
      )}
    </div>
  );
};

export default PostContent;
