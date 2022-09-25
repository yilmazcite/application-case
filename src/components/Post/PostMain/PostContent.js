import React, { useState } from "react";
import noPostImage from "../../../assets/no-post-image/no-post-image.png";

const PostContent = ({ postMessage, postImage }) => {
  const [loadImage, setLoadImage] = useState(true);

  const index = postMessage.indexOf("http");
  const url = index !== -1 ? postMessage.slice(index) : undefined;
  const finalPostMessage = (
    <p className="break-words font-bold text-postMessageColor">
      {postMessage.slice(0, index)}
      <a href={url} target="blank" className="text-[#80c2f0] hover:underline">
        {url}
      </a>
    </p>
  );

  return (
    <div className="mt-5">
      {finalPostMessage}
      {loadImage ? (
        <img
          className="border border-[#e0e1e7] my-4 w-[19.75rem] h-[18rem]"
          onError={() => setLoadImage(false)}
          src={postImage}
          alt="post visual"
        />
      ) : (
        <img
          className="border border-[#e0e1e7] my-4 w-[19.75rem] h-[18rem]"
          src={noPostImage}
          alt="default visual"
        />
      )}
    </div>
  );
};

export default PostContent;
