import React from "react";

const Post = ({ p }) => {
  const { username, photo, caption, profileImage } = p;

  return (
    <div className="post w-full rounded-lg shadow-lg my-8">
      <div className="postWrapper p-4">
        <div className="postTop flex items-center justify-between">
          <div className="postTopLeft flex items-center">
            {/* <img className="w-12 h-12 rounded-full mr-4" src={profileImage} alt="" /> */}
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={
                profileImage ||
                "https://conservation-innovations.org/wp-content/uploads/2019/09/Dummy-Person.png"
              }
              alt=""
            />
            <span className="text-lg font-semibold">{username}</span>
            {/* <span className="text-sm">{date}</span> */}
          </div>
          <div className="postTopRight">{/* MoreVertIcon */}</div>
        </div>
        <div className="postCenter my-5">
          <span className="block mb-5">{caption}</span>
          <img className="w-full max-h-96 object-contain" src={photo} alt="" />
        </div>
        <div className="postBottom flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsDY_twtw7I4JChiQwdWKckyXI_Ec8iXFirbcepLQAA&s"
              alt=""
              className="w-6 h-6 cursor-pointer mr-2"
            />
            <img
              src="https://w7.pngwing.com/pngs/140/830/png-transparent-like-logo-facebook-like-button-facebook-like-button-computer-icons-like-miscellaneous-blue-text-thumbnail.png"
              alt=""
              className="w-6 h-6 cursor-pointer mr-2"
            />
            {/* <span className="text-base">{like} people like it</span> */}
          </div>
          <div>
            {/* <span className="cursor-pointer border-b border-dashed border-gray-400">{comment} comments</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
