import Chatroom from "../../Components/HomeComponents/Chatroom";
import Newsfeed from "../../Components/HomeComponents/Newsfeed";
import Sidebar from "../../Components/HomeComponents/Sidebar";
import Trending from "../../Components/HomeComponents/Trending";
import ActiveUser from "./ActiveUsersContent/ActiveUser";

function Home() {
    return (
      <div className="flex flex-row gap-2 w-full">
        <div className="basis-3/12">
            <Sidebar/>
        </div>
        <div className="basis-6/12">
            <Newsfeed/>
        </div>
        <div className="basis-3/12">
          <div className="flex flex-col gap-2">
            <Trending/>
            <ActiveUser/>
          </div>
         
        </div>
      </div>
    );
  }
  
  export default Home;
  