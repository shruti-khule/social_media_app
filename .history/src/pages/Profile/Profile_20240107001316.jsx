import React from 'react'
import '../Profile/Profile.scss'
import Hermione from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Hermione.jpeg'
import cover from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/cover.jpeg'
import { useContext } from 'react'
import { authContext } from '../../context/authContext'


const Profile = () => {
  const {currentUser}=useContext(authContext)
  return (
    <div className='profile'>
      <div className='images'>
        <img src={Hermione} alt="" className='profilePic' />
        <img src={cover} alt="" className='coverPic'/>

      </div>
      <div className='container'>
        <span>Hermoine Granger</span>

      </div>
    </div>
  )
}
export default Profile;
