"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import PermMediaIcon from "@mui/icons-material/PermMedia";

export default function Share() {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState({
    username: "",
    profileImage: "",
    caption: "",
    photo: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/users/getuser");
        setPost({...post,profileImage:res.data.profileImage,username:res.data.username})
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);


  const handleFileUpload = async(e) => {
    const image = e.target.files[0];

    const formData = new FormData();
    formData.set('image', image)

    axios.post("https://api.imgbb.com/1/upload?key=c1e87660595242c0175f82bb850d3e15", formData)
      .then(res => {
        const url = res.data.data.display_url;
        setPost({...post,photo:url})
      }
      )
      .catch((error) => {
        console.log(error);
      }
      )
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/posts/create", post);
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  }




  return (
    <form onSubmit={handleSubmit} >
    <div className="w-full h-170 rounded-lg shadow-lg p-5">
      <div className="p-5">
        <div className="flex items-center">
          {post.profileImage ? (
            <img
              src={post.profileImage}
              alt=""
              className="w-12 h-12 rounded-full mr-2 cursor-pointer"
            />
          ) : (
            <img
              className="w-12 h-12 rounded-full object-cover mr-2"
              src="https://conservation-innovations.org/wp-content/uploads/2019/09/Dummy-Person.png"
              alt=""
            />
          )}
          <input
            type="text"
            placeholder="What's happening?"
           onChange={(e)=>setPost({...post,caption:e.target.value})}
            required
            className="w-80 border-none focus:outline-none"
          />
        </div>
        <hr className="my-5" />
        <div className="flex items-center justify-between">
          <div className="flex ml-5">
            <div className="flex items-center mr-3 cursor-pointer">
              <PermMediaIcon htmlColor="tomato" className="text-lg mr-1" />
              <label className="text-base font-semibold">
              {
                        isLoading ? <p>Uploading Image</p> : <p>{post.photo ? 'Image Uploaded' : 'Photo/Video'}</p>
              }
              <input
                  type='file'
                  accept="image/*"
                  className='hidden'
                  onChange={handleFileUpload}
                />
                </label>
            </div>
          </div>
          <button type="submit" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-full"
          >
            Post
          </button>
        </div>
      </div>
    </div>
    </form>
  );
}
