"use client"
import { AddAlert, Group, MonetizationOn, RssFeed } from "@mui/icons-material";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Sidebar() {
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/users/getuser");
        setType(res.data.type);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const sidebarItems = {
    1: [
      { icon: <RssFeed />, text: "Feed", link: "/Feeds" },
      { icon: <MonetizationOn />, text: "E-Challan", link: "e-challan" },
      { icon: <AddAlert />, text: "Complaint", link: "complaint" },
      { icon: <Group />, text: "Trending", link: "#" },
    ],
    2: [
      { icon: <RssFeed />, text: "Feed", link: "/Feeds" },
      { icon: <MonetizationOn />, text: "E-Challan", link: "e-challan" },
      { icon: <AddAlert />, text: "Alerts", link: "e-challan" },
      { icon: <Group />, text: "Trending", link: "#" },
    ],
    3: [
      { icon: <RssFeed />, text: "Feed", link: "/Feeds" },
      { icon: <MonetizationOn />, text: "Hospital Ambulance", link: "e-challan" },
      { icon: <AddAlert />, text: "Alerts", link: "e-challan" },
      { icon: <AddAlert />, text: "Complaint", link: "complaint" },
      { icon: <Group />, text: "Trending", link: "#" },
    ],
  };

  return (
    <div className="flex-3 h-screen sticky top-16">
      <div className="p-5 pr-[200px]">
        <ul className="p-0 m-0 list-none">
          {sidebarItems[type] &&
            sidebarItems[type].map((item, index) => (
              <li key={index} className="flex items-center mb-5">
                {item.icon}
                <Link href={item.link}>
                  <button className="text-base font-semibold">{item.text}</button>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
