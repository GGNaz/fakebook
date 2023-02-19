import { useState } from "react";
import NewsFeedList from "../../Pages/Homepage/NewsfeedContent/NewsFeedList";
import UploadForm from "../../Pages/Homepage/NewsfeedContent/UploadForm";
import BottomNav from "../Navbar/BottomNav";

function Newsfeed() {
  const [openForm, setOpenForm] = useState(false)
  return (
    <div className="w-full">
 <div className="flex flex-col gap-2 min-h-screen  w-full">
      <UploadForm openForm={openForm} />
      <button className="w-full bg-blue-500/60 flex flex-row justify-center p-1 text-white items-center gap-2">
        <span>4 New Post</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fill-rule="evenodd"
            d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <NewsFeedList />
    </div>
<div className="flex flex-col md:hidden p-2 w-full">
        <BottomNav setOpenForm={setOpenForm} />
      </div>
    </div>
   
  );
}

export default Newsfeed;
