import React from 'react'
import '../Profile/Profile.scss'
import Hermione from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Hermione.jpeg'
import cover from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/cover.jpeg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';


const Profile = () => {
  return (
    <div className='profile'>
      <div className='images'>
        <img src={Hermione} alt="" className='profilePic' />
        <img src={cover} alt="" className='coverPic'/>

      </div>
      <div className='container'>
        <div className='logos'>
          <FacebookOutlinedIcon/>
          <InstagramIcon/>
          <TwitterIcon/>

        </div>
        <div className='info'>
          <LocationOnIcon/>
          <span>Hogwarts</span>
          <button>Follow</button>


        </div>
        <div className='options'>
          <MessageIcon/>

        </div>

      </div>
    </div>
  )
}
export default Profile;
