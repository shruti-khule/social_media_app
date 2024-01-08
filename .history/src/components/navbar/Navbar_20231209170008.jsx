import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/" >
        <span className='link'>Buzz</span>
        </Link>
      </div>
      <div className='right'></div>

    
    
    
    </div>
  )
}

export default Navbar