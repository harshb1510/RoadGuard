"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post.js";
import Share from "./Share";

export default function Feed() {
  const [posts, setPosts] = useState([]); // Initialize posts as an empty array

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/api/posts/getpost");
        setPosts(res.data); // Assuming res.data is an array
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []); // Empty dependency array to run useEffect only once after initial render

  return (
    <div className="flex-5.5">
      <div className="pt-15 pl-10">
        <Share />
        {posts
          .slice()
          .reverse()
          .map((p) => (
            <Post key={p._id} p={p} />
          ))}
      </div>
    </div>
  );
}
