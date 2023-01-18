import "./App.css";
import Home from "./Pages/Homepage/Home";
import Navbar from "./Components/Navbar/Navbar";
import Chatroom from "./Components/HomeComponents/Chatroom";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";
import Layout from "./Pages/Layout/Layout";

// import Layout from './Pages/Layout/Layout';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
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
            <Route path="/login" element={<Login />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/*" element={<Layout />} />
            <Route
              path="/home"
              element={
                <div className="flex flex-col h-screen min-h-screen min-w-full p-2 bg-gray-100">
                  <Navbar />
                  <Home />
                  <Chatroom />
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
