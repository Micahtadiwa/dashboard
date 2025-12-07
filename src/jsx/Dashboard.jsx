import React from 'react'
import '../css/Dashboard.css';
import Sidebar from './sidebar.jsx';
import Mainbar from './mainbar.jsx';
const Dashboard = () => {
  return (
    <div className='container'>
        <div className='sidebar'>
            <Sidebar/>
        </div>
        <div className='mainbar'>
            <Mainbar/>
        </div>
        
    </div>
  )
}

export default Dashboard