import React, { useState } from "react";

const PostContent = ({ postMessage, postImage }) => {
  const [loadImage, setLoadImage] = useState(true);
  //import the default image from the assets and assign it to the second condition's src.

  return (
    <div>
      <p>{postMessage}</p>
      {loadImage ? (
        <img
          onError={() => setLoadImage(false)}
          src={postImage}
          alt="post visual"
        />
      ) : (
        <img src={postImage} alt="default image" />
      )}
    </div>
  );
};

export default PostContent;
