import React from 'react'
import profile from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/profile.jpeg'
import '../LeftPanel/LeftPanel.scss'
import friends from '../../assets/friends.png'

const LeftPanel = () => {
  return (
    <div className='LeftPanel'>
      <div className='container'>
        <div className='user'>
          <img src={profile} alt="" className='profile'/>
          <span>Hermione Granger</span>
        </div>
        <div>
          <img src={friends} alt="" />
        </div>
      </div>
    </div>
  )
}
export default LeftPanel;
