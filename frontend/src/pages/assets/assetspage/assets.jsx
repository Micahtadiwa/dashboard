import React from 'react'
import {Link} from 'react-router-dom'
import './assets.css'

const assetspage = () => {
  return (
    <div className='assets-container'> 
        <h1>Asset Transfering </h1>
        <p>Transferring assets within Banc ABC is a crucial function that demands careful management of processes, compliance with regulations, and the use of technology. By ensuring a secure and efficient transfer system, Banc ABC can maintain client trust and facilitate smooth financial operations.</p>
        <div className='assets-buttons'>
          <Link to='/assets/form'>
            <button>Transfer Asset</button>
          </Link>
          <Link to='/assets/view'>
            <button>View Assets</button>
          </Link>
            
        </div>
        
    </div>
  )
}

export default assetspage