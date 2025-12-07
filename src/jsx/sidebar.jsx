import React from 'react'
import '../css/sidebar.css';
const Sidebar = () => {
  return (
    <div className='side_container'>
         <div className='grid1'>
             <h1>Tadiwanashe Micah</h1>
         </div>
         <div className='grid2'>
            <ul>
                <li>Home</li>
                <li>Installation Guide</li>
                <li>Monitoring </li>
                <li>Asset Transfering</li>
            </ul>

         </div>
         <div className='grid3'>
            
            <h2>Log Out</h2>

         </div>
    </div>
  )
}

export default Sidebar