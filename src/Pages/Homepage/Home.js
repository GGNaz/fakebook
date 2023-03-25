import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Chatroom from "../../Components/HomeComponents/Chatroom";
import Newsfeed from "../../Components/HomeComponents/Newsfeed";
import Sidebar from "../../Components/HomeComponents/Sidebar";
import Trending from "../../Components/HomeComponents/Trending";
import BottomNav from "../../Components/Navbar/BottomNav";
import ActiveUser from "./ActiveUsersContent/ActiveUser";

function Home() {
 

  const modalForm = () => {
    // return (
    //   <div className="flex z-50 absolute h-96 bg-gray-800 justify-center">
    //     123123
    //   </div>
    // )
  }

  return (

      <div className="flex flex-row gap-2 w-full">
        <div className="hidden md:flex md:basis-3/12 bg-fixed w-full">
          <Sidebar />
        </div>
        <div className="flex md:basis-6/12 w-full">
          <Newsfeed />
        </div>
        <div className="hidden md:flex w-full md:basis-3/12">
          <div className="flex flex-col gap-2 w-full">
            <Trending />
            <ActiveUser />
          </div>
        </div>
      </div>
   
  );
}

export default Home;
