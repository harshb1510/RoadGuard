import { Chat, Notifications, Person, Search } from "@mui/icons-material"
import Link from "next/link"

const Topbar = () => {
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
              <h3 className="text-white">Hi! I am</h3>
              <img src="/assets/person/11.jpeg" alt="" className="w-8 h-8 rounded-full ml-2 cursor-pointer" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Topbar
