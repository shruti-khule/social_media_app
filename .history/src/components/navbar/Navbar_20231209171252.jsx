import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GridViewIcon from '@mui/icons-material/GridView';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/" className='link'>
        <span >Buzz</span>
        </Link>
        <HomeIcon/>
        <DarkModeIcon/>
        <GridViewIcon/>
      </div>
      <div className='right'></div>

    
    
    
    </div>
  )
}

export default Navbar