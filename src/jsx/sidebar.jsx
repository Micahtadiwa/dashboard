import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/sidebar.css';
import { FaRegUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
  const[username,setUsername]=useState("Tadiwanashe Micah");
  return (
    <div className='side_container'>
         <div className='grid1'>
            <FaRegUser className='icon' />
             <h1>{username}</h1>
         </div>
         <div className='grid2'>
            
                <Link to='./' className='link'>Home</Link>
                <Link to='installation' className='link'>Installation Guide</Link>
                <Link to='monitoring' className='link'>Monitoring </Link>
                <Link to='assets' className='link'>Asset Transfering</Link>
                <Link to='settings' className='link'>Settings</Link>

         </div>
      <div className='grid3'>
          <CiLogout className='icon'/>
          <Link to='/logout' className='logout-link'>
             Log Out
          </Link>
      </div>
    </div>
  )
}

export default Sidebar