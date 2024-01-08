import React from 'react'
import '../Profile/Profile.scss'
import harry from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/harry.jpeg'

import cover from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/cover.jpeg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='images'>
      <img src={cover} alt="" className='coverPic'/>

        <img src={harry} alt="" className='profilePic' />

      </div>
      <div className='container'>
        <div className='logos'>
          <a href="http://facebook.com">
            <FacebookOutlinedIcon fontSize='large'/>
          </a>
          <a href="http://instagram.com">

            <InstagramIcon fontSize='large'/>
          </a>
          <a href="http://twitter.com">

            <TwitterIcon fontSize='large'/>
          </a>


        </div>
        <div className='info'>
          <span>Harry Potter</span>
          <div className='location'>
            <LocationOnIcon/>
            <span>Hogwarts</span>
          </div>
          <button>Follow</button>


        </div>
        <div className='options'>
          <MessageIcon/>
          <MoreVertIcon/>

        </div>

      </div>
    </div>
  )
}
export default Profile;
