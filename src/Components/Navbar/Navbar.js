import { useEffect } from "react";
import user from "../../Assets/png/user.png";
function Navbar({title, desc}) {
 
  useEffect(() => {
    console.log("localstorage", localStorage)
  },[localStorage])
    return (
      <div className="flex flex-row justify-between items-center">
        <button onClick={() => localStorage.setItem("theme", "light")}>lightmode</button>
        <button onClick={() => localStorage.setItem("theme", "dark")}>darkmode</button>
      
      <div className="text-xl text-neutralblack font-medium flex flex-col">
        <div>{title}</div>
        <div className="text-lightgray/70 text-xs">{desc}</div>
        </div>
      <div className="flex flex-row gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        <img src={user} alt="userImg" className="h-9 w-9 rounded-full" />
      </div>
    </div>
    );
  }
  
  export default Navbar;
  