import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
    <div className="w-full h-170 rounded-lg shadow-lg p-5">
      <div className="p-5">
        <div className="flex items-center">
          <img className="w-12 h-12 rounded-full object-cover mr-2" src="/assets/person/11.jpeg" alt="" />
          <input placeholder="What is in your mind" className="w-80 border-none focus:outline-none" />
        </div>
        <hr className="my-5" />
        <div className="flex items-center justify-between">
          <div className="flex ml-5">
            <div className="flex items-center mr-3 cursor-pointer">
              <PermMediaIcon htmlColor="tomato" className="text-lg mr-1" />
              <span className="text-base font-semibold">Photo/Video</span>
            </div>
            <div className="flex items-center mr-3 cursor-pointer">
              <LabelIcon htmlColor="blue" className="text-lg mr-1" />
              <span className="text-base font-semibold">Tag</span>
            </div>
            <div className="flex items-center mr-3 cursor-pointer">
              <LocationOnIcon htmlColor="green" className="text-lg mr-1" />
              <span className="text-base font-semibold">Location</span>
            </div>
            <div className="flex items-center cursor-pointer">
              <EmojiEmotionsIcon htmlColor="gold" className="text-lg mr-1" />
              <span className="text-base font-semibold">Feelings</span>
            </div>
          </div>
          <button className="border-none py-2 px-3 rounded-md bg-green-500 font-semibold cursor-pointer text-white">Share</button>
        </div>
      </div>
    </div>
  )
}
