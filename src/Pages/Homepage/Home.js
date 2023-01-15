import Chatroom from "../../Components/HomeComponents/Chatroom";
import Newsfeed from "../../Components/HomeComponents/Newsfeed";
import Sidebar from "../../Components/HomeComponents/Sidebar";

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
            <Chatroom/>
        </div>
      </div>
    );
  }
  
  export default Home;
  