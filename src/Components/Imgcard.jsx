import React from "react";

const Imgcard = ({ urls, likes, user }) => {
  return (
    <div className="img_div">
      <img src={urls.regular} />
      <div className="img_info">
        <h5>Likes :{likes}</h5>
        <img src={user.profile_image.small} />
      </div>
    </div>
  );
};
export default Imgcard;

// href={user.links.self}
