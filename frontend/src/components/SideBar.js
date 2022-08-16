import React, { useEffect, useState } from 'react'
import LoginPage from './LoginPage';
import "./SideBar.css"
import { SidebarData } from './SideBarData'
import SubMenu from './SubMenu'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { logoutAuth,login, selectUser } from '../features/userSlice';
import {useDispatch, useSelector} from 'react-redux'
import logo from '../images/logo.png'
function SideBar() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = (e) =>{
    e.preventDefault()
    dispatch(logoutAuth())
    localStorage.removeItem('username');
     navigate('/')
  }
    
  return (
    <>
    {
      !user ? <LoginPage /> : 
    <>
      <div className='header-course'>
        <div className='logo'></div>
        <div>Devops </div>
        <div onClick={handleLogout} className="logout">{user ? 'Logout' : null}</div>
      </div>
      <div className='SidebarNav'>
        <div className='SidebarWrap'>
          {SidebarData.map((item, index)=>{
            return <SubMenu item={item} key={index} />;
          })}
        </div>
      </div> 
 
  </>
    }
    
   
    
    </>
  )
}

export default SideBar