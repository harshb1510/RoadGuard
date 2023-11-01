import Question from './FAQ/page.js';
import Feed from './components/Feed.js';
import Rightbar from './components/Rightbar.js';
import Sidebar from './components/Sidebar.js';
import Topbar from './components/Topbar.js';

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
