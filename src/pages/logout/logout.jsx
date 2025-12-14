import React from 'react'
import './logout.css'
const logout = () => {
  return (
    <div className='logout-container'>
        <form action="" className='logout-form'>
            <h1>Are you sure you want to logout?</h1>
            <div className='buttons'>
                <button className='yes'>Yes</button>
                <button className='no'>No</button>
            </div>
        </form>
        
    </div>
  )
}

export default logout