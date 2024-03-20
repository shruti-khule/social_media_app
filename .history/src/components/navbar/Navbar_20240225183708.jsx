import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import Hermione from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Hermione.jpeg'
import '../Navbar/Navbar.scss'
import { modeContext } from '../../context/modeContext';
import { useContext } from 'react';
import {AuthContext} from '../../context/authContext'


const Navbar = () => {

  const {toggle, darkMode}=useContext(modeContext)
  const {currentUser}=useContext(AuthContext)


  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/" className='link'>
        <span>Buzz</span>
        </Link>
        <HomeIcon/>
        {darkMode ? <LightModeIcon onClick={toggle}/>:<DarkModeIcon onClick={toggle}/>}
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
        <Link to={`/profile/${post.user_id}`}>
        <div className='user'>
          <img src={currentUser.profile_pic} alt="" className='profile'/>
          <span>{currentUser.name}</span>
        </div>
        </Link>
      </div>

    </div>
  )
}

export default Navbar