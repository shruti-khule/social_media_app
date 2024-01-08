import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import Hermione from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Hermione.jpeg'
import '../Navbar/Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/" className='link'>
        <span>Buzz</span>
        </Link>
        <HomeIcon/>
        <DarkModeIcon/>
        <GridViewIcon/>
        <div className='search'>
           <SearchIcon /> 
           <input type="text" placeholder='Search'/>
        </div>
      </div>
      <div className='right'>
        <PersonIcon/>
        <EmailIcon/>
        <NotificationsIcon/>
        <div className='user'>
          <img src={Hermione} alt="" className='profile'/>
          <span>Hermione Granger</span>
        </div>
      </div>

    </div>
  )
}

export default Navbar