import logo from './logo.svg';
import './App.css';
import Home from './Pages/Homepage/Home';
import Navbar from './Components/Navbar/Navbar';
import Chatroom from './Components/HomeComponents/Chatroom';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/LoginPage/Login';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={
        <div className='flex flex-col h-screen min-h-screen min-w-full p-2 bg-gray-100'>
        <Navbar/>
        <Home/>
        <Chatroom/>
      </div> 
      }>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
