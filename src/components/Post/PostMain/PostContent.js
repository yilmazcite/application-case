import React, { useState } from "react";
import noPostImage from "../../../assets/no-post-image/no-post-image.png";

const PostContent = ({ postMessage, postImage }) => {
  const [loadImage, setLoadImage] = useState(true);

  const index = postMessage.indexOf("http");
  const url = index !== -1 ? postMessage.slice(index) : undefined;
  const finalPostMessage = (
    <p className="break-words font-bold text-[0.95rem] text-postMessageColor">
      {postMessage.slice(0, index)}
      <a href={url} target="blank" className="text-[#80c2f0] hover:underline">
        {url}
      </a>
    </p>
  );
  const imgStyle = "border border-[#e0e1e7] my-4 w-[19.75rem] h-[18rem]";

  return (
    <div className="mt-5">
      {finalPostMessage}
      {loadImage ? (
        <img
          className={imgStyle}
          onError={() => setLoadImage(false)}
          src={postImage}
          alt="post visual"
        />
      ) : (
        <img className={imgStyle} src={noPostImage} alt="visual not found" />
      )}
    </div>
  );
};

export default PostContent;
