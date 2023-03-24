import Followers from "../../Pages/Homepage/SidebarContent/Followers";
import Profile from "../../Pages/Homepage/SidebarContent/Profile";

function Sidebar() {
    return (
        <div className="flex flex-col gap-2 min-h-screen w-full">
        <Profile/>
        <Followers/>
      </div>
    );
  }
  
  export default Sidebar;
  