import Feed from './components/Feed/Feed.js';
import Rightbar from './components/Rightbar/Rightbar.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Topbar from './components/Topbar/Topbar.js';

const Home = () => {
  return (
    <>

    <Topbar/>
    <div className="flex w-full">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </div>
    </>
    
  );
};

export default Home;
