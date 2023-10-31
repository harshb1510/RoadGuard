import React from 'react'

const Post = ({p}) => {

  const { username, photo, caption, profileImage } = p

  return (
    <>
    <div className="postTop flex items-center justify-between">
            <div className="postTopLeft flex items-center">
              <img
                className="postProfileImg w-8 h-8 rounded-full"
                src={profileImage}
                alt=""
              />
              <span className="postUsername text-lg font-semibold">
                {username}
              </span>
            </div>
            <div className="postTopRight">
            </div>
          </div>
          <div className="postCenter my-5">
            <span className="postText">{caption}</span>
            <img
              className="postImg mt-5 w-full max-h-96 object-contain"
              src={photo}
              alt=""
            />
          </div>
          <div className="postBottom flex items-center justify-between">
            <div className="postBottomLeft flex items-center">
              <img
                // src={likes[post.id] ? "assets/heart.png" : "assets/like.png"}
                alt=""
                className="likeIcon w-6 h-6 cursor-pointer"
                // onClick={() => likeHandler(post.id)}
              />
              <span className="postlikeCounter text-base">
                {/* {likes[post.id] ? "You and others like it" : "Others like it"} */}
              </span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText cursor-pointer border-b border-dashed border-gray-400">
                {/* {post.comment} comments */}
              </span>
            </div>
          </div>
          </>
  )
}

export default Post