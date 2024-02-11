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
import ProjectCreate from './view/pages/projectCreate';
import Teamates from './view/pages/teamates';
import TeamCreate from './view/pages/teamCreate';
import TeamMember from './view/pages/teamMember';
import TeamMilestone from './view/pages/teamMilestone';

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
          <Route path='/projectCreate' element={<ProjectCreate/>}/>
          <Route path='/team' element={<Teamates/>}/>
          <Route path='/teamCreate' element={<TeamCreate/>}/>
          <Route path='/teamMember' element={<TeamMember/>}/>
          <Route path='/teamMilestone' element={<TeamMilestone/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
