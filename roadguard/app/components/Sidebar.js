import { AddAlert, ChatSharp, Group, MonetizationOn } from "@mui/icons-material";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Link from "next/link";
import { Alert, AlertTitle } from "@mui/material";

export default function Sidebar() {
  return (
    <div className="flex-3 h-screen sticky top-16 overflow-y-scroll">
      <div className="p-5 pr-[200px]">
        <ul className="p-0 m-0 list-none">
          <li className="flex items-center mb-5">
            <RssFeedIcon className="text-2xl mr-3" />
           <Link href='/Feeds'>
           <button className="text-base font-semibold">Feed</button>
           </Link> 
          </li>
          <li className="flex items-center mb-5">
            <MonetizationOn className="text-2xl mr-3" />
            <Link href='e-challan'>
            <button className="text-base font-semibold">E-Challan</button>
            </Link>
          </li>
          <li className="flex items-center mb-5">
            <AddAlert className="text-2xl mr-3" />
            <Link href='e-challan'>
            <button className="text-base font-semibold">Alerts</button>
            </Link>
          </li>
          <li className="flex items-center mb-5">
            <Group className="text-2xl mr-3" />
            <button className="text-base font-semibold">Trending</button>
          </li>
          <li className="flex items-center mb-5">
            <HelpOutlineIcon className="text-2xl mr-3" />
            <Link href="/FAQ"><button className="text-base font-semibold">Questions</button></Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
