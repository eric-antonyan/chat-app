import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Chats from './pages/Chats';
import Create from './pages/Create';
import Authentication from './pages/Authentication'
import Chat from './pages/Chat';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  const screenHeight = window.innerHeight;
  
  document.documentElement.style.setProperty("--screenHeight", screenHeight + "px")
  const location = useLocation(); 
  return (
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Create />}></Route>
        <Route path='/signIn' element={<Authentication />}></Route>
        <Route path='/chats' element={<Chats />}></Route>
        <Route path='/chat/:uuid' element={<Chat />}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
      </Routes>
  );
}

export default App;
