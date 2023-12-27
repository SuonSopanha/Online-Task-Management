import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Navbar from "./view/part/navbar";
import Sidebar from "./view/part/sidebar"
import Main from "./view/part/test";

import HomePage from "./view/pages/HomePage";
import Login from './view/pages/login';
import Signup from './view/pages/signup';
import Welcome from './view/pages/welcome';
import Mainobj from './view/pages/mainobj';
import Kindofwork from './view/pages/kindofwork';
import Primaryrole from './view/pages/Primaryrole';
import Teamates from './view/pages/teamates';

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#65A0FD] via-[#E8CCCC] to-[#FFA9F1B5] ">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/welcome' element={<Welcome/>}/>
          <Route path='/objective' element={<Mainobj/>}/>
          <Route path='/work' element={<Kindofwork/>}/>
          <Route path='/app' element={<Main/>}/>
          <Route path='/role' element={<Primaryrole/>}/>
          <Route path='/team' element={<Teamates/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
