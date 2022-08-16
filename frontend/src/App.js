import React, {useEffect, useState} from 'react'
import './App.css';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import SideBar from './components/SideBar';
import Devops from './pages/Jenkins';
import { First, JenkinsNotes, Notes, Second } from './pages/JenkinsNotes';
import Git from './pages/Git';
import { GitFirst, GitNotes, GitSecond } from './pages/GitNotes';
import { SidebarData } from './components/SideBarData';
import NotFound from './pages/NotFound';
import {useDispatch, useSelector} from 'react-redux'
import { logout,login, selectUser } from './features/userSlice';
import SignupPage from './components/SignupPage';
import Jenkins from './pages/Jenkins';
function App() {

  const user = useSelector(selectUser);

  
  return (
    <>
    
    {
      !user ? 
      <>
      
        <Routes>
          <Route path='/' exact element = {<LoginPage />} />
          <Route path='/admin' exact element = {<SignupPage />} />
          <Route path='*' exact element={<NotFound />} />
        </Routes>
      </>:
      <>
        <SideBar />
          <Routes>
              <Route path='/jenkins' exact element = {<Jenkins />} />
              <Route path='/jenkins/notes' exact element = {<JenkinsNotes />} />
              <Route path='/git' exact element = {<Git />} />
              <Route path='/git/notes' exact element = {<GitNotes />} />
              <Route path='*' exact element={<NotFound />} />
          </Routes>   
      </>
    
    }


        
        
      
    
      
     </>

  
  );
}

export default App;
