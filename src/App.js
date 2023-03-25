import "./App.css";
import Home from "./Pages/Homepage/Home";
import Navbar from "./Components/Navbar/Navbar";
import Chatroom from "./Components/HomeComponents/Chatroom";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";
import Layout from "./Pages/Layout/Layout";
import { accountLoginDetailsStore } from "./Zustand/AccountInfoStore";
import { shallow } from "zustand/shallow";
import { postStore } from "./Zustand/PostStore/PostStore";
import BottomNav from "./Components/Navbar/BottomNav";
import NewsFeedList from "./Pages/Homepage/NewsfeedContent/NewsFeedList";
import UploadForm from "./Pages/Homepage/NewsfeedContent/UploadForm";
import Register from "./Pages/RegisterPage/Register";
import LandingPage from "./Pages/Landingpage/LandingPage";

// import Layout from './Pages/Layout/Layout';

function App() {
  const [loading, setLoading] = useState(false);

  const { userInfomation,storeAccDetails } = accountLoginDetailsStore((state) => state, shallow);
  const { post, storePost } = postStore((state) => state, shallow);
  const [value, setValue] = useState();
  const theme = localStorage.getItem("theme")
  console.log("theme",theme)
  useEffect(() => {
    if (theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[theme])

  useEffect(() => {
    storeAccDetails();
  },[])

  useEffect(() =>{
      storePost();
  },[])
  return (
    <div>
      {loading ? (
        <div className="h-screen w-full flex justify-center items-center">
          <Player
            src="https://assets3.lottiefiles.com/packages/lf20_ql2srzht.json"
            className="player h-[50vh]"
            loop
            autoplay
          />
        </div>
      ) : ( 
        <div>
          <Routes>
          <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/*" element={<Layout />} />
            <Route
              path="/home"
              element={
                <div className="flex flex-col w-full h-screen min-h-screen min-w-full md:p-2 bg-gray-100 dark:bg-[#06141D]">
                 <div className="  md:flex md:flex-col">
                  <Navbar />
                  <Home />
                  <div className="hidden md:flex md:flex-col">
                  <Chatroom />
                  </div>
                  </div>
                  {/* <div className="flex flex-col md:hidden p-2">
                  <Navbar />
                    <UploadForm/>
                    <NewsFeedList/>
                      <BottomNav/>
                  </div> */}
                </div>
              }
            ></Route>
          </Routes>
        </div>
      )}
    </div>
    //  <>asdasd</>
  );
}

export default App;
