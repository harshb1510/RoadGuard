import { Bookmark, ChatSharp, Group, MonetizationOn } from "@mui/icons-material";
import "./Sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <RssFeedIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
          <ChatSharp className="sidebarIcon"/>
          <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
          <MonetizationOn className="sidebarIcon"/>
          <span className="sidebarListItemText">E-Challan</span>
          </li>
          <li className="sidebarListItem">
          <Group className="sidebarIcon"/>
          <span className="sidebarListItemText">Trending</span>
          </li>
          <li className="sidebarListItem">
          <HelpOutlineIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Questions</span>
          </li>
        </ul>
        <hr className="sidebarHr"/>
      </div>
    </div>
  )
}
