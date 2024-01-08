import React from 'react'
import profile from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/profile.jpeg'


const LeftPanel = () => {
  return (
    <div>LeftPanel
      <div className='container'>
        <div className='user'>
          <img src={profile} alt="" className='profile'/>
          <span>Hermione Granger</span>
        </div>
      </div>
    </div>
  )
}
export default LeftPanel;
