import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../css/Dashboard.css';
import Sidebar from './sidebar.jsx';
import Mainbar from './mainbar.jsx'; // Ensure the filename matches the case
import Assetpage from '../pages/assets/assetspage/assets.jsx';
import Assetsform from '../pages/assets/assetsform/form.jsx';
const Dashboard = () => {
  return (
    <div className='container'>
        <div className='sidebar'>
            <Sidebar/>
        </div>
        <div className='mainbar'>
            <Routes>
                <Route path='/' element={<Mainbar/>}/>
                <Route path='/assets' element={<Assetpage/>}/>
                <Route path='/assets/form' element={<Assetsform/>}/>
                
            </Routes>
        </div>
    </div>
  )
}

export default Dashboard