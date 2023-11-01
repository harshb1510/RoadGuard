"use client"
import { Chat, Notifications, Person, Search } from "@mui/icons-material"
import { useAccordion } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react"
import Link from "next/link"

const Topbar = () => {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/users/getuser");
        setName(res.data.username);
setImage(res.data.profileImage);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData(); 
  }, []); 

  





  return (
    <div className="h-16 w-full bg-gradient-to-r from-blue-700 to-pink-500 flex items-center justify-between sticky top-0 z-50">
      <div className="flex-3">
        <Link href="/" style={{ textDecoration: "none" }}>
          <span className="text-white text-lg ml-4 font-bold cursor-pointer">RoadGuard</span>
        </Link>
       
      </div>
      <div className="flex-5">
        <div className="w-full h-8 bg-white rounded-full flex items-center">
          <Search className="text-gray-500 ml-3" />
          <input
            placeholder="Search for friends, posts, or videos"
            className="bg-transparent outline-none ml-2 w-[350px] flex-1"
          />
        </div>
      </div>
      <div className="flex-4 mr-10">
        <div className="flex"></div>
        <div className="flex items-center justify-end">
          <Link href="/profile">
            <div className="flex items-center cursor-pointer">
              <h3 className="text-white">Hi! {name} </h3>
              {image ? (
                <img
                  src={image}
                  alt=""
                  className="w-8 h-8 rounded-full ml-2 cursor-pointer"
                />
              ) : (
              
              <img src="https://conservation-innovations.org/wp-content/uploads/2019/09/Dummy-Person.png" alt="" className="w-8 h-8 rounded-full ml-2 cursor-pointer" />
              )
              }
  
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Topbar
