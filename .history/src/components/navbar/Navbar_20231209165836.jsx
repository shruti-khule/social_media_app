import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/" className='link'>
        <span>Buzz</span>
        </Link>
      </div>
      <div className='right'></div>

    
    
    
    </div>
  )
}

export default Navbar