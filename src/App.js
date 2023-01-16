import logo from './logo.svg';
import './App.css';
import Home from './Pages/Homepage/Home';
import Navbar from './Components/Navbar/Navbar';
import Chatroom from './Components/HomeComponents/Chatroom';

function App() {
  return (
    <div className='flex flex-col h-screen min-h-screen min-w-full p-2 bg-gray-100'>
      <Navbar/>
      <Home/>
      <Chatroom/>
    </div>
  );
}

export default App;
