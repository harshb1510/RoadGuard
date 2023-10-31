"use client";
import Share from "./Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post.js";
export default function Feed() {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/api/posts/getpost");
        setPosts(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [posts]);

  console.log(posts);
  
  // const [likes, setLikes] = useState({});

  // const likeHandler = (postId) => {
  //   setLikes((prevLikes) => ({
  //     ...prevLikes,
  //     [postId]: !prevLikes[postId],
  //   }));
  // };

  return (
    <div className="flex-5.5">
        <div className="pt-15 pl-10">
          <Share />
        {
          posts.map((p) => <Post key={p._id} p={p} />)
        }
          
        </div>
      
    </div>
  );
}
