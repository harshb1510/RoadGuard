import { Chat, Notifications, Person, Search } from "@mui/icons-material"
import Link from "next/link"
import "./Topbar.css"
const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link href="/" style={{textDecoration:"none"}}>
        <span className="logo">RoadGuard</span></Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends,post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight mr-10">
        <div className="topbarLinks">
        </div>
        <div className="topbarIcons">
        <Link href="/profile">
          <div className="topbarIconItem flex">  
            <h3>Hi! I am </h3>
           <img src="/assets/person/11.jpeg" alt="" className="topbarImg" />
          </div>
        </Link>
        </div>
          
      </div>
    </div>
  )
}

export default Topbar